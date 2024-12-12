import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputStyles = 'border-black border-b-2'

  return (
    <div className='mx-[30%]'>
      <form className='space-y-4'>
        <div>
          Email: <input type='email' className={inputStyles} value={email} onChange={({target}) => setEmail(target.value)} />
        </div>
        <div>
          Password: <input type='password' className={inputStyles} value={password} onChange={({target}) => setPassword(target.value)} />
        </div>
        <button type='submit' className=''>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;