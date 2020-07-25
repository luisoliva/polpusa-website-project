import {Component, OnInit, ViewChild} from '@angular/core';
import { ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';
import {ProductDetailComponent} from "../../components/products/product-detail/product-detail.component";
import {ProductItemsComponent} from "../../components/products/product-items/product-items.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  eCategory = ECategoryType;
  selectedCategoryItem: ProductCategory = {} as ProductCategory;
  @ViewChild('productItems') productItemsComponent:ProductItemsComponent

  constructor() { }

  ngOnInit(): void {
  }

  setCategorySelectedItem(category: ProductCategory) {
    this.selectedCategoryItem = category;
  }

  getProductSelected($event: any) {
    this.productItemsComponent.goToProductDetail($event);
  }
}
