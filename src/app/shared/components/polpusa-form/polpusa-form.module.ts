import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PolpusaFormComponent} from "./polpusa-form.component";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";

@NgModule({
    declarations: [PolpusaFormComponent],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule
    ],
    exports: [PolpusaFormComponent]
})
export class PolpusaFormModule { }
