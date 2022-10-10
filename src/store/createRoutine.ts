import {defineStore} from "pinia";
import {Routine,RoutinesApi} from "@/api/routines";
import {CyclesApi} from "@/api/cycles";
import {useExerciseStore} from "@/store/exerciseData";
export{ExerciseCycle}
export const useCreateRoutine = defineStore('createRoutine', {
    state: () =>({
        id:0,
        name:undefined,
        cycles:[] as any[]
    }),
    actions:{
       async createRoutine(name:string,detail:string){
           const response = await RoutinesApi.addRoutine(new Routine(name,detail,"rookie",true));
           this.id = response.id;
           await this.createCycles();
           await this.addExercises();
           this.cycles = [];

       },
       async createCycles(){
            let response =  await RoutinesApi.addCycle(this.id,"warmup","warmup","warmup",1,1 );
            this.cycles.push(response.id);
            response =  await RoutinesApi.addCycle(this.id,"mainset","exercise","exercise",2,1 );
           this.cycles.push(response.id);
           response =  await RoutinesApi.addCycle(this.id,"cooldown","cooldown","cooldown",3,1 );
           this.cycles.push(response.id);
        },
        async addExercises(){
           const store = useExerciseStore();
           for (const ex in store.exercisArray){
              await CyclesApi.addExercise(this.cycles[store.exercisArray[ex].cycleId],store.exercisArray[ex].id,store.exercisArray[ex].exerciseCycle)
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