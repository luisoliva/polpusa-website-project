import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-form-product',
  templateUrl: './quote-form-product.component.html',
  styleUrls: ['./quote-form-product.component.css']
})
export class QuoteFormProductComponent implements OnInit {
  quoteProducts: any[] = [
    {id: 1, name: 'Bolsas Naturales', image: '/assets/images/quote/products/natural-bag.png'},
    {id: 2, name: 'Rollo Punteado', image: '/assets/images/quote/products/rollitos.png'},
    {id: 3, name: 'Hojas de Polipapel', image: '/assets/images/quote/products/papper-bag.png'},
    {id: 4, name: 'Marca Camisetitas', image: '/assets/images/quote/products/many-products.png'},
    {id: 5, name: 'Ecotubitos', image: '/assets/images/quote/products/eco-bag.png'},
    {id: 6, name: 'Zipper Flex', image: '/assets/images/quote/products/zipper.png'},
    {id: 7, name: 'Frigobol', image: '/assets/images/quote/products/ice-bag.png'},
    {id: 8, name: 'Bolsas para basura', image: '/assets/images/quote/products/many-bags.png'},
    {id: 9, name: 'Stretch', image: '/assets/images/quote/products/poli-bag.png'},
    {id: 10, name: 'Injerto', image: '/assets/images/quote/products/bag.png'}
  ];

  selectedProducts:Array<any> = new Array<any>();

  constructor() { }

  ngOnInit(): void {
  }

  selectProduct(product: any) {
    if (this.isProductSelected(product)){
      let index = this.selectedProducts.indexOf(product);
      this.selectedProducts.splice(index, 1);
    }else{
      this.selectedProducts.push(product);
    }
  }

  isProductSelected(product: any) {
    return this.selectedProducts.indexOf(product) !== -1;
  }

  selectAllProducts() {
    this.selectedProducts = [];
    this.selectedProducts = this.selectedProducts.concat(this.quoteProducts)
  }
}
