import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://ravendawn.onrender.com/api/",
  withCredentials: true,
});


export default newRequest;