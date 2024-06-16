import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:8080";

export const Signup = async (data: ISigupForm) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};

export const Login = async (data: ILoginForm) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, data);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
