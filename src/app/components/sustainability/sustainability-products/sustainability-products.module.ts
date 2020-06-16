import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityProductsComponent } from './sustainability-products.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [SustainabilityProductsComponent],
  imports: [
    CommonModule,
    TitleBarModule,
    AppRoutingModule
  ],
  exports: [SustainabilityProductsComponent]
})
export class SustainabilityProductsModule { }
