import {Api}  from "@/api/api"
import {ExerciseAPiType} from "@/store/exerciseData";

export {exerciseApi}
class exerciseApi{
  static getUrl(slug?: string) {
    return `${Api.baseUrl}/exercises${slug ? `/${slug}` : ""}`;
  }
  /*
    Lo que voy a hacer es subir todos los ejercicios y guardarme el id del mismo
  */
  static async uploadExercises(exercise:ExerciseAPiType){
      return await  Api.post(exerciseApi.getUrl(),true,exercise,null);
  }
  static async modifyExercise(id:number,exercise : ExerciseAPiType){
    return await Api.put(this.getUrl(id.toString()),true,exercise);
  }
  static async getExercises(){
      const result =  await Api.get(exerciseApi.getUrl(),true,null);
      return result.content
  }



}