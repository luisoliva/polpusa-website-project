import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {DescriptionTranslation} from "../../../core/models/descripction-translation.model";
import {Description} from "../../../core/models/description.model";
import {ApiService} from "../../../shared/services/api.service";
import {Utils} from "../../../core/utils";

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {

  constructor(private api:ApiService) { }

  addDescription(description:Description):Observable<any>{
    return this.api.post('v1/api/description/', description);
  }

  updateDescription(description:Description, id:number):Observable<any>{
    return this.api.put('v1/api/description/'+id+'/', description);
  }

  addDescriptionTranslation(description:DescriptionTranslation):Observable<any>{
    return this.api.post('v1/api/translation-description/', description);
  }

  updateDescriptionTranslation(description:DescriptionTranslation, id:number):Observable<any>{
    return this.api.put('v1/api/translation-description/'+id+'/', description);
  }

  saveDescription(description:Description):Observable<any>{
    const des = JSON.parse(JSON.stringify(description));
    delete des.id;
    delete des.translation;
    return new Observable<any>(subs => {
      if (description.id) {
        this.updateDescription(des, description.id).toPromise()
            .then(res => {
              subs.next({description:res, translation:null});
            })
            .catch(err => {
              subs.error();
            })
            .finally(() => subs.complete())
      } else {
        this.addDescription(des).toPromise()
            .then(res => {
              subs.next({description:res, translation:null});
            })
            .catch(err => {
              subs.error();
            })
            .finally(() => subs.complete())
      }
    })
  }

  saveTranslationDescription(description:Description):Observable<any>{
    const translation = Utils.cloneObject(description.translation[0]);
    const des = Utils.cloneObject(description);
    delete des.translation;
    delete des.id;
    delete translation.id;
    translation.translation = description.id
    return new Observable<any>(subs => {
      if (!description.id) {
        this.addDescription(des).toPromise()
            .then(res1 => {
              //subs.next(res1);
              translation.translation = res1.id
              this.addDescriptionTranslation(translation).toPromise()
                  .then(res2=>{
                    subs.next({description:res1,translation:res2});
                    //this.message.successMessage();
                  })
                  .catch(err=>subs.error())
                  .finally(()=>subs.complete())
            })
            .catch(err => {
              subs.error();
            })
      } else {
        if(description.translation[0].id){
          this.updateDescriptionTranslation(translation,description.translation[0].id).toPromise()
              .then(res=>{
                subs.next({translation:res,description:null});
                //this.message.successMessage();
              })
              .catch(err=>subs.error())
              .finally(()=>subs.complete())
        }else{
          translation.translation = description.id;
          this.addDescriptionTranslation(translation).toPromise()
              .then(res=>{
                subs.next({translation:res,description:null});
                //this.message.successMessage();
              })
              .catch(err=>subs.error())
              .finally(()=>subs.complete())
        }
      }
    })
  }
}
