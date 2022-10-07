import { defineStore, mapState } from "pinia";
type exercise = {
    name:string,
    type:string,
    time:number,
    weight:number,
    reps:number,
    sets:number
};
export const useExerciseStore = defineStore('exercises', {

    state: () => ({
        exerciseList:new Map<number,exercise>()
    }),
    getters: {
        getExercises(){
            Array.from(this.exerciseList.values());
        },
        getCoolDownExercise(state){
            return Array.from(this.exerciseList.values()).filter(exercise => exercise.type === "coolDown" );
        },
        getMainSetExercises(state){
            return Array.from(this.exerciseList.values()).filter(exercise => exercise.type === "mainSet" );
        },
        getWarmUpExercises(state){
            return Array.from(this.exerciseList.values()).filter(exercise => exercise.type === "warmUp"  );
        }
    },
    actions: {
        addExercise( id:number,type:string){
            this.exerciseList.set(id,{name:'',type:type,time:id,weight:0,reps:0,sets:0});
           console.log(Array.from(this.exerciseList.values()))
        },
        deleteExercise(id:number){
            this.exerciseList.delete(id);
        },
        updateName(id:number,ex_name:string){
            const aux = this.exerciseList.get(id);
            if(aux === undefined)
                return;

            aux.name = ex_name;
            this.exerciseList.set(id,aux);
        },
        updateTime(id:number,time:number){
            const aux = this.exerciseList.get(id);
            if(aux === undefined)
                return;

            aux.time = time;
            this.exerciseList.set(id,aux);
        },
        updateWeight(id:number,weight:number){
            const aux = this.exerciseList.get(id);
            if(aux === undefined)
                return;

            aux.weight = weight;
            this.exerciseList.set(id,aux);
        },
        updateReps(id:number,reps:number){
            const aux = this.exerciseList.get(id);
            if(aux === undefined)
                return;

            aux.reps = reps;
            this.exerciseList.set(id,aux);
        },
        updateSets(id:number,reps:number){
            const aux = this.exerciseList.get(id);
            if(aux === undefined)
                return;

            aux.sets = reps;
            this.exerciseList.set(id,aux);
        },


    },
})
