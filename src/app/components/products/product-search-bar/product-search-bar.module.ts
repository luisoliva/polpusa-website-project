import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchBarComponent } from './product-search-bar.component';

@NgModule({
  declarations: [ProductSearchBarComponent],
  imports: [
    CommonModule
  ],
  exports: [ProductSearchBarComponent]
})
export class ProductSearchBarModule { }
