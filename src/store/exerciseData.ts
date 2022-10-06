import { defineStore } from 'pinia'
type exercise = {
    name:string,
    type:string,
    time:number,
    weight:number,
    reps:number
};
export const useCounterStore = defineStore('counter', {

    state: () => ({
        exerciseList:new Map<number,exercise>()
    }),
    getters: {
        getExercises(state){
            return this.exerciseList;
        },
        getCoolDownExercises(state){
            return Array.from(this.exerciseList.values()).filter(exercise => exercise.type === "coolDown" );
        },
        getMainSetExercises(state){
            return Array.from(this.exerciseList.values()).filter(exercise => exercise.type === "mainSet" );
        },
        getWarmUpExercises(state){
            return Array.from(this.exerciseList.values()).filter(exercise => exercise.type === "warmUp" );
        }
    },
    actions: {
        addExercise( id:number,name:string,type:String,time:number,weight:number,reps:number){

        }
    },
})
