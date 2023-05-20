import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://ravendawn.onrender.com",
  withCredentials: true,
});

export default newRequest;