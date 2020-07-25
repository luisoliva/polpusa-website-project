export class Utils {
    public static getPercentage(current:number, total:number):number{
        return Math.round((current/total) * 100);
    }

    public static cloneObject(obj:any){
        return JSON.parse(JSON.stringify(obj));
    }

    public static openUrlInOtherTab(url:string){
        window.open(url, "_blank");
    }
}
