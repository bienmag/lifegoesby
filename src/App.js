import './App.css';
import React, { useState } from 'react';

function App ()
{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = dd + '/' + mm + '/' + yyyy;


  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [dateToday, setDateToday] = useState()


  function collectDay (e)
  {
    setDay(e.target.value)
    setDateToday(today)
  }

  function collectMonth (e)
  {
    setMonth(e.target.value)

  }

  function collectYear (e)
  {
    setYear(e.target.value)

  }


  function calculateWeeksBetween (d1, d2)
  {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  function calculate (d1, d2)
  {
    let result = calculateWeeksBetween(new Date(today), new Date(day + month + year))
    console.log(new Date(today))
    console.log(day + month + year)
    console.log(result)
  }



  return (
    <div className="App">
      <p> Please enter your birth date</p>
      <input type="number" placeholder="dd" onKeyUp={ collectDay }></input>
      <input type="number" placeholder="mm" onKeyUp={ collectMonth }></input>
      <input type="number" placeholder="yyyy" onKeyUp={ collectYear }></input>
      <button onClick={ calculate }>Submit</button>
    </div >
  );
}

export default App;
