import { Component, OnInit, Input } from '@angular/core';
import {Product} from "../../../../core/models/product.model";
import {Spec} from "../../../../core/models/spec.model";

@Component({
  selector: 'app-features-table',
  templateUrl: './features-table.component.html',
  styleUrls: ['./features-table.component.css']
})
export class FeaturesTableComponent implements OnInit {
  @Input() items:string[];
  @Input() tableTitle: string = 'Titulo';
  @Input() leftItems: string[] = [];
  @Input() rightItems: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items.forEach((element, index)=>{
      if (index % 2 == 0){
        this.leftItems.push(element)
      }else{
        this.rightItems.push(element)
      }
    })
  }

}
