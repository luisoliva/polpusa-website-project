export class PropertyEs{
    id:number;
    product_id:number;
    property_product:string;

    constructor(property_product?:string, product_id?:number, id?:number) {
        this.id = id ? id : null;
        this.product_id = product_id ? product_id : null;
        this.property_product = property_product ? property_product : '';
    }
}
