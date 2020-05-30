import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';

@NgModule({
  declarations: [StrategyComponent],
  imports: [
    CommonModule,
    TitleBarModule
  ],
  exports: [StrategyComponent]
})
export class StrategyModule { }
