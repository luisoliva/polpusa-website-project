import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-presence',
  templateUrl: './our-presence.component.html',
  styleUrls: ['./our-presence.component.css']
})
export class OurPresenceComponent implements OnInit {
  countries: any[] = [
    {name: 'EUA', url: '/assets/images/placeholder_images.png'},
    {name: 'México', url: '/assets/images/placeholder_images.png'},
    {name: 'Belice', url: '/assets/images/placeholder_images.png'},
    {name: 'Cuba', url: '/assets/images/placeholder_images.png'},
    {name: 'Jamaica', url: '/assets/images/placeholder_images.png'},
    {name: 'Colombia', url: '/assets/images/placeholder_images.png'},
    {name: 'Alemania', url: '/assets/images/placeholder_images.png'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
