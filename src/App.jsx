import React from 'react'

import { IoMdMail } from "react-icons/io";
import { FaLock } from "react-icons/fa";
import Login from './components/Login';
import { Route, Routes } from 'react-router';
import Signup from './components/Signup';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}  />
    </Routes>
      
  )
}

export default App