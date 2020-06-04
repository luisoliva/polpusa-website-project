import { Component, OnInit } from '@angular/core';
import { IVision } from 'src/app/core/interfaces/vision';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  visions: IVision[] = [
    {
      id: 1,
      name: 'Clientes',
      image: '/assets/images/about/vision/avatar.png',
      content: 'Consolidar nuestro liderazgo a nivel nacional en la fabricación e innovación de empaques flexibles, incorporando tecnología de punta, entregando de manera oportuna la más alta calidad en materiales, imágenes y acabados, y con el más competente capital humano de nuestra industria.'
    },
    {
      id: 2,
      name: 'Proveedores',
      image: '/assets/images/about/vision/trucking.png',
      content: 'Desarrollar relaciones duraderas y estratégicas basadas en el beneficio mutuo.'
    },
    {
      id: 3,
      name: 'Colaboradores',
      image: '/assets/images/about/vision/business-and-finance.png',
      content: 'Atraer el mejor talento promoviendo el crecimiento integral de nuestros trabajadores, ofreciendo oportunidades y un ambiente digno de trabajo.'
    },
    {
      id: 4,
      name: 'Comunidad',
      image: '/assets/images/about/vision/family.png',
      content: 'Participar activamente en el desarrollo de nuestra comunidad, especialmente con los grupos más vulnerables.'
    },
    {
      id: 5,
      name: 'Medio Ambiente',
      image: '/assets/images/about/vision/weather.png',
      content: 'Desarrollar productos y operaciones sustentables y promover el cuidado de nuestro entorno.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
