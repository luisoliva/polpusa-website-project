import { Component, OnInit } from '@angular/core';
import { ICardItem } from 'src/app/core/interfaces/card-item';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  cards: ICardItem[] = [
    {id: 1, image: '/assets/images/home/products/bobina-termoencogible.png', title: 'Películas de Línea', content: 'Llaudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta '},
    {id: 2, image: '/assets/images/home/products/bolsas-conomicas.png', title: 'Productos de Línea', content: 'Variedad de bolsas y rollos de polietileno en A.D. y B.D., con resina virgen o pigmentada, sin impresión ni laminación. Para uso en el comercio en general, pequeños negocios o en el hogar'},
    {id: 3, image: '/assets/images/home/products/bolsa-para-cafe.png', title: 'Productos de Especialidad', content: 'Bolsas y películas en A.D. y B.D., impresas hasta en 8 tintas y laminadas de 2 a 3 capas. Ideal para procesos de envasado automático, para uso en la industrial y en negocios con marca'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
