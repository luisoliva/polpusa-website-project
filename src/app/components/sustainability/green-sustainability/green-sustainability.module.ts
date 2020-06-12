import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenSustainabilityComponent } from './green-sustainability.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';

@NgModule({
  declarations: [GreenSustainabilityComponent],
  imports: [
    CommonModule,
    TitleBarModule
  ],
  exports: [GreenSustainabilityComponent]
})
export class GreenSustainabilityModule { }
