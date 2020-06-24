import { GET_USERS } from "../constant/";
import apiService from "../../service/";

export const requestFetchUsers = () => ({
  type: GET_USERS,
  payload: apiService.getUsers()
})
