import React, { useState } from "react";
import Weeks from "./Weeks";
import Months from "./Months";
import Years from "./Years";

function Home() {
  const [mode, setMode] = useState("weeks");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [result, setResult] = useState({ weeks: 0, months: 0, years: 0 });

  function collectDay(e) {
    setDay(e.target.value);
  }

  function collectMonth(e) {
    setMonth(e.target.value);
  }

  function collectYear(e) {
    setYear(e.target.value);
  }

  function calculate(e) {
    e.preventDefault();
    const birthdate = new Date(year, month - 1, day);

    const timeDiff = new Date() - birthdate;

    const weeks = Math.round(timeDiff / (7 * 24 * 60 * 60 * 1000));

    const months = Math.round(timeDiff / (30 * 24 * 60 * 60 * 1000));

    const years = Math.round(timeDiff / (365 * 24 * 60 * 60 * 1000));

    setResult({ weeks, months, years });
  }

  return (
    <div className="flex flex-col justify-center mb-12 " key={result}>
      <div className="flex justify-center py-4">
        <button
          onClick={() => setMode("weeks")}
          className="border-yellow-500 border-2 w-24 mx-2"
        >
          week
        </button>
        <button
          onClick={() => setMode("months")}
          className="border-yellow-500 border-2 w-24 mx-2"
        >
          months
        </button>
        <button
          onClick={() => setMode("years")}
          className="border-yellow-500 border-2 w-24 mx-2"
        >
          years
        </button>
      </div>
      <div>
        <p className="text-center py-2"> Please enter your birth date</p>
        <form className="text-center py-2" onSubmit={calculate}>
          <select
            className="w-40 border-2 border-gray-400 mr-2 px-2"
            type="number"
            placeholder="mm"
            value={month}
            onChange={collectMonth}
          >
            <option value="">Select a month</option>
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <input
            className="w-40 border-2  border-gray-400 mr-2 px-2"
            type="number"
            placeholder="dd"
            value={day}
            onChange={collectDay}
          />
          <input
            className="w-40 border-2 border-gray-400 mr-2 px-2"
            type="number"
            placeholder="yyyy"
            value={year}
            onChange={collectYear}
          />
          <button className="border-2 border-gray-400 mr-3 px-2" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        <p className="text-center py-2"> You wasted: {result.weeks} weeks</p>
        <p className="text-center py-2"> You wasted: {result.months} months</p>
        <p className="text-center py-2"> You wasted: {result.years} years</p>
      </div>
      {mode === "weeks" ? (
        <div>
          <div>
            <Weeks weeks={result.weeks} />
          </div>
        </div>
      ) : mode === "months" ? (
        <Months months={result.months} />
      ) : (
        <Years years={result.years} />
      )}
    </div>
  );
}

export default Home;
