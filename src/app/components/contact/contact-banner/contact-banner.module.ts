import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from './contact-banner.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [ContactBannerComponent],
    imports: [
        CommonModule,
        TranslateModule
    ],
  exports: [ContactBannerComponent]
})
export class ContactBannerModule { }
