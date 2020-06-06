import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  @Input() background: string = '';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() float: string = 'none';
  prevFloat = '';

  constructor() { }

  ngOnInit(): void {
    this.prevFloat = this.float;
  }

  @HostListener('window:resize')
  @HostListener('window:load')
  resize() {
    console.log('resize');
    if(window.innerWidth <= 768) {
      this.float = 'none';
    } else {
      this.float = this.prevFloat;
    }
  }

}
