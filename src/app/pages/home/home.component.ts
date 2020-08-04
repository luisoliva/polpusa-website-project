import {Component, HostListener, OnInit} from '@angular/core';
import {HomepageApiService} from "./services/homepage-api.service";
import {Slide} from "../../core/models/slide.model";
import {CurrentLanguageService} from "../../core/current-language.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alliances: Slide[] = [];
  polpusaBrands: any[] = [
    { name:'Camisetitas', url:'assets/images/home/polpusa-brands/logo_camisetitas.png'},
    { name:'Frigobol', url:'assets/images/home/polpusa-brands/frigobol.png'},
    { name:'Logar', url:'assets/images/home/polpusa-brands/logar.png'},
    { name:'Megabolsa', url:'assets/images/home/polpusa-brands/megabolsa.png'},
    { name:'Practibio', url:'assets/images/home/polpusa-brands/practibio.png'},
    { name:'Rollitos', url:'assets/images/home/polpusa-brands/rollitos.png'},
    { name:'Volsak', url:'assets/images/home/polpusa-brands/volsak.png'},
    { name:'Zipperflex', url:'assets/images/home/polpusa-brands/zipperflex.png'},
  ];
  width:number;
  itemCarouselWidth: string;

  constructor(private homepageApiService:HomepageApiService,
              public currentLanguageService:CurrentLanguageService) {
  }

  ngOnInit(): void {
    this.width = window.innerWidth - (window.innerWidth/12) - 20;
    this.getCarouselItemWidth();
    this.homepageApiService.getBrands().toPromise()
        .then(res=>{
          this.alliances = res.data
        })
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = event.target.innerWidth - (event.target.innerWidth/12) - 20;
    this.getCarouselItemWidth();
  }

  getCarouselItemWidth(){
    if (this.width>850){
      this.itemCarouselWidth = String((this.width / 4) - 90)+'px';
    }else if(this.width>580){
      this.itemCarouselWidth = String((this.width / 3) - 90)+'px';
    }else if (this.width>400){
      this.itemCarouselWidth = String((this.width / 2) - 90) + 'px';
    }else{
      this.itemCarouselWidth = String((this.width - 90) + 'px');
    }
  }
}
