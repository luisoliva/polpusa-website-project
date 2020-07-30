import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PolpusaFormComponent} from "./polpusa-form.component";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import {BlogModule} from "../../../pages/blog/blog.module";

@NgModule({
    declarations: [PolpusaFormComponent],
    imports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        BlogModule
    ],
    exports: [PolpusaFormComponent]
})
export class PolpusaFormModule { }
