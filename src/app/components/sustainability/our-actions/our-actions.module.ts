import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurActionsComponent } from './our-actions.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';

@NgModule({
  declarations: [OurActionsComponent],
  imports: [
    CommonModule,
    TitleBarModule
  ],
  exports: [OurActionsComponent]
})
export class OurActionsModule { }
