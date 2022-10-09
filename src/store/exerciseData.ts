import { defineStore } from "pinia";
import {exerciseApi} from "@/api/exercises"
interface Exercise {
     name: string | undefined;
     type: string  | undefined;
     cycleId: number | undefined;
     time : number  | undefined;
     weight: number  | undefined;
     reps:number  | undefined;
     sets: number  | undefined;
     id : number;
}
interface ExerciseAPiType{
    name:string | undefined;
    detail: string|undefined;
    type: 'exercise';
    metadata: any;
}
export {ExerciseAPiType}
export const useExerciseStore = defineStore('exercises', {

    state: () => ({
        exercisArray: [] as Exercise [],
        createdExercise:[]
    }),
    getters: {

        getCoolDownExercise(state){
            return this.exercisArray.filter(ex=>ex.type === 'coolDown');
        },
        getMainSetExercises(state){
            return this.exercisArray.filter(ex=>ex.type === 'mainSet');
        },
        getWarmUpExercises(state){
            return this.exercisArray.filter(ex=>ex.type === 'warmUp');
        },


    },
    actions: {
        deleteExercise(id:number){
            const aux= this.exercisArray.findIndex(ex => ex.id === id);
            if(aux !== undefined)
             this.exercisArray.splice(aux,1);
            console.log(this.exercisArray.length)
        },
        updateName(id:number,ex_name:string){
            const aux= this.exercisArray.findIndex(ex => ex.id === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].name = ex_name;
        },
        updateTime(id:number,time:number){
            const aux= this.exercisArray.findIndex(ex => ex.id === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].time = time;
        },
        updateWeight(id:number,weight:number){
            const aux= this.exercisArray.findIndex(ex => ex.id === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].weight = weight;
        },
        updateReps(id:number,reps:number){
            const aux= this.exercisArray.findIndex(ex => ex.id === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].reps = reps;
        },
        updateSets(id:number,sets:number){
            const aux= this.exercisArray.findIndex(ex => ex.id === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].sets = sets;
        },
        async uploadExercises(exercise : ExerciseAPiType,cicleId : number){
            const idAux = await exerciseApi.uploadExercises(exercise);
            this.exercisArray.push({name:exercise.name,id:idAux,type:'',cycleId:cicleId,reps:0,weight:0,sets:0,time:0});
            this.createdExercise = await exerciseApi.getExercises();

        },
        async getCreatedExercises(){
            this.createdExercise = await exerciseApi.getExercises();
        }
    },
})
