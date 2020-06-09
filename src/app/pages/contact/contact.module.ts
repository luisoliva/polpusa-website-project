import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactBannerModule } from 'src/app/components/contact/contact-banner/contact-banner.module';
import { ContactInfoModule } from 'src/app/components/contact/contact-info/contact-info.module';
import { FormContactModule } from 'src/app/components/contact/form-contact/form-contact.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactBannerModule,
    ContactInfoModule,
    FormContactModule
  ]
})
export class ContactModule { }
