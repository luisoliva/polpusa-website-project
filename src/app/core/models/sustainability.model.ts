import {Description} from "./description.model";

export class Sustainability{
    special_products:Description;
    plastic_sustainability:Description;
    our_actions:Description;
    polpusa_verde_brief:Description;
    polpusa_verde_long:Description;
    polpusa_verde_opc:Description;

    constructor() {
        this.special_products = new Description();
        this.plastic_sustainability = new Description();
        this.our_actions = new Description();
        this.polpusa_verde_brief = new Description();
        this.polpusa_verde_long = new Description();
        this.polpusa_verde_opc = new Description();
    }
}
