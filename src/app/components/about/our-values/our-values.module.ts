import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurValuesComponent } from './our-values.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [OurValuesComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        TranslateModule
    ],
  exports: [OurValuesComponent]
})
export class OurValuesModule { }
