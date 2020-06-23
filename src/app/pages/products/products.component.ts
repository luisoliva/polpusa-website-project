import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  eCategory = ECategoryType;
  selectedCategoryItem: ProductCategory = {} as ProductCategory;

  constructor() { }

  ngOnInit(): void {
  }

  setCategorySelectedItem(category: ProductCategory) {
    this.selectedCategoryItem = category;
  }

}
