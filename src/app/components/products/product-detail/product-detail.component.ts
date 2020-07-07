import { Component, OnInit, Input } from '@angular/core';
import { ProductItem } from 'src/app/core/interfaces/products';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // @Input() product: ProductItem;

  constructor() { }

  ngOnInit(): void {
  }

}
