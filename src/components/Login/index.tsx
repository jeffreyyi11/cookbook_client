import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h2 className='text-4xl font-bold mb-12 text-center pt-24'>CookBook</h2>
      <LoginForm />
    </div>
  )
}

export default Login;