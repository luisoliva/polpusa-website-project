import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../../../core/models/product.model";

@Component({
  selector: 'app-specification-table',
  templateUrl: './specification-table.component.html',
  styleUrls: ['./specification-table.component.css']
})
export class SpecificationTableComponent implements OnInit {
  @Input() product:Product;

  constructor() { }

  ngOnInit(): void {
  }

}
