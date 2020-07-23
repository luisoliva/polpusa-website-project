import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ParagraphWithBreaksComponent} from "./paragraph-with-breaks.component";

@NgModule({
    declarations: [ParagraphWithBreaksComponent],
    imports: [
        CommonModule
    ],
    exports: [ParagraphWithBreaksComponent]
})
export class ParagraphWithBreaksModule { }
