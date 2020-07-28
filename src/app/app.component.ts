import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {CurrentLanguageService} from "./core/current-language.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'polpusa-frontend';
  language = 'es';

  constructor(private translateService:TranslateService,
              private currentLanguageService:CurrentLanguageService) {
    this.translateService.addLangs(['en', 'es']);
    this.translateService.setDefaultLang('es')
    const browserLang = this.translateService.getBrowserLang();
    let local = localStorage.getItem('polpusa-language');
    if (local){
      this.language = local;
      this.translateService.use(local);
      this.currentLanguageService.setLanguage(local);
    }else{
      let defaultLang = browserLang.match(/en|es/) ? browserLang : 'es';
      this.translateService.use(defaultLang);
      this.currentLanguageService.setLanguage(defaultLang);
    }
  }

  setLanguage($event: string) {
    // this.translateService.use($event);
    // this.currentLanguageService.setLanguage($event);
    localStorage.setItem('polpusa-language',$event);
    window.location.reload();
  }
}
