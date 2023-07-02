import React, { useState } from "react";
import Graph from "./Graph";
import Template from "./Template";

function Home() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = '"' + mm + "/" + dd + "/" + yyyy + '"';

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState(0);

  function collectDay(e) {
    setDay(e.target.value);
  }

  function collectMonth(e) {
    setMonth(e.target.value);
  }

  function collectYear(e) {
    setYear(e.target.value);
  }

  function calculateWeeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
  }

  function calculate(e) {
    e.preventDefault();
    let birhdate = '"' + month + "/" + day + "/" + year + '"';
    setResult(calculateWeeksBetween(new Date(birhdate), new Date(today)));
  }

  return (
    <div className="flex flex-col justify-center" key={result}>
      <div>
        <h1 className="text-center">Welcome to count life weeks</h1>
        <p className="text-center"> Please enter your birth date</p>
        <form onSubmit={calculate}>
          <input type="number" placeholder="mm" value={month} onChange={collectMonth} />
          <input type="number" placeholder="dd" value={day} onChange={collectDay} />
          <input type="number" placeholder="yyyy" value={year} onChange={collectYear} />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <p> You wasted: {result} weeks</p>
      </div>
      <Template weeks={result} className="flex"></Template>
    </div>
  );
}

export default Home;
