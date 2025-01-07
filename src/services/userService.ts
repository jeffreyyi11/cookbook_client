import axios from "axios";
import { NewUser, NewUserSchema } from "../types/user";

const baseURL = process.env.REACT_APP_LOCAL_SERVER;

const register = async (newUserDetails: NewUser) => {
  console.log(newUserDetails);
  const userObject = NewUserSchema.parse(newUserDetails);

  return await axios.post(`${baseURL}/users/register`, userObject);
}

const getUser = () => {
  const user = window.localStorage.getItem('user');

  if (user) return JSON.parse(user);
  return null;
}

export default {
  register,
  getUser
}