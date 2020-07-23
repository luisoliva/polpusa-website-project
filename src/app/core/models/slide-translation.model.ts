export class SlideTranslation {
    translation:number;
    title:string;
    file_Upload:File | string ;
    language:number;

    constructor(language?:number,translation?:number, title?:string, file_Upload?:File | string) {
        this.translation = translation ? translation : null;
        this.title = title ? title : null;
        this.file_Upload  = file_Upload ? file_Upload : null;
        this.language = language ? language : null;
    }
}
