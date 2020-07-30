import {AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {fromEvent} from "rxjs";
import {debounceTime, distinctUntilChanged, filter, tap} from "rxjs/operators";
import {ProductsService} from "../../../pages/products/services/products.service";
import {Product} from "../../../core/models/product.model";
import {Pagination} from "../../../core/models/pagination.model";
import {CurrentLanguageService} from "../../../core/current-language.service";

@Component({
  selector: 'app-product-search-bar',
  templateUrl: './product-search-bar.component.html',
  styleUrls: ['./product-search-bar.component.css']
})
export class ProductSearchBarComponent implements OnInit, AfterViewInit {
  @ViewChild('input') searchField:ElementRef;
  @Input() films:boolean = false;
  @Output() itemsFound = new EventEmitter<{data:Product[],pagination:Pagination, category_id:number}>()
  searchPerformed = false;

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    fromEvent(this.searchField.nativeElement, 'keyup')
        .pipe(
            filter(Boolean),
            debounceTime(700),
            distinctUntilChanged(),
            tap((text) => {
              if(this.films){
                this.productsService.getFilmsSearch(this.searchField.nativeElement.value).toPromise()
                    .then(res=>{
                        this.itemsFound.emit({data:res.data,pagination:res.pagination, category_id:3});
                        this.searchPerformed = true;
                    });
              }else{
                this.productsService.getSpecialtyProductsSearch(this.searchField.nativeElement.value).toPromise()
                    .then(res=>{
                        this.itemsFound.emit({data:res.data,pagination:res.pagination, category_id:1});
                        this.searchPerformed = true;
                    });
              }
            })
        )
        .subscribe()
  }

  clearSearch() {
    this.searchPerformed = false;
    this.searchField.nativeElement.value = '';
    this.itemsFound.emit({data:null,pagination:null, category_id:this.films ? 3 : 1});
  }
}
