import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  contactInfo: any = [
    { image: '/assets/images/contact/info/phone.png', content: '+ 55 (999) 928 4022' },
    { image: '/assets/images/contact/info/mail.png', content: 'ventas@polpusa.com' },
    { image: '/assets/images/contact/info/marker.png', content: 'C. 22-A No. 425 x 21 Diag. y 37, Cd. Industrial, Mérida, Yuc. C.P 97288. Estamos a un costado de la fábrica BIMBO.' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
