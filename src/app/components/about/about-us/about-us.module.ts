import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
  declarations: [AboutUsComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        TranslateModule
    ],
  exports: [AboutUsComponent]
})
export class AboutUsModule { }
