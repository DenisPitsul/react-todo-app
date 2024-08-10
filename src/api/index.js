import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://randomuser.me",
});

export const getRandomUser = () => axiosInstance.get("/api");
