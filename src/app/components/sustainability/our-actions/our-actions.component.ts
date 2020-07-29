import {Component, OnInit, HostListener, Input} from '@angular/core';
import {Sustainability} from "../../../core/models/sustainability.model";
import {Slide} from "../../../core/models/slide.model";
import {SustainabilityService} from "../../../pages/sustainability/services/sustainability.service";
import {CurrentLanguageService} from "../../../core/current-language.service";

@Component({
  selector: 'app-our-actions',
  templateUrl: './our-actions.component.html',
  styleUrls: ['./our-actions.component.css']
})
export class OurActionsComponent implements OnInit {
  @Input() sustainabilityData:Sustainability;
  titleResize: string = '382px';
  imageA:Slide;
  imageB:Slide;

  constructor(private sustainabilityService:SustainabilityService,
              public currentLanguage:CurrentLanguageService) { }

  ngOnInit(): void {
    this.sustainabilityService.getOurActionsImage('A').toPromise()
        .then(res=>{
          if (res.data.lenght !== 0 ) {
            this.imageA = res.data[0]
          }
          })
    this.sustainabilityService.getOurActionsImage('B').toPromise()
        .then(res=>{
          if (res.data.lenght !== 0 ) {
            this.imageB = res.data[0]
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
