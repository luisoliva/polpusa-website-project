import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [BannerComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    BannerComponent
  ]
})
export class BannerModule { }
