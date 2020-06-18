import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductBannerComponent } from './product-banner.component';

@NgModule({
  declarations: [ProductBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductBannerComponent]
})
export class ProductBannerModule { }
