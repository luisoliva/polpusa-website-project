export class Links{
    first:string;
    last:string;
    next:string;
    prev:string;

    constructor(first?:string, last?:string, next?:string, prev?:string) {
        this.first = first ? first : '';
        this.last = last ? last : '';
        this.next = next ? next : '';
        this.prev = prev ? prev : '';
    }
}
