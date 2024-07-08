import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login & Signup/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Login & Signup/Signup';
import Dashboard from './components/Dashboard';
import Shared from './components/Shared';

import "./App.scss";
import Filerequest from './components/Filerequest';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/shared' element={<Shared />}></Route>
          <Route path='/file-request' element={<Filerequest />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
