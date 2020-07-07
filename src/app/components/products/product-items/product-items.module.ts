import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemsComponent } from './product-items.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProductDetailModule } from '../product-detail/product-detail.module';
import { ProductSearchBarModule } from '../product-search-bar/product-search-bar.module';
import { ProductFilterModule } from '../product-filter/product-filter.module';

@NgModule({
  declarations: [ProductItemsComponent],
  imports: [
    CommonModule,
    // AppRoutingModule
    ProductDetailModule,
    ProductSearchBarModule,
    ProductFilterModule
  ],
  exports: [ProductItemsComponent]
})
export class ProductItemsModule { }
