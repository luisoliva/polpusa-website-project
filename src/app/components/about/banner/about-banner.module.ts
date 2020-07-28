import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBannerComponent } from './about-banner.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [AboutBannerComponent],
    imports: [
        CommonModule,
        TranslateModule
    ],
  exports: [AboutBannerComponent]
})
export class AboutBannerModule { }
