import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Login from "./components/Login";

const App = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/home' />
      <Route path='/' element={<Landing />} />
    </Routes>
  )
};

export default App;