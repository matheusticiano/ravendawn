import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://ravendawn.onrender.com/api/",
  withCredentials: true,
});

newRequest.defaults.headers.common["cookies"] = "accessToken=; SameSite=None";

export default newRequest;