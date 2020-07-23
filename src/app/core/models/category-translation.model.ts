export class CategoryTranslation{
    id:number;
    title:string;
    description:string;
    language:number;
    category_id:number;

    constructor(language?:number, categoryId?:number, description?:string, title?:string, id?:number) {
        this.language = language ? language : null;
        this.category_id = categoryId ? categoryId : null;
        this.description = description ? description : '';
        this.title = title ? title : '';
        this.id = id ? id : null;
    }

}
