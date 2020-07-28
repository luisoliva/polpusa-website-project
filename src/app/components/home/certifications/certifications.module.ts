import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CertificationsComponent } from './certifications.component';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [CertificationsComponent],
    imports: [
        CommonModule,
        TitleBarModule,
        TranslateModule
    ],
  exports: [CertificationsComponent]
})
export class CertificationsModule { }
