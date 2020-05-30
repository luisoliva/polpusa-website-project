import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent implements OnInit {
  certifications: any[] = [
    {name: 'logo-premio-calidad', url: '/assets/images/home/certifications/logo-premio-calidad.png'},
    {name: 'nsf', url: '/assets/images/home/certifications/nsf.png'},
    {name: 'empresa_dies', url: '/assets/images/home/certifications/empresa_diez.png'},
    {name: 'fda', url: '/assets/images/home/certifications/fda.png'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
