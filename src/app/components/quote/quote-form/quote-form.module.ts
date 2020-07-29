import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteFormComponent } from './quote-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteFormProductComponent } from './quote-form-product/quote-form-product.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [QuoteFormComponent, QuoteFormProductComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule
    ],
  exports: [QuoteFormComponent]
})
export class QuoteFormModule { }
