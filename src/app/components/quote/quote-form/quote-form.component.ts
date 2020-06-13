import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EQuoteForm } from 'src/app/core/enums/EForm';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  providerForm: FormGroup;
  clientForm: FormGroup;
  workForm: FormGroup;
  selectedFormOption = EQuoteForm.SPETIAL;
  formOptions = EQuoteForm;

  constructor(
    private formbuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  chooseFormOption(option: EQuoteForm) {
    this.selectedFormOption =  option;
  }

}
