import {Upload} from "./upload.model";
import {PropertyEn} from "./property-en.model";
import {AdvantageEn} from "./advantage-en.model";
import {ProductEn} from "./product-en.model";
import {PropertyEs} from "./property-es.model";
import {AdvantageEs} from "./advantage-es.model";
import {Spec} from "./spec.model";


export interface Product{
    id?:number;
    category_id:number;
    name:string;
    type_bag?:number;
    product_photo:string | File;
    photo_specifications?:string | File;
    footer:string;
    description:string;
    data_sheet:string | File;
    images_type?: Array<string | Upload | number>;
    image_use:Array<string | Upload | number>;
    product_EN:Array<ProductEn>;
    specs_id?:Array<Spec>;
    properties_id:Array<PropertyEs>
    properties_EN:Array<PropertyEn>
    advantage_id:Array<AdvantageEs>
    advantage_EN:Array<AdvantageEn>
}
