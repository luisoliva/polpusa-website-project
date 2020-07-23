export class Upload{
    id:number;
    name:string;
    u_file:File;
    type:number;

    constructor(u_file?:File, name?:string, type?:number, id?:number) {
        this.id = id ? id : null;
        this.name = name ? name : '';
        this.u_file = u_file ? u_file : null;
        this.type = type ? type : null;
    }
}
