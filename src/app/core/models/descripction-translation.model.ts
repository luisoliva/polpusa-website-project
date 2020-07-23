export class DescriptionTranslation{
    id?:number;
    translation:number;
    description:string;
    language:number;

    constructor(language?:number, translation?:number, description?:string, id?:number) {
        this.id = id ? id : null;
        this.translation = translation ? translation : null;
        this.description = description ? description : '';
        this.language = language ? language : null;
    }
}
