import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityBannerComponent } from './sustainability-banner.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [SustainabilityBannerComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        TranslateModule
    ],
  exports: [SustainabilityBannerComponent]
})
export class SustainabilityBannerModule { }
