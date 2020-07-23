import {Injectable} from '@angular/core';
import {forkJoin, Observable} from "rxjs";
import {DescriptionTranslation} from "../../../core/models/descripction-translation.model";
import {Description} from "../../../core/models/description.model";
import {ApiService} from "../../../shared/services/api.service";
import {Sustainability} from "../../../core/models/sustainability.model";

@Injectable({
  providedIn: 'root'
})
export class SustainabilityService {

  constructor(private api:ApiService) { }

  getBanners():Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=5&type=2');
  }

  getTrustInUsImage():Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=5&type=6&order=1');
  }

  getLineProductsImage():Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=5&type=6&order=2');
  }

  getPlasticImage():Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=5&type=6&order=3')
  }

  getOurActionsImage(image:'A' | 'B'):Observable<any>{
    if(image == 'A'){
      return this.api.get('v1/api/slides-traslations/?section=5&type=6&order=4')
    }else if (image == 'B'){
      return this.api.get('v1/api/slides-traslations/?section=5&type=6&order=5')
    }
  }

  getPolpusaVerdeImages(image:'A' | 'B' ):Observable<any>{
    if(image == 'A'){
      return this.api.get('v1/api/slides-traslations/?section=5&type=6&order=6')
    }else if (image == 'B'){
      return this.api.get('v1/api/slides-traslations/?section=5&type=6&order=7')
    }
  }

  getSustainabilityData(){
    return new Observable<any>(subs => {
      const data = new Sustainability();
      const $requests = forkJoin([
        this.api.get('v1/api/description-translations/?description_type=1'),
        this.api.get('v1/api/description-translations/?description_type=2'),
        this.api.get('v1/api/description-translations/?description_type=3'),
        this.api.get('v1/api/description-translations/?description_type=4'),
        this.api.get('v1/api/description-translations/?description_type=5'),
        this.api.get('v1/api/description-translations/?description_type=6'),
      ]);

      $requests.toPromise()
          .then((result:[any, any, any, any, any, any]) =>{
            data.plastic_sustainability = new Description(1,1,this.setTranslationArray(result[0].data), this.setDescription(result[0].data),this.setId(result[0].data));
            data.our_actions = new Description(2,1,this.setTranslationArray(result[1].data), this.setDescription(result[1].data),this.setId(result[1].data));
            data.polpusa_verde_brief = new Description(3,1,this.setTranslationArray(result[2].data), this.setDescription(result[2].data),this.setId(result[2].data));
            data.polpusa_verde_long = new Description(4,1,this.setTranslationArray(result[3].data), this.setDescription(result[3].data),this.setId(result[3].data));
            data.special_products = new Description(5,1,this.setTranslationArray(result[4].data), this.setDescription(result[4].data),this.setId(result[4].data));
            data.polpusa_verde_opc = new Description(6,1,this.setTranslationArray(result[5].data), this.setDescription(result[5].data),this.setId(result[5].data));
          })
          .finally(()=>{
            subs.next(data);
            subs.complete();
          })
    })
  }

  setTranslationArray(obj:Array<Description>):Array<DescriptionTranslation>{
    if (obj.length !==0){
      return obj[0].translation.length !==0 ? obj[0].translation : new Array<DescriptionTranslation>(new DescriptionTranslation(1))
    }else{
      return new Array<DescriptionTranslation>(new DescriptionTranslation(1));
    }
  }

  setDescription(obj:Array<Description>):string{
    if (obj.length !==0){
      return obj[0].description ? obj[0].description : '';
    }else{
      return '';
    }
  }

  setId(obj:Array<Description>):number{
    if (obj.length !==0){
      return obj[0].id ? obj[0].id : null;
    }else{
      return null;
    }
  }
}
