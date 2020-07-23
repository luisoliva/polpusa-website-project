import {Links} from "./links.model";

export class Pagination{
    total_rows:number;
    per_page:number;
    current_page:number;
    links:Links;

    constructor(total_rows?:number, per_page?:number, current_page?:number, links?:Links) {
        this.total_rows = total_rows ? total_rows : 0;
        this.per_page = per_page ? per_page : 0;
        this.current_page = current_page ? current_page : 0;
        this.links = links ? links : new Links();
    }
}
