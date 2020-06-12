import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-sustainability-products',
  templateUrl: './sustainability-products.component.html',
  styleUrls: ['./sustainability-products.component.css']
})
export class SustainabilityProductsComponent implements OnInit {
  titleResize: string = '382px';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize')
  @HostListener('window:load')
  resize() {
    if(window.innerWidth <= 768) {
      this.titleResize = '200px';
    } else {
      this.titleResize = '382px';
    }
  }

}
