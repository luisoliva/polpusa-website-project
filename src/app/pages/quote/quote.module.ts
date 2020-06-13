import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote.component';
import { QuoteBannerModule } from 'src/app/components/quote/quote-banner/quote-banner.module';
import { QuoteFormModule } from 'src/app/components/quote/quote-form/quote-form.module';

@NgModule({
  declarations: [QuoteComponent],
  imports: [
    CommonModule,
    QuoteBannerModule,
    QuoteFormModule
  ]
})
export class QuoteModule { }
