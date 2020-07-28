import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CurrentLanguageService {
  private _language: string = 'es';
  currentLanguage: Subject<string> = new Subject();

  constructor() { }

  get language():string {
    return this._language;
  }

  set language(value) {
    this._language = value;
    this.currentLanguage.next(value);
  }

  setLanguage(language:string) {
    this.language = language;
  }

  observeLanguage():Observable<string>{
    return this.currentLanguage.asObservable();
  }
}
