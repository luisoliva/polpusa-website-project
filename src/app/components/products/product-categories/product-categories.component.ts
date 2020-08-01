import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';
import {ProductsService} from "../../../pages/products/services/products.service";
import {Category} from "../../../core/models/category.model";
import {CurrentLanguageService} from "../../../core/current-language.service";
import {Product} from "../../../core/models/product.model";
import {Pagination} from "../../../core/models/pagination.model";

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  @Output() setCategorySelectedItem:EventEmitter<ProductCategory> = new EventEmitter<ProductCategory>()
  active: string = 'fas fa-angle-down';
  normal: string = 'fas fa-angle-right';
  categorySelectedItem: ProductCategory;
  productCategories:ProductCategory[]=[]
  @Output() productSelected = new EventEmitter<any>()
  @Input() productSelectedVal;
  originalProducts:Product[] = null;
  originalPagination:Pagination = null;

  constructor(private productsService:ProductsService,
              public currentLanguage:CurrentLanguageService) { }

  ngOnInit(): void {
    this.productsService.getCategories().toPromise()
        .then(res=>{
          res.data.forEach((item:Category)=>{
            this.productCategories.push(
                {
                  id:item.id,
                  name:item.title.length > 18 ? this.splitWord(item.title) : item.title,
                  type: item.id == 2 ? ECategoryType.FILTER : ECategoryType.SEARCH,
                  category : item.category
                })
          })
          this.productsService.getAllProducts(this.productCategories).toPromise()
              .then(values=>{
                  this.productCategories.forEach((x)=>{
                      for (let i=0;i<values.length;i++){
                        if (values[i].data.length !== 0){
                            if (x.id == values[i].data[0].category_id){
                                x.subcategory = values[i].data;
                                x.pagination = values[i].pagination;
                                break
                            }
                        }else{
                            x.subcategory = []
                        }
                      }
                  })
                  this.categorySelectedItem = this.productCategories[0]; // Set default element
                  this.setCategorySelectedItem.emit(this.productCategories[0]); // Set default element filter o search component
              })
        })
  }

  splitWord(word: string) {
    let splitedWord = word.split(' ');
    let wordResult = splitedWord[0] + " " + splitedWord[1] + '<br/>' + splitedWord[2]
    return wordResult;
  }

  selectedCategory(category: ProductCategory) {
    if (this.categorySelectedItem !== category) {
      this.categorySelectedItem = category;
      this.setCategorySelectedItem.emit(category);
    } else {
      this.categorySelectedItem;
      // this.setCategorySelectedItem.emit(null);
    }
  }

  selectedProduct(subcategory){
    this.productSelected.emit(subcategory)
    this.productSelectedVal = subcategory;
  }

  setItemsFound(products:{data:Product[],pagination:Pagination, category_id:number}){
      if (products.data !== null){
          for (let i = 0;i<this.productCategories.length;i++){
              if (this.productCategories[i].id == products.category_id){
                  if(this.originalProducts == null){
                      this.originalProducts = this.productCategories[i].subcategory;
                      this.originalPagination = this.productCategories[i].pagination;
                  }
                  this.productCategories[i].subcategory = products.data
                  this.productCategories[i].pagination = products.pagination;
                  break
              }
          }
      }else {
          for (let i = 0; i < this.productCategories.length; i++) {
              if (this.productCategories[i].id == products.category_id){
                  this.productCategories[i].subcategory = this.originalProducts;
                  this.productCategories[i].pagination = this.originalPagination;
                  this.originalProducts = null;
                  this.originalPagination = null;
                  break
              }
          }
      }
  }

}
