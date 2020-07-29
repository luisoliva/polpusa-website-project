import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { SpecificationTableComponent } from './specification-table/specification-table.component';
import { FeaturesTableComponent } from './features-table/features-table.component';
import { ProductCarouselComponent } from './product-carousel/product-carousel.component';

import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    ProductDetailComponent,
    SpecificationTableComponent,
    FeaturesTableComponent,
    ProductCarouselComponent
  ],
    imports: [
        CommonModule,
        Ng2CarouselamosModule,
        FormsModule,
        TranslateModule,
    ],
  exports: [
    ProductDetailComponent,
    Ng2CarouselamosModule
  ]
})
export class ProductDetailModule { }
