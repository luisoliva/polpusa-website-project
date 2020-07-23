import {Component, HostListener, OnInit} from '@angular/core';
import {HomepageApiService} from "./services/homepage-api.service";
import {Slide} from "../../core/models/slide.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alliances: Slide[] = [];
  polpusaBrands: any[] = [
    { name:'Camisetitas', url:'assets/images/icons/logo_camisetitas.png'},
    { name:'Frigobol', url:'assets/images/icons/frigobol.png'},
    { name:'Logar', url:'assets/images/icons/logar.png'},
    { name:'Megabolsa', url:'assets/images/icons/megabolsa.png'},
    { name:'Practibio', url:'assets/images/icons/practibio.png'},
    { name:'Rollitos', url:'assets/images/icons/rollitos.png'},
    { name:'Volsak', url:'assets/images/icons/volsak.png'},
    { name:'Zipperflex', url:'assets/images/icons/zipperflex.png'},
  ];
  width:number;
  itemCarouselWidth: string;

  constructor(private homepageApiService:HomepageApiService) { }

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
