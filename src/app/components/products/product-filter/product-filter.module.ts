import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './product-filter.component';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProductFilterComponent],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule
    ],
  exports: [ProductFilterComponent]
})
export class ProductFilterModule { }
