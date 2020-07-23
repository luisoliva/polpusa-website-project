import { Component, OnInit } from '@angular/core';
import { ICardItem } from 'src/app/core/interfaces/card-item';
import {ProductsService} from "../../../pages/products/services/products.service";
import {Category} from "../../../core/models/category.model";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cards: Category[] = [];

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().toPromise()
        .then(res=>this.cards=res.data)
  }

}
