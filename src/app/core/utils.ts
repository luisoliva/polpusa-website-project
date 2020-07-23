export class Utils {
    public static getPercentage(current:number, total:number):number{
        return Math.round((current/total) * 100);
    }

    public static cloneObject(obj:any){
        return JSON.parse(JSON.stringify(obj));
    }
}
