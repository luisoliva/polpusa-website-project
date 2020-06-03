import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutBannerComponent } from './about-banner.component';

@NgModule({
  declarations: [AboutBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [AboutBannerComponent]
})
export class AboutBannerModule { }
