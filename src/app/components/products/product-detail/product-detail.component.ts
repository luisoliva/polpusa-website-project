import {Component, OnInit, Input, ViewChild} from '@angular/core';
import {Product} from "../../../core/models/product.model";
import {Utils} from "../../../core/utils";
import {CurrentLanguageService} from "../../../core/current-language.service";
import {PolpusaFormComponent} from "../../../shared/components/polpusa-form/polpusa-form.component";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  propertiesEs:string[] = [];
  propertiesEn:string[] = [];
  advantagesEs:string[] = [];
  advantagesEn:string[] = [];
  formType: number;
  @ViewChild('form') formComponent:PolpusaFormComponent;

  constructor(public currentLanguage:CurrentLanguageService) { }

  ngOnInit(): void {
    this.product.properties_id.forEach((element)=>{
      this.propertiesEs.push(element.property_product)
    })
    this.product.properties_EN.forEach((element)=>{
      this.propertiesEn.push(element.property_product)
    })
    this.product.advantage_id.forEach((element)=>{
      this.advantagesEs.push(element.advantage_product)
    })
    this.product.advantage_EN.forEach((element)=>{
      this.advantagesEn.push(element.advantage_product)
    })
    this.formType = this.product.category_id;
  }

  openDS(data_sheet: any) {
    Utils.openUrlInOtherTab(data_sheet);
  }

  getType(){
    if (this.product.type_bag == 1){
      return this.currentLanguage.language == 'es' ? 'Biodegradable' : 'Biodegradable';
    }else if(this.product.type_bag == 2){
      return this.currentLanguage.language == 'es' ? 'Reciclado' : 'Recyclied';
    }else if(this.product.type_bag == 3){
      return this.currentLanguage.language == 'es' ? 'Reciclable' : 'recyclable';
    }else if (this.product.type_bag == 4){
      return this.currentLanguage.language == 'es' ? 'Reutilizable' : 'Reusable';
    }else{
      return 'N/A'
    }
  }
}
