import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfoComponent } from './contact-info.component';

@NgModule({
  declarations: [ContactInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [ContactInfoComponent]
})
export class ContactInfoModule { }
