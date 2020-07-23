export class TranslationBlog{
    id:number;
    blog_id:number;
    title:string;
    body:string;
    language:number;

    constructor(language?:number, blog_id?:number, title?:string, body?:string, id?:number) {
        this.id = id ? id : null;
        this.blog_id = blog_id ? blog_id : null;
        this.title = title ? title : '';
        this.body = body ? body : '';
        this.language = language ? language : null;
    }

}
