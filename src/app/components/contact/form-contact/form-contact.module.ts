import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContactComponent } from './form-contact.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {PolpusaFormModule} from "../../../shared/components/polpusa-form/polpusa-form.module";

@NgModule({
  declarations: [FormContactComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TranslateModule,
        PolpusaFormModule
    ],
  exports: [FormContactComponent]
})
export class FormContactModule { }
