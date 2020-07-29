import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchBarComponent } from './product-search-bar.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [ProductSearchBarComponent],
    imports: [
        CommonModule,
        TranslateModule
    ],
  exports: [ProductSearchBarComponent]
})
export class ProductSearchBarModule { }
