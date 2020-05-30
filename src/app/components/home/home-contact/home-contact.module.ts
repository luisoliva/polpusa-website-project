import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContactComponent } from './home-contact.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';

@NgModule({
  declarations: [HomeContactComponent],
  imports: [
    CommonModule,
    TitleBarModule
  ], exports: [HomeContactComponent]
})
export class HomeContactModule { }
