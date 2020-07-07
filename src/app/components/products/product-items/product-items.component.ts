import { Component, OnInit, Input } from '@angular/core';
import { ProductItem, ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';

@Component({
  selector: 'app-product-items',
  templateUrl: './product-items.component.html',
  styleUrls: ['./product-items.component.css']
})
export class ProductItemsComponent implements OnInit {
  @Input() selectedCategoryItem: ProductCategory = {} as ProductCategory;
  eCategory = ECategoryType;
  showProductDetail: boolean = false;
  products: ProductItem[] = [
    {
      id: 1,
      name: 'Bobina Stretch',
      image: '/assets/images/productos/products/bobina_azul.png',
    },
    {
      id: 2,
      name: 'Bobina Polipro',
      image: '/assets/images/productos/products/bobina_blanca.png',
    },
    {
      id: 3,
      name: 'Bobina Stretch',
      image: '/assets/images/productos/products/bobina_negra.png',
    },
    {
      id: 4,
      name: 'Bobina Polipro',
      image: '/assets/images/productos/products/bobina_polipro.png',
    },
    {
      id: 5,
      name: 'Bobina Stretch',
      image: '/assets/images/productos/products/bobina_stretch.png',
    },
    {
      id: 6,
      name: 'Bobina Stretch',
      image: '/assets/images/productos/products/bobina_termoencogible.png',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  goToProductDetail(product: ProductItem) {
    this.showProductDetail = true;
    console.log('detail: ', product);
  }

  hideProductDetail() {
    this.showProductDetail = false;
  }

}
