import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteFormComponent } from './quote-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuoteFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [QuoteFormComponent]
})
export class QuoteFormModule { }
