import { defineStore } from "pinia";
import {exerciseApi} from "@/api/exercises"
interface Exercise {
     name: string | undefined;
     type: string  | undefined;
     cycleId: string | undefined;
     time : number  | undefined;
     weight: number  | undefined;
     reps:number  | undefined;
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
export {ExerciseAPiType}
export const useExerciseStore = defineStore('exercises', {

    state: () => ({
        exercisArray: [] as Exercise [],
        createdExercise:[] as ExerciseAPiType[]
    }),
    getters: {

        getCoolDownExercise(state){
            return this.exercisArray.filter(ex=>ex.cycleId === 'coolDown');
        },
        getMainSetExercises(state){
            return this.exercisArray.filter(ex=>ex.cycleId === 'mainSet');
        },
        getWarmUpExercises(state){
            return this.exercisArray.filter(ex=>ex.cycleId === 'warmUp');
        },


    },
    actions: {
        deleteExercise(id:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);
            if(aux !== undefined)
             this.exercisArray.splice(aux,1);
            console.log(this.exercisArray.length)
        },
        updateName(id:number,ex_name:string){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].name = ex_name;
        },
        updateTime(id:number,time:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].time = time;
        },
        updateWeight(id:number,weight:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].weight = weight;
        },
        updateReps(id:number,reps:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].reps = reps;
        },
        updateSets(id:number,sets:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].sets = sets;
        },
        async uploadExercises(exercise : ExerciseAPiType,cicleId : string,indexId:number){
            const index =this.createdExercise.findIndex(ex => ex.name = exercise.name)
            if (index === -1) {
                const idAux = await exerciseApi.uploadExercises(exercise);
                this.exercisArray.push({ name: exercise.name, id: idAux, type: "exercise", cycleId: cicleId, reps: 0, weight: 0, sets: 0, time: 0 ,indexId:indexId});
                this.createdExercise = await exerciseApi.getExercises();
            }else{
                this.exercisArray.push({ name: this.createdExercise[index].name, id: this.createdExercise[index].id, type: "exercise", cycleId: cicleId, reps: 0, weight: 0, sets: 0, time: 0 ,indexId:indexId});
            }

        },
        async getCreatedExercises(){
            this.createdExercise = await exerciseApi.getExercises();
        }
    },
})
