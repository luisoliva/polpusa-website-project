import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { EQuoteForm } from 'src/app/core/enums/EForm';
import {CurrentLanguageService} from "../../../core/current-language.service";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  providerForm: FormGroup;
  clientForm: FormGroup;
  workForm: FormGroup;
  //selectedFormOption = EQuoteForm.SPETIAL;
  selectedFormOption = null;
  formOptions = EQuoteForm;
  productsSelected:string;

  constructor(
    private formbuilder: FormBuilder,
    public currentLanguageService:CurrentLanguageService
  ) { }

  ngOnInit(): void {
  }

  chooseFormOption(option: EQuoteForm) {
    this.selectedFormOption =  option;
  }

}
