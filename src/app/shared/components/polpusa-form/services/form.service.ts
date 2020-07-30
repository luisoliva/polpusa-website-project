import { Injectable } from '@angular/core';
import {ApiService} from "../../../services/api.service";
import {Observable} from "rxjs";
import {PolpusaForm} from "../../../../core/models/polpusa-form.model";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private api:ApiService) { }

  submitForm(data:PolpusaForm):Observable<any>{
    return this.api.post('v1/api/contact/', this.api.getFormData(data));
  }
}
