import {Api} from "@/api/api";
export {CyclesApi}
class CyclesApi{
    static getUrl(slug?: string,slug2?:string) {
        return `${Api.baseUrl}/cycles${slug ? `/${slug}` : ""}/exercises${slug2 ? `/${slug2}` : ""}`;
    }
    static async addExercise(cycleId:number,exId:number,order:number,duration:number,repetitios:number){
        Api.post(this.getUrl(cycleId.toString(),exId.toString()),true,{order:order,duration:duration,repetitios:repetitios},null);
    }

}
