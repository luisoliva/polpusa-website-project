import { Component, OnInit } from '@angular/core';
import {HomepageApiService} from "../../../pages/home/services/homepage-api.service";
import {Slide} from "../../../core/models/slide.model";
import {CurrentLanguageService} from "../../../core/current-language.service";

@Component({
  selector: 'app-our-presence',
  templateUrl: './our-presence.component.html',
  styleUrls: ['./our-presence.component.css']
})
export class OurPresenceComponent implements OnInit {
  countries: Slide[] = [];

  constructor(private homepageApiService:HomepageApiService,
              public currentLanguageService:CurrentLanguageService) { }

  ngOnInit(): void {
    this.homepageApiService.getCountries().toPromise()
        .then(res=>this.countries = res.data)
  }

}
