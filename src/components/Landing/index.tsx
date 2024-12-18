import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className='text-center py-[20%] space-y-6'>
      <h2 className='text-4xl font-bold'>CookBook</h2>
      <p className='text-lg'>Cook Something Today</p>
      <div className='flex justify-between mx-auto w-[20rem]'>
        <Link to='/login' className='hover:text-blue-600'>Login</Link>
        <Link to='/sign-up' className='hover:text-blue-600'>Sign Up</Link>
      </div>
    </div>
  )
}

export default Landing;