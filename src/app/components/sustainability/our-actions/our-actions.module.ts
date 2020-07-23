import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurActionsComponent } from './our-actions.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {ParagraphWithBreaksModule} from "../../../shared/components/paragraph-with-breaks/paragraph-with-breaks.module";

@NgModule({
  declarations: [OurActionsComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        ParagraphWithBreaksModule
    ],
  exports: [OurActionsComponent]
})
export class OurActionsModule { }
