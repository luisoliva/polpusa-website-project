import { Component, OnInit } from '@angular/core';
import { ICardItem } from 'src/app/core/interfaces/card-item';
import {ProductsService} from "../../../pages/products/services/products.service";
import {Category} from "../../../core/models/category.model";
import {TranslateService} from "@ngx-translate/core";
import {CurrentLanguageService} from "../../../core/current-language.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cards: Category[] = [];
  language;

  constructor(private productsService:ProductsService,
              private currentLanguageService:CurrentLanguageService) {
    this.language = this.currentLanguageService.language;
  }

  ngOnInit(): void {
    this.productsService.getCategories().toPromise()
        .then(res=>this.cards=res.data)
  }

}
