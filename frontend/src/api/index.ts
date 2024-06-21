import axios, { AxiosError } from "axios";

const BASE_URL = "http://localhost:8080";

export const Signup = async (data: ISigupForm): Promise<AuthResponse> => {
  const response = await axios.post(`${BASE_URL}/api/signup`, data);
  return response.data;
};

export const login = async (data: ILoginForm): Promise<AuthResponse> => {
  const response = await axios.post(`${BASE_URL}/login`, data);
  return response.data;
};

export const googleLogin = async (data: any): Promise<AuthResponse> => {
  const response = await axios.post(`${BASE_URL}/api/google-login`, data);
  return response.data;
};
