import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:8080";

export const Signup = async (data: ISigupForm) => {
  const response = await axios.post(`${BASE_URL}/api/signup`, data);
  return response.data;
};

export const Login = async (data: ILoginForm) => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response.data;
};
