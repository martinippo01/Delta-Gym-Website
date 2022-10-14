import {Api} from "@/api/api";
import {ExerciseCycle} from "@/store/createRoutine";
import { exerciseApi } from "@/api/exercises";

export {CyclesApi}
class CyclesApi{
    static getUrl(slug: number,slug2?:number) {
        return `${Api.baseUrl}/cycles${slug ? `/${slug}` : ""}/exercises${slug2 ? `/${slug2}` : ""}`;
    }
    static async addExercise(cycleId:number,exId:number,exercise:exerciseApi){
        console.log(exercise);
        await Api.post(this.getUrl(cycleId,exId),true,exercise,null);
    }
    static async getExercisesCycle(cycleId:number){
        return await Api.get(this.getUrl(cycleId),true,null);
    }
    static async changeExercise(cycleId:number,exId:number,exercise:exerciseApi){
        return await Api.put(this.getUrl(cycleId, exId), true, exercise);
    }
    static async deleteExerciseFromCycle(cycleId:number,exId:number){
        return await Api.delete(this.getUrl(cycleId,exId),true,null);
    }
}
