import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutBannerModule } from 'src/app/components/about/banner/about-banner.module';
import { AboutUsModule } from 'src/app/components/about/about-us/about-us.module';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import { OurValuesModule } from 'src/app/components/about/our-values/our-values.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [AboutComponent],
    imports: [
        CommonModule,
        AboutBannerModule,
        TitleBarModule,
        AboutUsModule,
        OurValuesModule,
        TranslateModule
    ],
  exports: [AboutComponent]
})
export class AboutModule { }
