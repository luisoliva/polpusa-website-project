import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurPresenceComponent } from './our-presence.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [OurPresenceComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        TranslateModule
    ],
  exports: [OurPresenceComponent]
})
export class OurPresenceModule { }
