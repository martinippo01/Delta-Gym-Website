import { Api } from "./api";

export { RoutinesApi, Routine, FetchRoutines };

class RoutinesApi {
  static getUrl(slug?: string) {
    return `${Api.baseUrl}/routines${slug ? `/${slug}` : ""}`;
  }
  static getUrlParameters(slug?: string) {
    return `${Api.baseUrl}/routines?${slug ? `${slug}` : ""}`;
  }


  static async addRoutine(routine: Routine) {
    return await Api.post(RoutinesApi.getUrl(), true, routine, null);
  }

  static async getAllRoutines(page:number) {
    return await Api.get(RoutinesApi.getUrlParameters(`size=11&page=${page}`), true, {});
  }
  static async addCycle(rutineId:number,name:string,detail:string,type:string,order:number,repetitions:number){
    return await Api.post(this.getUrl(`${rutineId.toString()}/cycles`),true,new Cycle(name,detail,type,order,repetitions),null)
  }}

class FetchRoutines {
  constructor(
    orderBy: string,
    isPublic: boolean,
    difficulty: string,
    detail: string,
    name: string
  ) {
    this.isPublic = isPublic;
    this.orderBy = orderBy;
    this.difficulty = difficulty;
    this.detail = detail;
    this.name = name;
  }

  difficulty: string;
  detail: string;
  name: string;
  isPublic: boolean;
  orderBy: string;
}

class Routine {
  constructor(
    name: string,
    detail: string,
    difficulty: string,
    isPublic: boolean,
  ) {
    this.isPublic = isPublic;
    this.difficulty = difficulty;
    this.name = name;
    this.detail = detail;
    this.metadata=null;
    this.category = {
      "id":1
    };
  }

  name: string;
  detail: string;
  isPublic: boolean;
  difficulty: string;
  category: any;
  metadata:any;

}
class Cycle{
  constructor(name:string,detail:string,type:string,order:number,repetitions:number) {
    this.name = name;
    this.detail = detail;
    this.type = type;
    this.order = order;
    this.repetitions = repetitions;
  }
  name:string;
  detail:string;
  type:string;
  order:number;
  repetitions:number;
}
