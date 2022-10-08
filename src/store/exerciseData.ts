import { defineStore, mapState } from "pinia";
type exercise = {
    name:string,
    type:string,
    time:number,
    weight:number,
    reps:number,
    sets:number,
    id:number
};
export const useExerciseStore = defineStore('exercises', {

    state: () => ({
        exercisArray:[] as exercise[]
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
           this.exercisArray.push({name:'',type:type,time:id,weight:0,reps:0,sets:0,id:id}) ;
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


    },
})
