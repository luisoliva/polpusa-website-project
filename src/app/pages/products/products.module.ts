import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductBannerModule } from 'src/app/components/products/product-banner/product-banner.module';
import { ProductCategoriesModule } from 'src/app/components/products/product-categories/product-categories.module';
import { ProductItemsModule } from 'src/app/components/products/product-items/product-items.module';
import { ProductSearchBarModule } from 'src/app/components/products/product-search-bar/product-search-bar.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductBannerModule,
    ProductCategoriesModule,
    ProductItemsModule,
    ProductSearchBarModule
  ]
})
export class ProductsModule { }
