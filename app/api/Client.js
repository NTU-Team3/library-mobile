import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:19002/api",
});
