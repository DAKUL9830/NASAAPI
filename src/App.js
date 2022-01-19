//import logo from '../nasa-logo-web-rgb.png';
import './App.css';
import React from 'react';
import Home from './components/Home.js';
import NasaAPI from './components/NasaAPI.js';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
   <div className="App">
       <BrowserRouter>
       <Routes>
       <Route  path='/' element ={<Home/>} />
       <Route  path='/nasaapi' element={<NasaAPI/>} />
       </Routes>
       
       </BrowserRouter>
    
   </div>
  );
}

export default App;
