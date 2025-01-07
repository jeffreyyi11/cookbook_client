import { LoginDetails, UserLoginObject } from "../types/login";
import axios from "axios";

const baseURL = process.env.REACT_APP_LOCAL_SERVER;

const login = async (loginObject: LoginDetails) => {
  try {
    const response = await axios.post<UserLoginObject>(`${baseURL}/login`, loginObject);

    if (response.data.token) {
      window.localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return error.response;
    } else if (error instanceof Error) {
      console.log(error);
      return error
    }
  }
};

const logout = async (id: string) => {
  window.localStorage.clear();
}

export default {
  login,
  logout
};