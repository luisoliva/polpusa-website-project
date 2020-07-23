import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlasticSustainabilityComponent } from './plastic-sustainability.component';
import {ParagraphWithBreaksModule} from "../../../shared/components/paragraph-with-breaks/paragraph-with-breaks.module";

@NgModule({
  declarations: [PlasticSustainabilityComponent],
    imports: [
        CommonModule,
        ParagraphWithBreaksModule
    ],
  exports: [PlasticSustainabilityComponent]
})
export class PlasticSustainabilityModule { }
