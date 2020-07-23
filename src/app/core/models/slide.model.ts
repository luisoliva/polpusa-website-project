import {SlideTranslation} from "./slide-translation.model";

export class Slide {
    id?:number;
    title:string;
    file_Upload: File | string;
    order:number;
    type:number;
    section:number;
    slides:Array<SlideTranslation>;

    constructor(type?:number, section?:number, order?:number, slides?: Array<SlideTranslation>, id?:number, title?:string, file_Upload?:File | string) {
        this.id = id ? id : null;
        this.title = title ? title : null;
        this.file_Upload = file_Upload ? file_Upload : null;
        this.order = order ? order : null;
        this.type = type ? type : null;
        this.section = section ? section : null;
        this.slides = slides ? slides : new Array<SlideTranslation>();
    }
}
