import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3090",
    withCredentials: true
});