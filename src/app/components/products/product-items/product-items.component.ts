import {Component, OnInit, Input, ViewChild, EventEmitter, Output} from '@angular/core';
import { ProductItem, ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';
import {Product} from "../../../core/models/product.model";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {CurrentLanguageService} from "../../../core/current-language.service";
import {HttpClient} from "@angular/common/http";
import {Pagination} from "../../../core/models/pagination.model";

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
  isLoading = false;
  @Output() itemsFoundEmitter = new EventEmitter<{data:Product[],pagination:Pagination}>()
  @ViewChild('detail') detailComponent:ProductDetailComponent

  constructor(public currentLanguage:CurrentLanguageService,
              private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  goToProductDetail(product: Product) {
    this.showProductDetail = true;
    this.productSelected  = product;
    setTimeout(()=>{
      this.detailComponent.formComponent.setRequest(this.productSelected.category_id);
    })
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

  loadMoreProducts() {
    this.isLoading = true;
    this.httpClient.get(this.selectedCategoryItem.pagination.links.next).toPromise()
        .then((res:any)=>{
          this.selectedCategoryItem.subcategory = this.selectedCategoryItem.subcategory.concat(res.data);
          this.selectedCategoryItem.pagination = res.pagination;
        })
        .finally(()=> {
          setTimeout(()=>{
            this.isLoading = false
          },500)
        })
  }
}
