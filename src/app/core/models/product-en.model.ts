export interface ProductEn{
    id?:number;
    product_id?:number;
    name:string;
    footer:string;
    description:string;
    photo_specifications?: string | File;
    data_sheet:string | File;
}
