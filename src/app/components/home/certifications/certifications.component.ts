import { Component, OnInit } from '@angular/core';
import {Slide} from "../../../core/models/slide.model";
import {HomepageApiService} from "../../../pages/home/services/homepage-api.service";

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications: Slide[] = []

  constructor(private homepageApiService:HomepageApiService) { }

  ngOnInit(): void {
    this.homepageApiService.getCertifications().toPromise()
        .then(res=>this.certifications = res.data)
  }

}
