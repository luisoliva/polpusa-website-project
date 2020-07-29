import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurActionsComponent } from './our-actions.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [OurActionsComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        TranslateModule,
    ],
  exports: [OurActionsComponent]
})
export class OurActionsModule { }
