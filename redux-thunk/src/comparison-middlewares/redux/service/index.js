import client from "../httpClient/";

export default class {
  static async getUsers() {
    return await client()
      .get("/user")
      .then(response => response)
      .catch(error => error.response)
  }
}
