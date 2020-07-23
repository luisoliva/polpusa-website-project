import {TranslationBlog} from "./translation-blog.model";

export class Blog {
    id:number;
    title:string;
    date:Date | string;
    image:string | File;
    body:string;
    blog:Array<TranslationBlog>;

    constructor(id?:number, title?:string, date?:Date | string, image?:string, body?:string, blog?:Array<TranslationBlog>) {
        this.id = id ? id :null;
        this.title = title ? title : '';
        this.date = date ? date : null;
        this.image = image ? image : '';
        this.body = body ? body : '';
        this.blog = blog ? blog : new Array<TranslationBlog>(new TranslationBlog());
    }
}
