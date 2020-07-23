import {CategoryTranslation} from "./category-translation.model";

export class Category{
    id:number;
    title:string;
    img:string | File;
    description: string;
    category:Array<CategoryTranslation>;

    constructor(category?:Array<CategoryTranslation>,title?:string, img?:string | File, description?:string, id?:number) {
        this.id = id ? id : null;
        this.title = title ? title : '';
        this.img = img ? img : null;
        this.description = description ? description : '';
        this.category = category ? category : new Array<CategoryTranslation>(new CategoryTranslation(1))
    }
}
