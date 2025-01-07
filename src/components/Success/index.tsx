import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/home');
  }, (5000));

  return (
    <div className='text-center my-auto'>
      <h1>Success</h1>
    </div>
  )
}

export default SuccessPage;