import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteBannerComponent } from './quote-banner.component';

@NgModule({
  declarations: [QuoteBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [QuoteBannerComponent]
})
export class QuoteBannerModule { }
