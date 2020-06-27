import { GET_USERS } from "../constant/";
import apiService from "../../service/";

export default () => ({
  type: GET_USERS,
  payload: apiService.getUsers()
})
