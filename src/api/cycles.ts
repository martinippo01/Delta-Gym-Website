import {Api} from "@/api/api";
import {ExerciseCycle} from "@/store/createRoutine";
import { exerciseApi } from "@/api/exercises";

export {CyclesApi}
class CyclesApi{
    static getUrl(slug?: string,slug2?:string) {
        return `${Api.baseUrl}/cycles${slug ? `/${slug}` : ""}/exercises${slug2 ? `/${slug2}` : ""}`;
    }
    static async addExercise(cycleId:number,exId:number,exercise:exerciseApi){
        await Api.post(this.getUrl(cycleId.toString(),exId.toString()),true,exercise,null);
    }

}
