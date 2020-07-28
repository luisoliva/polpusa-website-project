import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [BannerComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        TranslateModule
    ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
