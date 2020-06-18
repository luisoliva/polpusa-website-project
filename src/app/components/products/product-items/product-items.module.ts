import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemsComponent } from './product-items.component';

@NgModule({
  declarations: [ProductItemsComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductItemsComponent]
})
export class ProductItemsModule { }
