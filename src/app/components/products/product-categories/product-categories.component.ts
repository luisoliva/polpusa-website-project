import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductCategory } from 'src/app/core/interfaces/products';
import { ECategoryType } from 'src/app/core/enums/ECategoryType';

@Component({
  selector: 'app-product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {
  @Output() setCategorySelectedItem:EventEmitter<ProductCategory> = new EventEmitter<ProductCategory>()

  active: string = 'fas fa-angle-down';
  normal: string = 'fas fa-angle-right';
  categorySelectedItem: ProductCategory = {} as ProductCategory;
  productCategories: ProductCategory[] = [
    {
      id: 1,
      name: 'Películas de Línea',
      type: ECategoryType.FILTER,
      subcategory: [
        {
          id: 1,
          name: 'Bobina Azul',
        },
        {
          id: 2,
          name: 'Bobina Blanca  ',
        },
        {
          id: 3,
          name: 'Bobina Negra',
        },
        {
          id: 4,
          name: 'Bobina Polipro',
        },
        {
          id: 5,
          name: 'Bobina Stetch',
        },
        {
          id: 6,
          name: 'Bobina Termoencogible',
        },
      ]
    },
    {
      id: 2,
      name: 'Productos de Línea',
      type: ECategoryType.SEARCH,
      subcategory: [
        {
          id: 1,
          name: 'Camiseta'
        },
        {
          id: 2,
          name: 'Bolsa de basura'
        },
        {
          id: 3,
          name: 'Popotes'
        },
        {
          id: 4,
          name: 'Rollos'
        },
        {
          id: 5,
          name: 'Polipapel'
        }
      ]
    },
    {
      id: 3,
      name: 'Productos de Especialidad',
      type: ECategoryType.SEARCH,
      subcategory: [
        {
          id: 1,
          name: 'Bolsa de hielo'
        },
        {
          id: 2,
          name: 'Bolsa para café'
        },
        {
          id: 3,
          name: 'Bolsa para botanas'
        },
        {
          id: 4,
          name: 'Bolsa boutique'
        }
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
    this.productCategories.map(x => {
      if (x.name.length > 18) {
        x.name = this.splitWord(x.name)
      }

      return x;
    });
    this.categorySelectedItem = this.productCategories[0]; // Set default element
    setTimeout(() => {
      this.setCategorySelectedItem.emit(this.productCategories[0]); // Set default element filter o search component
    }, 100);
  }

  splitWord(word: string) {
    let splitedWord = word.split(' ');
    let wordResult = splitedWord[0] + " " + splitedWord[1] + '<br/>' + splitedWord[2]
    return wordResult;
  }

  selectedCategory(category: ProductCategory) {
    if (this.categorySelectedItem !== category) {
      this.categorySelectedItem = category;
      this.setCategorySelectedItem.emit(category);
    } else {
      this.categorySelectedItem = {} as ProductCategory;
      // this.setCategorySelectedItem.emit(null);
    }
  }

}
