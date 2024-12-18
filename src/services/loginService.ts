import { LoginDetails, UserLoginObject } from "../types/login";
import axios from "axios";
import { z } from 'zod';

const login = async (loginObject: LoginDetails) => {
  const baseURL = process.env.REACT_APP_LOCAL_SERVER;

  try {
    const {data, status} = await axios.post<UserLoginObject>(`${baseURL}/login`, loginObject);

    return {data, status};
  } catch (error: unknown) {
    console.log(error);
    if (axios.isAxiosError(error)) {
      console.log(error.status, error.response);
      return error.response;
    } else if (error instanceof z.ZodError) {
      console.log(error.issues);
      return error;
    }
  }
};

export default {
  login
};