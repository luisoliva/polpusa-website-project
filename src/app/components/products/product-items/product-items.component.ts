import {Component, OnInit, Input, ViewChild} from '@angular/core';
import { ProductItem, ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';
import {Product} from "../../../core/models/product.model";
import {ProductDetailComponent} from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input() selectedCategoryItem: ProductCategory;
  eCategory = ECategoryType;
  showProductDetail: boolean = false;
  productSelected:Product;

  constructor() { }

  ngOnInit(): void {
  }

  goToProductDetail(product: Product) {
    this.showProductDetail = true;
    this.productSelected  = product;
    // if(this.productSelected){
    //   let des = product.description;
    //   this.productSelected = product;
    //   this.productSelected.description = null;
    //   setTimeout(()=>{
    //     this.productSelected.description = des;
    //     console.log('detail: ', product);
    //   })
    // }else{
    //   this.productSelected = product;
    // }
  }

  hideProductDetail() {
    this.showProductDetail = false;
  }
}
