import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { BlogComponent } from './blog.component';
import {TruncateTextPipe} from "../../core/truncate-text.pipe";
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import {RouterModule} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    declarations: [BlogComponent, TruncateTextPipe, BlogDetailComponent],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
    ],
    exports: [
        TruncateTextPipe
    ],
    providers: [DatePipe]
})
export class BlogModule { }
