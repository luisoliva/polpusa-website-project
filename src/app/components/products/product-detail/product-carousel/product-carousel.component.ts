import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import { IAlbum } from 'src/app/core/interfaces/album';
import {Upload} from "../../../../core/models/upload.model";

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductCarouselComponent implements OnInit {
  @Input() title:string;
  @Input() album:Upload[];

  constructor() { }

  ngOnInit(): void {
  }

}
