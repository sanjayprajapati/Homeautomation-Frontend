import axios from "axios";

export const client = axios.create({
  baseURL: `http://origin8solutions.com/api/v1`,
});
