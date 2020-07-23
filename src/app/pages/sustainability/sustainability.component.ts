import { Component, OnInit } from '@angular/core';
import {SustainabilityService} from "./services/sustainability.service";
import {Sustainability} from "../../core/models/sustainability.model";

@Component({
  selector: 'app-sustainability',
  templateUrl: './sustainability.component.html',
  styleUrls: ['./sustainability.component.css']
})
export class SustainabilityComponent implements OnInit {
  sustainabilityData:Sustainability;

  constructor(private sustainabilityService:SustainabilityService) { }

  ngOnInit(): void {
    this.sustainabilityService.getSustainabilityData().toPromise()
        .then(res=>{
          this.sustainabilityData = res;
        })
  }
}
