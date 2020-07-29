import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlasticSustainabilityComponent } from './plastic-sustainability.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [PlasticSustainabilityComponent],
    imports: [
        CommonModule,
        TranslateModule,
    ],
  exports: [PlasticSustainabilityComponent]
})
export class PlasticSustainabilityModule { }
