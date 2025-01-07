import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUpPage from "./components/Signup";

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route path='/home' element={<Home />} />
      <Route path='/' element={<Landing />} />
    </Routes>
  )
};

export default App;