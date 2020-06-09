import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactBannerComponent } from './contact-banner.component';

@NgModule({
  declarations: [ContactBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactBannerComponent]
})
export class ContactBannerModule { }
