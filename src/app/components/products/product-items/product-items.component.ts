import {Component, OnInit, Input, ViewChild, EventEmitter, Output} from '@angular/core';
import { ProductItem, ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';
import {Product} from "../../../core/models/product.model";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {CurrentLanguageService} from "../../../core/current-language.service";
import {HttpClient} from "@angular/common/http";
import {Pagination} from "../../../core/models/pagination.model";
import {ProductSearchBarComponent} from "../product-search-bar/product-search-bar.component";
import {ProductFilterComponent} from "../product-filter/product-filter.component";

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
  @Output() itemsFoundEmitter = new EventEmitter<{data:Product[],pagination:Pagination, category_id:number}>()
  @ViewChild('detail') detailComponent:ProductDetailComponent
  @ViewChild('search') searchComponent:ProductSearchBarComponent;
  @ViewChild('filter') filterComponent:ProductFilterComponent;

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
