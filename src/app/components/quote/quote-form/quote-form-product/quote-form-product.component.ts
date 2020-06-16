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

  constructor() { }

  ngOnInit(): void {
  }

}
