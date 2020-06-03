import { Component, OnInit } from '@angular/core';
import { IValues } from 'src/app/core/interfaces/values';

@Component({
  selector: 'app-our-values',
  templateUrl: './our-values.component.html',
  styleUrls: ['./our-values.component.css']
})
export class OurValuesComponent implements OnInit {
  values_row1: IValues[] = [
    {
      image: '/assets/images/about/our-values/excelencia.png',
      title: 'Excelencia',
      subtitle: 'Buscamos la perfección en nuestro ser y nuestro actuar.',
      content: '-Calidad, innovación perseverancia.'
    },
    {
      image: '/assets/images/about/our-values/lealtad.png',
      title: 'Lealtad',
      subtitle: 'Orgullosos de pertenecer a la familia Polpusa.',
      content: '-Confianza, compromiso, fidelidad, gratitud, reciprocidad.'
    },
    {
      image: '/assets/images/about/our-values/servicio.png',
      title: 'Servicio',
      subtitle: 'Es nuestra vocación.',
      content: '-Diligente, empatía, proactiva, accesible, colaboración.'
    }
  ];
  values_row2: IValues[] = [
    {
      image: '/assets/images/about/our-values/pasion.png',
      title: 'Pasion',
      subtitle: 'Amamos lo que hacemos.',
      content: '-Compromiso, perseverancia, entusiasmo, dusciplina, entrega.'
    },
    {
      image: '/assets/images/about/our-values/integridad.png',
      title: 'Integridad',
      subtitle: 'Somos fieles a nuestros principios y valores:',
      content: '-Honestidad, respeto, congruencia, responsabilidad, compromiso.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
