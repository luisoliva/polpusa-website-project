import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IAlbum } from 'src/app/core/interfaces/album';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCarouselComponent implements OnInit {
  album: IAlbum[] = [
    { src: '/assets/images/productos/detail/item.png', thumb: '/assets/images/productos/detail/item.png' },
    { src: '/assets/images/productos/detail/item.png', thumb: '/assets/images/productos/detail/item.png' },
    { src: '/assets/images/productos/detail/item.png', thumb: '/assets/images/productos/detail/item.png' },
    { src: '/assets/images/productos/detail/item.png', thumb: '/assets/images/productos/detail/item.png' },
    { src: '/assets/images/productos/detail/item.png', thumb: '/assets/images/productos/detail/item.png' },
    { src: '/assets/images/productos/detail/item.png', thumb: '/assets/images/productos/detail/item.png' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
