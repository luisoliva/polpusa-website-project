import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/core/interfaces/article';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts: IArticle[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.posts.push({
        id: i+1,
        title: '7 Ways To Advertise Your Business For Free',
        image: 'https://cdn.pixabay.com/photo/2020/05/20/07/01/glencoe-5195121_960_720.jpg',
        date: new Date(Date.now()),
        content: 'Una película laminada es aquella conformada por 2 o más capas del mismo o diferente sustrato unidas entre sí por medio de adhesivos. La tinta de la impresión queda entre 2 películas o capas evitando que entre en contacto con los productos alimenticios.'
      });
    }
  }

}
