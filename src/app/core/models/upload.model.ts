import {UploadTranslation} from "./upload-translation.model";

export class Upload{
    id:number;
    name:string;
    u_file:File;
    type:number;
    uploadID:Array<UploadTranslation>

    constructor(u_file?:File, name?:string, type?:number, id?:number,uploadID?:Array<UploadTranslation>) {
        this.id = id ? id : null;
        this.name = name ? name : '';
        this.u_file = u_file ? u_file : null;
        this.type = type ? type : null;
        this.uploadID = uploadID ? uploadID : [];
    }
}
