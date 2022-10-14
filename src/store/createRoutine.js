import {defineStore} from "pinia";
import {Routine,RoutinesApi} from "@/api/routines";
import {CyclesApi} from "@/api/cycles";
import {useExerciseStore} from "@/store/exerciseData";
export{ExerciseCycle}
export const useCreateRoutine = defineStore('createRoutine', {
    state: () =>({
        id:0,
        name:undefined,
        cycles:[] ,
       cyclesCounter:[1,1,1]
    }),
    actions:{
       async createRoutine(name,detail){
          // const response = await RoutinesApi.addRoutine(new Routine(name,detail,"rookie",true));
           //this.id = response.id;
           //await this.createCycles();


       },
       async createCycles(){

           console.log(this.cycles);
        },
        async addExercisesToRoutine(){
           const store = useExerciseStore();
           for (const ex in store.exercisArray){
              store.setOrder(ex);
              if (store.exercisArray[ex].newExercise) {
                await CyclesApi.changeExercise(store.exercisArray[ex].cycleId, store.exercisArray[ex].exercise.id, store.exercisArray[ex].exerciseInCycle);
              }
              else {

                await CyclesApi.addExercise(store.exercisArray[ex].cycleId, store.exercisArray[ex].exercise.id, store.exercisArray[ex].exerciseInCycle);
              }
           }
          this.cycles = [];
        },
    }
})
class ExerciseCycle{
  order;
  duration;
  repetitions;
  constructor(order,duration,repetitions) {
    this.order = order;
    this.duration = duration;
    this.repetitions = repetitions;
  }
}