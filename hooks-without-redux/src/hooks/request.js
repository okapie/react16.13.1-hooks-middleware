import axios from "axios";

export default async () => {
  const response = await axios.get("http://127.0.0.1:8080/api/v1/user");
  return response.data;
};
