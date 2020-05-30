import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alliances: any[] = [
    { name:'budweser', url:'assets/images/home/alliances/budweiser.png', size:'70px'},
    { name:'bepensa', url:'assets/images/home/alliances/bepensa.png', size:'70px'},
    { name:'palace', url:'assets/images/home/alliances/palace.png', size:'100px'},
    { name:'pepsico', url:'assets/images/home/alliances/pepsico.png', size:'70px'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
