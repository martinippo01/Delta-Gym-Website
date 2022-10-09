import { defineStore, mapState } from "pinia";
import {exerciseApi} from "@/api/exercises"
interface Exercise {
     name: string | undefined;
     type: string  | undefined;
     time : number  | undefined;
     weight: number  | undefined;
     reps:number  | undefined;
     sets: number  | undefined;
     id : number;
}
export {Exercise}
export const useExerciseStore = defineStore('exercises', {

    state: () => ({
        exercisArray: [] as Exercise []
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
        }
    },
    actions: {
        addExercise( id:number,type:string){
           this.exercisArray.push({id:id,type:type,time:0,weight:0,reps:0,sets:0,name:''}) ;
        },
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
        async upLoadExercises(){

            for (const ex in this.exercisArray){
                try{
                    await exerciseApi.uploadExercises(JSON.parse(ex));
                }catch (error){
                    console.log(error)
                }
            }
        }

    },
})
