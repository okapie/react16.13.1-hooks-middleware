import axios from "axios";

export default () =>
  axios.create({
    baseURL: "http://127.0.0.1:8080/api/v1",
    headers: {
      "credentials": "include",
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    transformRequest: [
      data => JSON.stringify(data)
    ],
  });
