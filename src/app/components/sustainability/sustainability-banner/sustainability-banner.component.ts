import { Component, OnInit } from '@angular/core';
import {SustainabilityService} from "../../../pages/sustainability/services/sustainability.service";
import {Slide} from "../../../core/models/slide.model";

@Component({
  selector: 'app-sustainability-banner',
  templateUrl: './sustainability-banner.component.html',
  styleUrls: ['./sustainability-banner.component.css']
})
export class SustainabilityBannerComponent implements OnInit {
  banner:Slide;

  constructor(private sustainability:SustainabilityService) { }

  ngOnInit(): void {
    this.sustainability.getBanners().toPromise()
        .then(res=>{
          if (res.data.lenght !== 0 ){
            this.banner = res.data[0]
          }
        })
  }

}
