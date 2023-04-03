import React, { useState } from "react";
import Graph from "./Graph";


function Home ()
{


  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = '"' + mm + '/' + dd + '/' + yyyy + '"';



  const [day, setDay] = useState()
  const [month, setMonth] = useState()
  const [year, setYear] = useState()
  const [result, setResult] = useState(0)


  function collectDay (e)
  {
    setDay(e.target.value)
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
    let birhdate = '"' + month + '/' + day + '/' + year + '"'
    setResult(calculateWeeksBetween(new Date(birhdate), new Date(today)))

  }

 



  return (

    <div className="App" key={ result }>
      <p> Please enter your birth date</p>
      <input type="number" placeholder="mm" onKeyUp={ collectMonth }></input>
      <input type="number" placeholder="dd" onKeyUp={ collectDay }></input>
      <input type="number" placeholder="yyyy" onKeyUp={ collectYear }></input>
      <button onClick={ calculate }>Submit</button>
      <p> result : { result } weeks</p> 
    <Graph weeks = {result}></Graph>
    </div >

  );
}

export default Home
