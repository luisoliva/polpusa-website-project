import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeContactComponent } from './home-contact.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [HomeContactComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        TranslateModule
    ], exports: [HomeContactComponent]
})
export class HomeContactModule { }
