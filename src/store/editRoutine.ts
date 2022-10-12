import {defineStore} from "pinia";
import {Routine,RoutinesApi} from "@/api/routines";
import {CyclesApi} from "@/api/cycles";
import {Exercise} from "@/store/exerciseData";

export{ExerciseCycle}
export const useEditeRoutine = defineStore('createRoutine', {
  state: () =>({
    id:0,
    name:undefined,
    exercises:[] as any[]
  }),
  actions:{
    async getRoutineData(id : number){
      const cycles = await RoutinesApi.getCycle(id);
      for (const cycle in cycles){
          const aux= await CyclesApi.getExercisesCycle(cycles[cycle].id);
          this.exercises = aux.content;
          console.log(this.exercises);
      }


    }




  }
})
class ExerciseCycle{
  order:number;
  duration:number;
  repetitions:number;
  constructor(order:number,duration:number,repetitions:number) {
    this.order = order;
    this.duration = duration;
    this.repetitions = repetitions;
  }
}