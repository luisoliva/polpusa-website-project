import {Component, OnInit, HostListener, Input} from '@angular/core';
import {Sustainability} from "../../../core/models/sustainability.model";
import {SustainabilityService} from "../../../pages/sustainability/services/sustainability.service";
import {Slide} from "../../../core/models/slide.model";

@Component({
  selector: 'app-sustainability-products',
  templateUrl: './sustainability-products.component.html',
  styleUrls: ['./sustainability-products.component.css']
})
export class SustainabilityProductsComponent implements OnInit {
  titleResize: string = '382px';
  @Input() sustainabilityData:Sustainability;
  trustInUsImage:Slide;
  lineProductsImage:Slide;

  constructor(private sustainabilityService:SustainabilityService) { }

  ngOnInit(): void {
    this.sustainabilityService.getTrustInUsImage().toPromise()
        .then(res=>{
          if (res.data.lenght !== 0 ) {
            this.trustInUsImage = res.data[0]
          }
        })
    this.sustainabilityService.getLineProductsImage().toPromise()
        .then(res=>{
          if (res.data.lenght !== 0 ) {
            this.lineProductsImage = res.data[0]
          }
        })
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
