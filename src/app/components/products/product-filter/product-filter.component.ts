import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ProductsService} from "../../../pages/products/services/products.service";
import {Product} from "../../../core/models/product.model";
import {Pagination} from "../../../core/models/pagination.model";

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  @Output() itemsFound = new EventEmitter<{data:Product[],pagination:Pagination, category_id:number}>()
  searchPerformed = false;
  typeBag = 0;

  constructor(private products:ProductsService) { }

  ngOnInit(): void {
  }

  filterByType(type_bag: number) {
    if(type_bag == 0){
        this.itemsFound.emit({data:null,pagination:null,category_id:2})
    }else {
      this.products.getFilterStockProducts(type_bag).toPromise()
          .then(res=>{
              this.searchPerformed = true;
              this.itemsFound.emit({data:res.data, pagination:res.pagination,category_id:2})
          })
    }

  }
}
