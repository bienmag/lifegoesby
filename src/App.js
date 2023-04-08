import './App.css';
import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import Home from './Main';
 



function App ()
{
  return (

    <div className='app'>
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
    </ul>
  </nav >
);


const Main = () => (
  <Routes>
    <Route path='/' element={ <Home /> }></Route>
    <Route path='about'   ></Route>
    {/* <Route path='/contact' component={ Contact }></Route> */ }
  </Routes>
);