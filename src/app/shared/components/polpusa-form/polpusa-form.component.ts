import {Component, Input, OnInit} from '@angular/core';
import {PolpusaForm} from "../../../core/models/polpusa-form.model";
import {ProductsService} from "../../../pages/products/services/products.service";
import {Product} from "../../../core/models/product.model";
import {Category} from "../../../core/models/category.model";
import {FormService} from "./services/form.service";
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-polpusa-form',
  templateUrl: './polpusa-form.component.html',
  styleUrls: ['./polpusa-form.component.css']
})
export class PolpusaFormComponent implements OnInit {
  @Input() formType: number;
  @Input() lineProductsSelected:string;
  request: PolpusaForm;
  products: Array<Product | Category> = []
  submitedForm = false;
  error = false

  constructor(private productsService: ProductsService,
              private formService:FormService) {
  }

  ngOnInit(): void {
    this.setRequest(this.formType);
  }

  setRequest(formType?: number) {
    if (formType){
      if (formType == 3) {
        this.formType = 1;
      } else if (formType == 2) {
        this.formType = 2;
      } else if (formType == 1){
        this.formType = 3;
      }
    }
    switch (this.formType) {
      case 1: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          application_interest: "",
          quantity: "",
          wide: "",
          caliber: "",
          organic_product: ""
        }
        break
      }
      case 2: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          application_interest: "",
          product: "",
          organic_product: ""
        }
        this.productsService.getProductsByCategory(2, 2000).toPromise()
            .then(res => this.products = res.data)
        break
      }
      case 3: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          application_interest: "",
          organic_product: ""
        }
        break
      }
      case 4: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          product_interest: "",
        }
        this.productsService.getCategories().toPromise()
            .then(res => this.products = res.data)
        break
      }
      case 5: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          product_interest: "",
        }
        this.productsService.getCategories().toPromise()
            .then(res => this.products = res.data)
        break
      }
      case 6: {
        this.request = {
          type: this.formType,
          contact_name: "",
          mail: "",
          phone_number: "",
          stall: "",
          curruculum: null
        }
        break
      }
      case 7: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          application_interest: "",
          quantity: "",
          wide: "",
          caliber: "",
          organic_product: ""
        }
        break
      }
      case 8: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          application_interest: "",
          organic_product: ""
        }
        break
      }
      case 9: {
        this.request = {
          type: this.formType,
          company_name: "",
          contact_name: "",
          mail: "",
          phone_number: "",
          organic_product: "",
          line_products: ""
        }
        break
      }
    }
  }

  submitForm() {
    if (this.canSubmitForm()){
      this.submitedForm = true;
      if (this.lineProductsSelected){
        this.request.line_products = this.lineProductsSelected;
      }
      console.log(this.request);
    }else{
      this.error = true;
    }
  }

  sendOtherForm() {
    this.submitedForm = false;
    this.error = false;
    this.setRequest();
  }

  canSubmitForm():boolean{
    let a = true;
    if (this.request.company_name !== undefined){
      a = a && this.request.company_name !== '';
    }
    if (this.request.contact_name !== undefined){
      a = a && this.request.contact_name !== '';
    }
    if (this.request.phone_number !== undefined){
      a = a && this.request.phone_number !== '';
    }
    if (this.request.mail !== undefined){
      a = a && this.request.mail !== '';
    }
    if (this.request.stall !== undefined){
      a = a && this.request.stall !== '';
    }
    if (this.request.curruculum !== undefined){
      a = a && this.request.curruculum !== null;
    }
    return a;
  }
}


