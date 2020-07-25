import { Injectable } from '@angular/core';
import {forkJoin, Observable} from "rxjs";
import {ApiService} from "../../../shared/services/api.service";
import {Category} from "../../../core/models/category.model";
import {Product} from "../../../core/models/product.model";
import {Upload} from "../../../core/models/upload.model";
import {ProductEn} from "../../../core/models/product-en.model";
import {Utils} from "../../../core/utils";
import {Spec} from "../../../core/models/spec.model";
import {ProductCategory} from "../../../core/interfaces/products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private api:ApiService) { }

  getCategories():Observable<any>{
    return this.api.get('v1/api/categories-traslations/');
  }

  updateCategory(id:number, category:Category):Observable<any>{
    return this.api.updateCategory('v1/api/categories/' + id + '/',category);
  }

  updateTranslationCategory(id:number, translationData:{title:string, description:string, language:number}):Observable<any>{
    return this.api.put('v1/api/traslation-categories/'+id+'/', translationData);
  }

  getProductsByCategory(categoryId:number):Observable<any>{
    return this.api.get('v1/api/product-all/?category_id='+categoryId);
  }

  deleteProduct(id:number):Observable<any>{
    return this.api.delete('v1/api/product/'+id+'/');
  }

  createProduct(product:Product):Observable<any>{
    return new Observable<any>(subs => {
      let image_use:Array<number> = [];
      let images_type:Array<number> = [];

      const joinRequestImages = forkJoin(this.getRequestsOfImages(product, true, true));
      subs.next({progress:0, action:'Subiendo imágenes de usos sugeridos o tipos de bolsa...'})
      joinRequestImages.toPromise()
          .then(results=>{
            let n_image_type = product.images_type ? product.images_type.length : 0
            for(let i=0;i<results.length;i++){
              if (i < n_image_type){
                images_type.push(results[i].body.id)
              }else{
                image_use.push(results[i].body.id)
              }
            }
            subs.next({progress:33, action:'Creando producto en español...'})
            const requestProduct = this.getProductRequestModel(product, image_use, images_type);
            this.createProductEs(requestProduct).toPromise()
                .then(res=>{
                  subs.next({progress:66, action:'Creando traducción del producto...'})
                  const joinRequestWithProductId = forkJoin(this.getRequestWithProductId(res.id, product));
                  joinRequestWithProductId.toPromise()
                      .then(()=>{
                        subs.next({progress:100, action:'Producto creado correctamente'})
                        subs.complete()
                      })
                      .catch(()=>subs.error({error:'Ocurrió un error al crear la traducción de producto. Intente de nuevo'}))
                })
                .catch(()=>subs.error({error:'Ocurrió un error al crear el produto en español. Intente de nuevo'}))
          })
          .catch(()=>subs.error({error:'Ocurrió un error al subir las imágenes. Intente de nuevo'}))
    })
  }

  private getImagesIndexesArray(images_type:Array<Upload>, image_use:Array<Upload>):{images_type: Array<number>, image_use: Array<number>}{
    let a:{images_type:Array<number>, image_use:Array<number>} = {images_type: new Array<number>(), image_use:new Array<number>()}
    images_type.forEach(function (element:Upload) {
      a.images_type.push(element.id)
    })
    image_use.forEach(function (element:Upload) {
      a.image_use.push(element.id)
    })
    return a;
  }

  private getProductRequestModel(product:Product, image_use:Array<number>, images_type:Array<number>):Product{
    let requestProduct:Product = Utils.cloneObject(product);
    if (product.data_sheet){
      requestProduct.data_sheet = product.data_sheet;
    }else{
      delete requestProduct.data_sheet;
    }
    if (product.product_photo){
      requestProduct.product_photo = product.product_photo;
    }else{
      delete requestProduct.product_photo;
    }
    if (image_use.length !== 0){
      requestProduct.image_use = image_use;
    }else{
      delete requestProduct.image_use;
    }
    if (images_type.length !==0){
      requestProduct.images_type = images_type;
    }else{
      delete requestProduct.images_type;
    }
    if (product.photo_specifications){
      requestProduct.photo_specifications = product.photo_specifications;
    }else {
      delete requestProduct.photo_specifications
    }
    if (product.type_bag !== 5 && product.type_bag !== undefined){
      requestProduct.type_bag = product.type_bag
    }else{
      delete requestProduct.type_bag;
    }
    delete requestProduct.specs_id;
    delete requestProduct.product_EN;
    delete requestProduct.advantage_id;
    delete requestProduct.advantage_EN;
    delete requestProduct.properties_id
    delete requestProduct.properties_EN;
    return requestProduct;
  }

  private getRequestWithProductId(id:number, product:Product):Array<Observable<any>>{
    let requests = []
    let productEn = product.product_EN[0];
    let advantagesEs = product.advantage_id;
    let advantagesEn = product.advantage_EN;
    let propertiesEs = product.properties_id;
    let propertiesEn = product.properties_EN;
    productEn.product_id = id;

    requests.push(this.createProductEn(productEn))
    if (product.specs_id){
      product.specs_id[0].product_id = id;
      requests.push(this.createSpecs(product.specs_id[0]))
    }
    advantagesEs.forEach(function (element) {
      element.product_id = id;
      requests.push(this.createAdvantageEs(element));
    }.bind(this))
    advantagesEn.forEach(function (element) {
      element.advantageEN = id;
      requests.push(this.createAdvantageEn(element))
    }.bind(this))
    propertiesEs.forEach(function (element) {
      element.product_id = id;
      requests.push(this.createPropertyEs(element))
    }.bind(this))
    propertiesEn.forEach(function (element) {
      element.propertiesEN = id;
      requests.push(this.createPropertyEn(element))
    }.bind(this))

    return requests;
  }

  private getRequestProductEn(product:ProductEn){
    let request = Utils.cloneObject(product);
    if (product.photo_specifications){
      request.photo_specifications = product.photo_specifications;
    }else{
      delete request.photo_specifications;
    }
    if(product.data_sheet){
      request.data_sheet = product.data_sheet;
    }else{
      delete request.data_sheet
    }

    return request;
  }

  private getRequestsOfImages(product:Product, bagsType:boolean, suggUses:boolean):Array<Observable<any>>{
    const requests = [];
    if (product.images_type !== undefined && bagsType){
      for (let i=0;i<product.images_type.length;i++){
        requests.push(this.createUpload(product.images_type[i]));
      }
    }
    if (product.image_use !== undefined && suggUses){
      for (let i=0;i<product.image_use.length;i++){
        requests.push(this.createUpload(product.image_use[i]));
      }
    }
    return requests;
  }

  private createProductEn(product):Observable<any>{
    return this.api.post('v1/api/product-EN/',this.api.getFormData(product));
  }

  private createProductEs(product):Observable<any>{
    return this.api.post('v1/api/product/', this.api.getFormDataProduct(product))
  }

  private createUpload(image:any):Observable<any>{
    return this.api.uploadImagesProducts('v1/api/upload-file/', image)
  }

  createAdvantageEs(advantageEs){
    return this.api.post('v1/api/advantage/',advantageEs);
  }

  createAdvantageEn(advantageEn){
    return this.api.post('v1/api/advantage-EN/',advantageEn);
  }

  createPropertyEs(propertyEs):Observable<any>{
    return this.api.post('v1/api/properties/',propertyEs);
  }

  createPropertyEn(propertyEn): Observable<any>{
    return this.api.post('v1/api/properties-EN/',propertyEn);
  }

  private createSpecs(specs):Observable<any>{
    return this.api.post('v1/api/specs/', specs)
  }

  updateProductSpanishData(product:Product, images_type:Array<any>, image_use:Array<any>):Observable<any>{
    let images = this.getImagesIndexesArray(images_type, image_use)
    let request = this.getProductRequestModel(product, images.image_use, images.images_type)
    delete request.category_id;
    delete request.id;
    return this.api.put('v1/api/product/'+product.id+'/', this.api.getFormDataProduct(request));
  }

  updateProductEnglishData(product:ProductEn):Observable<any>{
    let request = this.getRequestProductEn(product)
    delete request.product_id;
    delete request.id;
    return this.api.put('v1/api/product-EN/'+product.id+'/', this.api.getFormDataProduct(request));
  }

  updatePropertyEs(id:number, property:{product_id:number, property_product:string}):Observable<any>{
    return this.api.put('v1/api/properties/'+id+'/', property)
  }

  updatePropertyEn(id:number, property:{propertiesEN:number, property_product:string}):Observable<any>{
    return this.api.put('v1/api/properties-EN/'+id+'/',property);
  }

  updateAdvantageEs(id:number, advantage:{product_id:number, advantage_product:string}):Observable<any>{
    return this.api.put('v1/api/advantage/'+id+'/', advantage)
  }

  updateAdvantageEn(id:number, advantage:{advantageEN:number, advantage_product:string}):Observable<any>{
    return this.api.put('v1/api/advantage-EN/'+id+'/',advantage);
  }

  deletePropertyEs(id:number):Observable<any>{
    return this.api.delete('v1/api/properties/'+id+'/')
  }

  deletePropertyEn(id:number):Observable<any>{
    return this.api.delete('v1/api/properties-EN/'+id+'/');
  }

  deleteAdvantageEs(id:number):Observable<any>{
    return this.api.delete('v1/api/advantage/'+id+'/')
  }

  deleteAdvantageEn(id:number):Observable<any>{
    return this.api.delete('v1/api/advantage-EN/'+id+'/');
  }

  updateSpecs(id:number, spec:Spec):Observable<any>{
    let request = Utils.cloneObject(spec);
    delete request.id;
    return this.api.put('v1/api/specs/'+id+'/',spec);
  }

  updateProductMainImage(product:Product, images_type:Array<any>, image_use:Array<any>):Observable<any>{
    let images = this.getImagesIndexesArray(images_type, image_use)
    let request = this.getProductRequestModel(product, images.image_use, images.images_type)
    delete request.category_id;
    delete request.id;
    return this.api.uploadProductMainImage('v1/api/product/'+product.id+'/',request);
  }

  updateUploads(product:Product, image_use:Array<any>, images_type:Array<any>, bagsTypes:boolean, suggUses:boolean):Observable<any>{
    return new Observable<any>(subs => {
      let subRes:{percentage:number, data:any, error:string} = {percentage:20, data:null, error:''}
      let obj:Product = Utils.cloneObject(product);
      obj.images_type = [];
      obj.image_use = [];

      subs.next(subRes);
      let requests = forkJoin(this.getRequestsOfImages(product, bagsTypes, suggUses));
      requests.toPromise()
          .then(data=>{
            subRes.percentage=60;
            subs.next(subRes);
            obj.images_type = obj.images_type.concat(images_type);
            obj.image_use = obj.image_use.concat(image_use);
            if (bagsTypes){
              data.forEach(function (element) {
                obj.images_type.push(element.body)
              })
            }else{
              data.forEach(function (element) {
                obj.image_use.push(element.body)
              })
            }

            this.updateProductSpanishData(obj, obj.images_type, obj.image_use).toPromise()
                .then(()=>{
                  subRes.percentage = 100;
                  subRes.data = data.map(function (element) {return element.body});
                  subs.next(subRes);
                })
                .catch(()=>{
                  subRes.error = 'Error al actualizar el producto. Intente de nuevo'
                  subs.error(subRes)
                })
                .finally(()=>subs.complete())
          })
          .catch(()=>{
            subRes.error = 'Error al subir las imágenes, Intente de nuevo'
            subs.error()
            subs.complete()
          })
    })
  }

  deleteUpload(id:number):Observable<any>{
    return this.api.delete('v1/api/upload-file/'+id+'/');
  }

  getAllProducts(products:ProductCategory[]):Observable<any>{
    let req = []
    products.forEach((item) => {
      req.push(this.getProductsByCategory(item.id))
    })
    return forkJoin(req)
  }

}
