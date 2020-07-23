import {DescriptionTranslation} from "./descripction-translation.model";

export class Description{
    id?:number;
    description:string;
    description_type:number;
    section:number;
    translation:Array<DescriptionTranslation>

    constructor(description_type?:number, section?:number, translation?:Array<DescriptionTranslation>, description?:string, id?:number) {
        this.id = id ? id : null;
        this.description = description ? description : '';
        this.description_type = description_type ? description_type : null;
        this.section = section ? section : null;
        this.translation = translation ? translation : new Array<DescriptionTranslation>(new DescriptionTranslation());
    }
}
