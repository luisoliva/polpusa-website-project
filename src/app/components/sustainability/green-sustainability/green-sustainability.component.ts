import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-green-sustainability',
  templateUrl: './green-sustainability.component.html',
  styleUrls: ['./green-sustainability.component.css']
})
export class GreenSustainabilityComponent implements OnInit {
  titleResize: string = '106px';

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize')
  @HostListener('window:load')
  resize() {
    if(window.innerWidth <= 768) {
      this.titleResize = '50px';
    } else {
      this.titleResize = '106px';
    }
  }

}
