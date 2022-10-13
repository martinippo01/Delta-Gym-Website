import { defineStore } from "pinia";
import {exerciseApi} from "@/api/exercises"
import {ExerciseCycle} from "@/store/createRoutine";
import { RoutinesApi } from "@/api/routines";
import { CyclesApi } from "@/api/cycles";

interface Exercise {
     name: string | undefined;
     cycleId: number ;
     exerciseCycle:ExerciseCycle;
     weight: number  | undefined;
     sets: number  | undefined;
     id : number;
     indexId:number;
}
interface ExerciseAPiType{
    name:string | undefined;
    detail: string|undefined;
    type: 'exercise';
    id:number;
    metadata: any;
}
export {ExerciseAPiType,Exercise}
export const useExerciseStore = defineStore('exercises', {

    state: () => ({
        exercisArray: [] as editExerciseObj [],
        createdExercise:[] as ExerciseAPiType[],
        cycleIds:[0,1,2],
        orderCycles:[1,1,1],

        id:0
    }),
    getters: {

        getCoolDownExercise(state){
            return this.exercisArray.filter(ex=>ex.cycleId === this.cycleIds[2]);
        },
        getMainSetExercises(state){
            return this.exercisArray.filter(ex=>ex.cycleId === this.cycleIds[1]);
        },
        getWarmUpExercises(state){
            return this.exercisArray.filter(ex=>ex.cycleId === this.cycleIds[0]);
        },


    },
    actions: {
        deleteExercise(id:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);
            if(aux !== undefined)
             this.exercisArray.splice(aux,1);
            console.log(this.exercisArray.length)
        },

        updateTime(id:number,time:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].exerciseInCycle.duration  = time;
        },
        updateWeight(id:number,weight:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].exerciseInCycle.repetitions  = weight;
        },
        updateReps(id:number,reps:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].exerciseInCycle.repetitions  = reps;
        },
        updateSets(id:number,sets:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].exerciseInCycle.repetitions = sets;
        },
        async uploadExercises(exercise : ExerciseAPiType,cicleId : number,indexId:number){
            const index =this.createdExercise.findIndex(ex => ex.name === exercise.name);
            console.log(this.createdExercise);
            if (index === -1) {
                const idAux = await exerciseApi.uploadExercises(exercise);
                this.exercisArray.push(new editExerciseObj(this.id++,this.cycleIds[cicleId],idAux,new ExerciseCycle(0,0,0),false));
                await this.getCreatedExercises();
            }else{
                this.exercisArray.push(new editExerciseObj(this.id++,this.cycleIds[cicleId],this.createdExercise[index],new ExerciseCycle(0,0,0),false));
            }
        },
         async getRoutineData(id : number){
            const cycles = await RoutinesApi.getCycle(id);
            for(let y = 0; y <cycles.length; y++){
                this.cycleIds.push(cycles[y].id);
                const aux= await CyclesApi.getExercisesCycle(cycles[y].id);
                for (let x = 0; x < aux.content.length ; x++){
                    this.exercisArray.push(new editExerciseObj(this.id++,this.cycleIds[y],aux.content[x].exercise,new ExerciseCycle(aux.content[x].order,aux.content[x].duration,aux.content[x].repetitions),true));
                }
            }
            console.log(this.exercisArray)
         },
        async getCreatedExercises(){
            this.createdExercise = await exerciseApi.getExercises();
        },
        setOrder(index:any){
            const aux= this.cycleIds.findIndex(ex => ex=== this.exercisArray[index].cycleId);
            this.exercisArray[index].exerciseInCycle.order = this.orderCycles[aux]++;
        },
        deleteAll(){
            this.orderCycles = [1,1,1];
            this.exercisArray= [];
            this.cycleIds =[];
            this.createdExercise = [];
        }
    },
})
class editExerciseObj{
    exercise: any;
    indexId:number;
    cycleId:number;
    newExercise:boolean;
    exerciseInCycle:ExerciseCycle
    constructor(indexId:number,cycleId:number,exercise:any,exerciseInCycle:ExerciseCycle,newExercise:boolean) {
        this.cycleId=cycleId;
        this.indexId=indexId;
        this.exercise = exercise;
        this.exerciseInCycle = exerciseInCycle;
        this.newExercise = newExercise;
    }

}