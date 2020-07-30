import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductCategory} from 'src/app/core/interfaces/products';
import {ECategoryType} from 'src/app/core/enums/ECategoryType';
import {ProductItemsComponent} from "../../components/products/product-items/product-items.component";
import {Product} from "../../core/models/product.model";
import {ProductCategoriesComponent} from "../../components/products/product-categories/product-categories.component";
import {Pagination} from "../../core/models/pagination.model";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  eCategory = ECategoryType;
  selectedCategoryItem: ProductCategory = {} as ProductCategory;
  @ViewChild('productItems') productItemsComponent:ProductItemsComponent
  @ViewChild('categories') categoriesComponent:ProductCategoriesComponent;

  constructor() { }

  ngOnInit(): void {
  }

  setCategorySelectedItem(category: ProductCategory) {
    if (this.productItemsComponent.searchComponent !== undefined){
      if (this.selectedCategoryItem.type == ECategoryType.SEARCH && this.productItemsComponent.searchComponent.searchPerformed){
        this.productItemsComponent.searchComponent.clearSearch();
      }
    }

    if (this.productItemsComponent.filterComponent !== undefined){
      if (this.selectedCategoryItem.type == ECategoryType.FILTER && this.productItemsComponent.filterComponent.searchPerformed){
        this.productItemsComponent.filterComponent.filterByType(0);
      }
    }

    this.selectedCategoryItem = category;
  }

  getProductSelected($event: any) {
    this.productItemsComponent.goToProductDetail($event);
  }

  getItemsFound($event: {data:Product[],pagination:Pagination, category_id:number}) {
    this.categoriesComponent.setItemsFound($event);
  }
}
