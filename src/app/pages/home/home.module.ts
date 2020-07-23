import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BannerModule } from 'src/app/components/home/banner/banner.module';
import { ProductCardModule } from 'src/app/components/home/product-card/product-card.module';
import { TitleBarModule } from 'src/app/shared/components/title-bar/title-bar.module';
import { OurPresenceModule } from 'src/app/components/home/our-presence/our-presence.module';
import { HomeContactModule } from 'src/app/components/home/home-contact/home-contact.module';
import { CertificationsModule } from 'src/app/components/home/certifications/certifications.module';
import { StrategyModule } from 'src/app/components/home/strategy/strategy.module';
import {Ng2CarouselamosModule} from "ng2-carouselamos";

@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        AppRoutingModule,
        BannerModule,
        ProductCardModule,
        OurPresenceModule,
        HomeContactModule,
        StrategyModule,
        CertificationsModule,
        TitleBarModule,
        Ng2CarouselamosModule,
    ]
})
export class HomeModule { }
