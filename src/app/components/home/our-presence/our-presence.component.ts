import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-presence',
  templateUrl: './our-presence.component.html',
  styleUrls: ['./our-presence.component.css']
})
export class OurPresenceComponent implements OnInit {
  countries: any[] = [
    {name: 'EUA', url: '/assets/images/home/our-presence/usa-today.png'},
    {name: 'México', url: '/assets/images/home/our-presence/mexico.png'},
    {name: 'Belice', url: '/assets/images/home/our-presence/belize.png'},
    {name: 'Cuba', url: '/assets/images/home/our-presence/cuba.png'},
    {name: 'Jamaica', url: '/assets/images/home/our-presence/jamaica.png'},
    {name: 'Colombia', url: '/assets/images/home/our-presence/colombia.png'},
    {name: 'Alemania', url: '/assets/images/home/our-presence/alemania.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
