import loginService from "../../services/loginService";
import {SubmitHandler, useForm} from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";
import { LoginDetails } from "../../types/login";

const errorStyles = 'bg-red-500 text-black'

const LoginForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<LoginDetails>();

  const navigate = useNavigate();

  const userLogin: SubmitHandler<LoginDetails> = async (data) => {
    console.log(data);

    const userLogin: LoginDetails = {email: data.email, password: data.password};
    const loginResponse = await loginService.login(userLogin);
    console.log(loginResponse);
    // window.localStorage.setItem('userToken', JSON.stringify(loginResponse.data));
    // navigate('/home');
  };

  return (
    <div className='flex flex-col items-center'>
      <form className='space-y-4' onSubmit={handleSubmit(userLogin)}>
        <div className='w-[25rem]'>
          <span className='font-bold'>Email</span>: 
          <input type='email' className='p-1 border-black border-b-2 block w-full' {...register('email', {required: true})} />
          {errors && <p className={errorStyles}>{errors.email?.message}</p>}
        </div>
        <div className='w-[25rem]'>
          <span className='font-bold'>Password</span>: 
          <input type='password' className='p-1 border-black border-b-2 block w-full' {...register('password', {required: true})} />
          {errors && <p className={errorStyles}>{errors.password?.message}</p>}
        </div>
        <div className='flex justify-between'>
          <button type='submit' className='font-bold border bg-blue-500 text-white px-4 py-1 rounded-md hover:text-blue-500 hover:bg-white hover:border-black'>Login</button>
          <Link to='/' className='font-bold border bg-red-500 text-white px-4 py-1 rounded-md hover:text-red-500 hover:bg-white hover:border-black'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginForm;