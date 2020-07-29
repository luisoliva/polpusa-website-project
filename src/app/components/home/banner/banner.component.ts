import { Component, OnInit } from '@angular/core';
import {HomepageApiService} from "../../../pages/home/services/homepage-api.service";
import {Slide} from "../../../core/models/slide.model";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  videoUrl = null;

  constructor(private homepage:HomepageApiService) { }

  ngOnInit(): void {
    this.homepage.getMainVideo().toPromise()
      .then(res=>{
        if (res.data.lenght !== 0 ) {
          this.videoUrl = res.data[0].file_Upload
        }
      })
      // .catch(()=>this.videoUrl = '/assets/video/home/home.mp4')
  }

}
