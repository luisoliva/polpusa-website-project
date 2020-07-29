import {Component, OnInit, HostListener, Input} from '@angular/core';
import {Sustainability} from "../../../core/models/sustainability.model";
import {Slide} from "../../../core/models/slide.model";
import {SustainabilityService} from "../../../pages/sustainability/services/sustainability.service";
import {CurrentLanguageService} from "../../../core/current-language.service";

@Component({
  selector: 'app-green-sustainability',
  templateUrl: './green-sustainability.component.html',
  styleUrls: ['./green-sustainability.component.css']
})
export class GreenSustainabilityComponent implements OnInit {
  @Input() sustainabilityData:Sustainability;
  titleResize: string = '106px';
  imageA:Slide;
  imageB:Slide;

  constructor(private sustainabilityService:SustainabilityService,
              public currentLanguage:CurrentLanguageService) { }

  ngOnInit(): void {
    this.sustainabilityService.getPolpusaVerdeImages('A').toPromise()
        .then(res=>{
          if (res.data.length!==0){
            this.imageA = res.data[0]
          }
        })
    this.sustainabilityService.getPolpusaVerdeImages('B').toPromise()
        .then(res=>{
          if (res.data.length!==0){
            this.imageB = res.data[0]
          }
        })
  }

  @HostListener('window:resize')
  @HostListener('window:load')
  resize() {
    if(window.innerWidth <= 768) {
      this.titleResize = '50px';
    } else {
      this.titleResize = '106px';
    }
  }

  getOptions():Array<string>{
    if (this.currentLanguage.language == 'es'){
      return this.sustainabilityData.polpusa_verde_opc.description.split('{#}')
    }else if (this.currentLanguage.language == 'en'){
      return this.sustainabilityData.polpusa_verde_opc.translation[0].description.split('{#}')
    }
  }
}
