import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StrategyComponent } from './strategy.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [StrategyComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        TranslateModule
    ],
  exports: [StrategyComponent]
})
export class StrategyModule { }
