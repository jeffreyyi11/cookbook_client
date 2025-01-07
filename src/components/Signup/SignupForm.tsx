import { SubmitHandler, useForm } from "react-hook-form"
import userService from "../../services/userService"; 
import { Link } from "react-router-dom";
import { NewUserSchema } from "../../types/user";
import { zodResolver } from '@hookform/resolvers/zod';

type FormInputValues = {
  firstName: string,
  lastName: string,
  email: string,
  username: string,
  password: string,
  confirmPassword: string
}

const inputDivStyle = 'w-[25rem]';
const errorMessageStyle = 'bg-red-500 px-2 mt-2 font-semibold text-white rounded-sm';

const SignUpForm = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<FormInputValues>({
    resolver: zodResolver(NewUserSchema)
  });

  const userSignUp: SubmitHandler<FormInputValues> = async (data: FormInputValues) => {
    console.log(data);

    try {
      const response = await userService.register(data);

      if (response.status === 201) {
        window.localStorage.setItme()
      }
    } catch (error) {

    }
  }

  return (
    <div className='flex flex-col items-center'>
      <h2 className='text-center text-3xl pb-12'>Sign up</h2>
      <form className='space-y-4 flex flex-col items-center' onSubmit={handleSubmit(userSignUp)}>
        <div className={inputDivStyle}>
          First Name: 
            <input className='p-1 border-black border-b-2 block w-full'  {...register('firstName', {required: 'First Name Required'})} />
          {errors && <p className={errorMessageStyle}>{errors.firstName?.message}</p>}
        </div>
        <div className={inputDivStyle}>
          Last Name: <input className='p-1 border-black border-b-2 block w-full'  {...register('lastName')} />
          {errors && <p className={errorMessageStyle}>{errors.lastName?.message}</p>}
        </div>
        <div className={inputDivStyle}>
          Email: <input className='p-1 border-black border-b-2 block w-full'  {...register('email', {required: 'Email required'})} />
          {errors && <p className={errorMessageStyle}>{errors.email?.message}</p>}
        </div>
        <div className={inputDivStyle}>
          Username: <input className='p-1 border-black border-b-2 block w-full' {...register('username', {required: 'Username required'})} />
          {errors && <p className={errorMessageStyle}>{errors.username?.message}</p>}
        </div>
        <div className={inputDivStyle}>
          Password: <input type='password' className='p-1 border-black border-b-2 block w-full'  {...register('password', {required: 'Password required'})} />
          {errors && <p className={errorMessageStyle}>{errors.password?.message}</p>}
        </div>
        <div className={inputDivStyle}>
          Confirm Password: <input type='password' className='p-1 border-black border-b-2 block w-full'  {...register('confirmPassword', {required: true})}/>
          {errors && <p className={errorMessageStyle}>{errors.confirmPassword?.message}</p>}
        </div>
        <div className='w-[25rem] flex justify-between'>
          <button type='submit' className='font-bold border bg-blue-500 text-white px-4 py-1 rounded-md hover:text-blue-500 hover:bg-white hover:border-black'>Sign Up</button>
          <Link to='/' className='font-bold border bg-red-500 text-white px-4 py-1 rounded-md hover:text-red-500 hover:bg-white hover:border-black'>Cancel</Link>
        </div>
      </form>
    </div>
  )
}

export default SignUpForm;