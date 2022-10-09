import {Api}  from "@/api/api"
import {Exercise} from "@/store/exerciseData";

export {exerciseApi}
class exerciseApi{
  static getUrl(slug?: string) {
    return `${Api.baseUrl}/exercises${slug ? `/${slug}` : ""}`;
  }
  /*
    Lo que voy a hacer es subir todos los ejercicios y guardarme el id del mismo
  */
  static async uploadExercises(exercise:Exercise){
      return await  Api.post(exerciseApi.getUrl(),true,{
        "name": "CHAU",
        "detail": "Jumping Jacks",
        "type": "exercise",
        "metadata": null
      },null);
  }


}