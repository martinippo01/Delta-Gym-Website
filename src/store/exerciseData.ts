import { defineStore } from "pinia";
import {exerciseApi} from "@/api/exercises"
import {ExerciseCycle} from "@/store/createRoutine";

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
export {ExerciseAPiType}
export const useExerciseStore = defineStore('exercises', {

    state: () => ({
        exercisArray: [] as Exercise [],
        createdExercise:[] as ExerciseAPiType[],
        exerciseIndex:[1,1,1]
    }),
    getters: {

        getCoolDownExercise(state){
            return this.exercisArray.filter(ex=>ex.cycleId === 2);
        },
        getMainSetExercises(state){
            return this.exercisArray.filter(ex=>ex.cycleId === 1);
        },
        getWarmUpExercises(state){
            return this.exercisArray.filter(ex=>ex.cycleId === 0);
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
            this.exercisArray[aux].exerciseCycle.duration = time;
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
            this.exercisArray[aux].exerciseCycle.repetitions = reps;
        },
        updateSets(id:number,sets:number){
            const aux= this.exercisArray.findIndex(ex => ex.indexId === id);

            if(aux === undefined)
                return;
            this.exercisArray[aux].sets = sets;
        },
        async uploadExercises(exercise : ExerciseAPiType,cicleId : number,indexId:number){
            const order = this.exerciseIndex[cicleId];
            this.exerciseIndex[cicleId] = order + 1;
            const index =this.createdExercise.findIndex(ex => ex.name === exercise.name);
            console.log(this.createdExercise);
            if (index === -1) {
                const idAux = await exerciseApi.uploadExercises(exercise);
                this.exercisArray.push({ name: exercise.name, id: idAux, cycleId: cicleId,  weight: 0, sets: 0, exerciseCycle:new ExerciseCycle(order,0,0) ,indexId:indexId});
                //Cuando pusheo un ejercicio lo que hago es obtener los ejercicios devuelta.
                this.createdExercise = await exerciseApi.getExercises();
            }else{
                this.exercisArray.push({ name: this.createdExercise[index].name, id: this.createdExercise[index].id, cycleId: cicleId, weight: 0, sets: 0, exerciseCycle:new ExerciseCycle(order,0,0) ,indexId:indexId});
            }

        },
        async getCreatedExercises(){
            this.createdExercise = await exerciseApi.getExercises();
        }
    },
})
