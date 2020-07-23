import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http'
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment.prod";
import {Category} from "../../core/models/category.model";
import {Upload} from "../../core/models/upload.model";
import {Product} from "../../core/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }

  getJson() {
    return this.httpClient.get('assets/json/data.json');
  }

  getJsonNotifications() {
    return this.httpClient.get('assets/json/data-notification.json');
  }

  get(url: any) {
    return this.httpClient.get(environment.url + url)
  }

  post(url: any, data: any) {
    return this.httpClient.post(environment.url + url, data)
  }

  patch(url: any, data: any) {
    return this.httpClient.patch(environment.url + url, data)
  }

  put(url: any, data: any) {
    return this.httpClient.put(environment.url + url, data)
  }

  delete(url: any) {
    return this.httpClient.delete(environment.url + url)
  }

  uploadSlide(url:string, data:any): Observable<any>{
    return this.httpClient.post(environment.url + url, this.getFormData(data), {
      reportProgress:true,
      observe: 'events'
    })
  }

  updateCategory(url:string,category:Category):Observable<any>{
    return this.httpClient.put(environment.url + url, this.getFormData(category), {
      reportProgress:true,
      observe: 'events'
    })
  }

  updateSlide(url:string, data:any): Observable<any>{
    return this.httpClient.put(environment.url + url, this.getFormData(data), {
      reportProgress:true,
      observe: 'events'
    })
  }

  uploadBlog(url, data):Observable<any>{
    return this.httpClient.put(environment.url + url, this.getFormData(data), {
      reportProgress:true,
      observe: 'events'
    })
  }

  createBlog(url, data):Observable<any>{
    return this.httpClient.post(environment.url + url, this.getFormData(data), {
      reportProgress:true,
      observe: 'events'
    })
  }

  uploadImagesProducts(url:string, data:Upload):Observable<any>{
    return this.httpClient.post(environment.url + url, this.getFormData(data),{
      reportProgress:true,
      observe:'events'
    })
  }

  uploadProductMainImage(url:string, data:Product):Observable<any>{
    return this.httpClient.put(environment.url + url, this.getFormDataProduct(data),{
      reportProgress: true,
      observe: 'events'
    })
  }

  getFormData(data:any): FormData{
    const formData = new FormData();
    for (var key in data) {
      formData.append(key, data[key]);
    }
    return formData
  }

  getFormDataProduct(data:any): FormData{
    const formData = new FormData();
    for (var key in data) {
      if (key == 'image_use' || key == 'images_type'){
        if (key == 'image_use'){
          data[key].forEach(function (element) {
            formData.append('image_use', String(element));
          })
        }else {
          data[key].forEach(function (element) {
            formData.append('images_type', String(element));
          })
        }
      }else{
        formData.append(key, data[key]);
      }
    }
    return formData
  }
}

// intercepta las llamadas a los endpoits para setear el token
// @Injectable() export class HttpConfigInterceptor implements HttpInterceptor {
//   constructor(private userService:UserService) {}
//
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this.userService.get();
//
//     if (token) {
//       request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token.access) });
//     }
//
//     request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
//     request = request.clone({ headers: request.headers.set('Accept-Language', 'es-mx') });
//
//     return next.handle(request).pipe(
//       map((event: HttpEvent<any>) => {
//         // if (event instanceof HttpResponse) {
//         //   // console.log('event--->>>', event);
//         // }
//         return event;
//       })
//     );
//   }
//
// }
