import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.css']
})
export class TitleBarComponent implements OnInit {
  @Input() background: string = '';
  @Input() width: string = '';
  @Input() height: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
