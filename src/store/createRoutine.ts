import {defineStore} from "pinia";
import {Routine,RoutinesApi} from "@/api/routines";
import {CyclesApi} from "@/api/cycles";
import {useExerciseStore} from "@/store/exerciseData";

export const createRoutine = defineStore('createRoutine', {
    state: () =>({
        id:0,
        name:undefined,
        cycles:[] as any[]
    }),
    actions:{
       async createRoutine(name:string,detail:string){
           const response = await RoutinesApi.addRoutine(new Routine(name,detail,"hard",true));
           this.id = response.id;
       },
       async createCycles(){
            let response =  await RoutinesApi.addCycle(this.id,"WarmUp","WarmUp","WarmUp",1,1 );
            this.cycles.push(response.id);
            response =  await RoutinesApi.addCycle(this.id,"mainSet","mainSet","mainSet",2,1 );
           this.cycles.push(response.id);
           response =  await RoutinesApi.addCycle(this.id,"coolDown","coolDown","coolDown",2,1 );
           this.cycles.push(response.id);
        },
        async addExercises(){
           const store = useExerciseStore();


        }
    }
})