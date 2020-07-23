import {Component, Input, OnInit} from '@angular/core';
import {Sustainability} from "../../../core/models/sustainability.model";
import {Slide} from "../../../core/models/slide.model";
import {SustainabilityService} from "../../../pages/sustainability/services/sustainability.service";

@Component({
  selector: 'app-plastic-sustainability',
  templateUrl: './plastic-sustainability.component.html',
  styleUrls: ['./plastic-sustainability.component.css']
})
export class PlasticSustainabilityComponent implements OnInit {
  @Input() sustainabilityData:Sustainability;
  image:Slide;

  constructor(private sustainabilityService:SustainabilityService) { }

  ngOnInit(): void {
    this.sustainabilityService.getPlasticImage().toPromise()
        .then(res=>{
          if (res.data.lenght !== 0 ){
            this.image = res.data[0]
          }
        })
  }

}
