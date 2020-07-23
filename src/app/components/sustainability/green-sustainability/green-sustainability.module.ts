import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GreenSustainabilityComponent } from './green-sustainability.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {ParagraphWithBreaksModule} from "../../../shared/components/paragraph-with-breaks/paragraph-with-breaks.module";

@NgModule({
  declarations: [GreenSustainabilityComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        ParagraphWithBreaksModule
    ],
  exports: [GreenSustainabilityComponent]
})
export class GreenSustainabilityModule { }
