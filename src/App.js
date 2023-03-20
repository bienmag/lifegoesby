import './App.css';
import React from 'react';
import { NavLink, Routes, Route, useParams } from 'react-router-dom';
import Home from './Main';
import Weeks from './Weeks';



function App ()
{
  return (

    <div className='app'>
      <h1>Welcome to count life weeks</h1>
      <Navigation />
      <Main />
    </div>

  )
};

export default App


const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </nav >
);


const Main = () => (
  <Routes>
    <Route path='/' element={ <Home /> }></Route>
    <Route path='about' element={ <Weeks /> }></Route>
    {/* <Route path='/contact' component={ Contact }></Route> */ }
  </Routes>
);