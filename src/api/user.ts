export {
  UsersSearch,
  UserApi,
  Credentials,
  Registration,
  Confirmation,
  UpdatableCredentials,
};

import { Api } from "./api";

class UserApi {
  static getUrl(slug: string) {
    return `${Api.baseUrl}/users${slug ? `/${slug}` : ""}`;
  }

  /* aca la clave esta en que le agrego al url el slug login debido a que
   * la api me pide ese url para manejar el login! */
  static async login(credentials: Credentials, controller: any) {
    return await Api.post(
      UserApi.getUrl("login"),
      false,
      credentials,
      controller
    );
  }

  static async confirmUser(confirmation: Confirmation) {
    return await Api.post(
      UserApi.getUrl("verify_email"),
      false,
      confirmation,
      null
    );
  }

  static async updateUser(credentials: UpdatableCredentials) {
    return await Api.put(UserApi.getUrl("current"), true, credentials);
  }

  static async addUser(registration: Registration, controller: any) {
    return await Api.post(UserApi.getUrl(""), false, registration, controller);
  }

  static async logout() {
    await Api.post(UserApi.getUrl("logout"), true, {}, null);
  }

  static async get() {
    return Api.get(UserApi.getUrl("current"), true, null);
  }

  static async getAllUsers(params: UsersSearch) {
    return Api.get(UserApi.getUrl(""), true, params);
  }

  static async getUserRoutines(userId: number) {
    return Api.get(UserApi.getUrl(userId + "/routines"), true, null);
  }
  static async resendVerification(email:string){
   return  Api.post(this.getUrl('resend_verification'),false,{email:email},null);
  }
  static async getAllUsersRoutines(userId: number, page: number, size: number) {
    return await Api.get(
      UserApi.getUrl(`${userId}/routines?&size=${size}&page=${page}`),
      true,
      {}
    );
  }
}

class UsersSearch {
  constructor(page: number, size: number) {
    this.page = page;
    this.size = size;
  }

  page: number;
  size: number;
}
class Confirmation {
  constructor(email: string, code: string) {
    this.email = email;
    this.code = code;
  }

  email: string;
  code: string;
}

class Registration {
  constructor(_name: string, _email: string, _password: string) {
    this.username = _name;
    this.password = _password;
    this.email = _email;
  }

  username: string;
  password: string;
  email: string;
}

class Credentials {
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  username: string;
  password: string;
}

class UpdatableCredentials {
  constructor(firstName: string, lastName: string, metadata: object, img: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.metadata = metadata;
    this.avatarUrl = img;
  }

  metadata: object;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
