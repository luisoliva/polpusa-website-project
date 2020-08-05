export class UploadTranslation{
    id:number;
    UploadFile_id:number;
    name:string;
    u_file:string | File;
    language:number;

    constructor(language?:number,name?:string,UploadFile_id?:number,u_file?:string | File, id?:number) {
        this.id = id ? id : null;
        this.UploadFile_id = UploadFile_id ? UploadFile_id : null;
        this.name = name ? name : '';
        this.u_file = u_file ? u_file : null;
        this.language = language ? language : null;
    }
}
