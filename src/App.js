import React from 'react';
import './App.css';
import Homepage from './components/Home/Homepage';
import FindFlight from './components/Findflight/FindFlight';
import Login from './components/Login/Login';
import Signup from './components/signup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>
     <Route path='/' element={<Homepage/>}/>
     <Route path='/Login'element={<Login/>}/>
     <Route path='/Signup'element={<Signup/>}/>
     <Route path='/Findflight'element={<FindFlight/>}/>
     
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

