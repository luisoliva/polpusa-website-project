import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ApiService} from "../../../shared/services/api.service";

@Injectable({
  providedIn: 'root'
})
export class HomepageApiService {

  constructor(private api: ApiService) { }

  getMainVideo(): Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=1&type=1');
  }

  getCountries():Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=1&type=4');
  }

  getBrands():Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=1&type=3');
  }

  getCertifications(): Observable<any>{
    return this.api.get('v1/api/slides-traslations/?section=1&type=5')
  }
}
