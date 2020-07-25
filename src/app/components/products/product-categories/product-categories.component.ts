import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';
import {ProductsService} from "../../../pages/products/services/products.service";
import {Category} from "../../../core/models/category.model";

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

  constructor(private productsService:ProductsService) { }

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
                      values.forEach((item)=>{
                        if (item.data.lenght!==0){
                            if (x.id == item.data[0].category_id){
                                x.subcategory = item.data;
                            }
                        }else{
                            x.subcategory = []
                        }
                      })
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

}
