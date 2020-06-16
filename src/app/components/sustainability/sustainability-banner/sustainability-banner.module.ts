import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityBannerComponent } from './sustainability-banner.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [SustainabilityBannerComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [SustainabilityBannerComponent]
})
export class SustainabilityBannerModule { }
