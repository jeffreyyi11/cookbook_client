import { useState } from "react";
import loginService from "../../services/loginService";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUserLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const userLogin = {email, password};
    const loginResponse = await loginService.login(userLogin);

    console.log(loginResponse);

    // if (loginResponse!.status !== 200) {
    //   setError(loginResponse?.data.error);
    // }
  }

  return (
    <div className='flex flex-col items-center'>
      <form className='space-y-4' onSubmit={handleUserLogin}>
        <div className='w-[25rem]'>
          <span className='font-bold'>Email</span>: <input type='email' className='p-1 border-black border-b-2 block w-full' value={email} onChange={({target}) => setEmail(target.value)} />
        </div>
        <div className='w-[25rem]'>
          <span className='font-bold'>Password</span>: <input type='password' className='p-1 border-black border-b-2 block w-full' value={password} onChange={({target}) => setPassword(target.value)} />
        </div>
        <button type='submit' className='font-bold border border-blue-500 px-4 py-1 rounded-md hover:text-white hover:bg-blue-500 hover:border-none'>Login</button>
      </form>
      {error && <p className='text-red-600'>{error}</p>}
    </div>
  )
}

export default LoginForm;