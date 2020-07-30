import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteFormComponent } from './quote-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuoteFormProductComponent } from './quote-form-product/quote-form-product.component';
import {TranslateModule} from "@ngx-translate/core";
import {PolpusaFormModule} from "../../../shared/components/polpusa-form/polpusa-form.module";

@NgModule({
  declarations: [QuoteFormComponent, QuoteFormProductComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        PolpusaFormModule
    ],
  exports: [QuoteFormComponent]
})
export class QuoteFormModule { }
