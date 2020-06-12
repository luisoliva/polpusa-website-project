import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SustainabilityComponent } from './sustainability.component';
import { SustainabilityBannerModule } from 'src/app/components/sustainability/sustainability-banner/sustainability-banner.module';
import { SustainabilityProductsModule } from 'src/app/components/sustainability/sustainability-products/sustainability-products.module';
import { PlasticSustainabilityModule } from 'src/app/components/sustainability/plastic-sustainability/plastic-sustainability.module';
import { OurActionsModule } from 'src/app/components/sustainability/our-actions/our-actions.module';
import { GreenSustainabilityModule } from 'src/app/components/sustainability/green-sustainability/green-sustainability.module';

@NgModule({
  declarations: [SustainabilityComponent],
  imports: [
    CommonModule,
    SustainabilityBannerModule,
    SustainabilityProductsModule,
    PlasticSustainabilityModule,
    OurActionsModule,
    GreenSustainabilityModule
  ]
})
export class SustainabilityModule { }
