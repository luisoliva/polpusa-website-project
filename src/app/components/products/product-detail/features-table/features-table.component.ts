import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-features-table',
  templateUrl: './features-table.component.html',
  styleUrls: ['./features-table.component.css']
})
export class FeaturesTableComponent implements OnInit {
  @Input() tableTitle: string = 'Titulo';
  @Input() leftItems: string[] = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];
  @Input() rightItems: string[] = ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum'];

  constructor() { }

  ngOnInit(): void {
  }

}
