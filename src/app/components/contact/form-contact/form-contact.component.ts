import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EForm } from 'src/app/core/enums/EForm';

@Component({
  selector: 'app-form-contact',
  templateUrl: './form-contact.component.html',
  styleUrls: ['./form-contact.component.css']
})
export class FormContactComponent implements OnInit {
  providerForm: FormGroup;
  clientForm: FormGroup;
  workForm: FormGroup;
  selectedFormOption = EForm.CLIENT;
  formOptions = EForm;

  constructor(
    private formbuilder: FormBuilder
  ) {
    this.providerForm = this.initProviderForm();
    this.clientForm = this.initclientForm();
    this.workForm = this.initWorkForm();
  }

  ngOnInit(): void {
  }

  //#region Form Methods
  initProviderForm() {
    return this.formbuilder.group({
      contact_name: [null],
      company_name: [null],
      phone: [null],
      email: [null, [Validators.email]],
      product: [null]
    });
  }
  initclientForm() {
    return this.formbuilder.group({
      contact_name: [null],
      company_name: [null],
      phone: [null],
      email: [null, [Validators.email]],
      product: [null]
    });
  }
  initWorkForm() {
    return this.formbuilder.group({
      contact_name: [null],
      phone: [null],
      email: [null, [Validators.email]]
    });
  }
  //#endregion

  chooseFormOption(option: EForm) {
    this.selectedFormOption =  option;
  }

}
