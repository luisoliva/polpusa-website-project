import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-our-actions',
  templateUrl: './our-actions.component.html',
  styleUrls: ['./our-actions.component.css']
})
export class OurActionsComponent implements OnInit {
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
