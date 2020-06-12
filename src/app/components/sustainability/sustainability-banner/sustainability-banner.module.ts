import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityBannerComponent } from './sustainability-banner.component';

@NgModule({
  declarations: [SustainabilityBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [SustainabilityBannerComponent]
})
export class SustainabilityBannerModule { }
