import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../../shared/services/api.service";
import {SlideTranslation} from "../../../core/models/slide-translation.model";
import {Slide} from "../../../core/models/slide.model";

@Injectable({
  providedIn: 'root'
})
export class SlidesApiService {

  constructor(private api:ApiService) { }

  deleteSlide(id:number):Observable<any>{
    return this.api.delete('v1/api/slides/' + id + '/')
  }

  uploadTranslationSlide(data:SlideTranslation): Observable<any>{
    return this.api.uploadSlide('v1/api/traslation-slide/',data);
  }

  uploadFile(data:Slide): Observable<any>{
    return this.api.uploadSlide('v1/api/slides/',data);
  }

  updateSlide(id:number, data:Slide):Observable<any>{
    return this.api.updateSlide('v1/api/slides/' + id + '/',data);
  }
}
