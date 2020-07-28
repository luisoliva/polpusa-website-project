import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [ProductCardComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        TitleBarModule,
        TranslateModule
    ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
