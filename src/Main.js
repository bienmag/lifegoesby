import React, { useState } from "react";
import Weeks from "./Weeks";
import Months from "./Months";
import Years from "./Years";

function Home() {
  const [mode, setMode] = useState("weeks");

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;

  const [birthDate, setBirthDate] = useState({ month: "", day: "", year: "" });
  const [result, setResult] = useState({ weeks: 0, months: 0, years: 0 });

  function calculate(e) {
    e.preventDefault();
    if (
      birthDate.year > 1950 &&
      birthDate.year < 2023 &&
      birthDate.day > 1 &&
      birthDate.day < 31 &&
      birthDate.year !== "" &&
      birthDate.day !== "" &&
      birthDate.month !== ""
    ) {
      const birthdate = new Date(
        birthDate.year,
        birthDate.month - 1,
        birthDate.day
      );

      const timeDiff = new Date() - birthdate;

      const weeks = Math.round(timeDiff / (7 * 24 * 60 * 60 * 1000));

      const months = Math.round(timeDiff / (30 * 24 * 60 * 60 * 1000));

      const years = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));

      setResult({ weeks, months, years });
    }
  }

  return (
    <div className="flex flex-col justify-center mb-12  " key={result}>
      <div className="flex justify-center py-4">
        <button
          onClick={() => setMode("weeks")}
          className="border-yellow-500 border-2 w-24 mx-2 rounded-full bg-amber-500 text-white text-xl"
        >
          week
        </button>
        <button
          onClick={() => setMode("months")}
          className="border-yellow-500 border-2 w-24 mx-2 rounded-full bg-amber-500 text-white text-xl"
        >
          months
        </button>
        <button
          onClick={() => setMode("years")}
          className="border-yellow-500 border-2 w-24 mx-2 rounded-full bg-amber-500 text-white text-xl"
        >
          years
        </button>
      </div>
      <div>
        <h1 className="text-center py-2 text-amber-500 text-3xl ">
          {" "}
          please enter your birth date
        </h1>
        <form
          className="xl:flex justify-center text-center py-2"
          onSubmit={calculate}
        >
          <div className="flex justify-center text-center">
            <select
              className={`mb-2 appearance-none border-2 bg-amber-500 text-white h-8 rounded-full text-center mr-2 px-2  ${
                birthDate.month === "" ? "border border-red-500" : ""
              }`}
              type="number"
              placeholder="mm"
              value={birthDate.month}
              onChange={(e) =>
                setBirthDate({ ...birthDate, month: e.target.value })
              }
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
              className={`mb-2 w-24 xl:w-40 border-2 bg-amber-500 text-white h-8 rounded-full text-center mr-2 px-2 ${
                (birthDate.day !== "" && birthDate.day < 1) ||
                birthDate.day > 31
                  ? "border-4 border-red-500"
                  : ""
              }`}
              type="text"
              inputMode="numeric"
              placeholder="dd"
              value={birthDate.day}
              onChange={(e) =>
                setBirthDate({ ...birthDate, day: e.target.value })
              }
            />

            <input
              className={`mb-2 w-24 xl:w-40 border-2 bg-amber-500 text-white h-8 rounded-full text-center  mr-2 px-2 ${
                (birthDate.year !== "" && birthDate.year < 1933) ||
                birthDate.year > 2023
                  ? "border-4 border-red-500"
                  : ""
              }`}
              type="text"
              inputMode="numeric"
              placeholder="yyyy"
              value={birthDate.year}
              onChange={(e) =>
                setBirthDate({ ...birthDate, year: e.target.value })
              }
            />
          </div>
          <button
            className={`xl:border-2  text-white rounded-full  xl:h-8  h-14 w-44 text-xl hover:bg-amber-600 px-6 ${
              result.weeks !== 0 ? "bg-gray-800" : "bg-amber-500"
            }`}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      {/* <div>
        <p className="text-center py-2"> You wasted: {result.weeks} weeks</p>
        <p className="text-center py-2"> You wasted: {result.months} months</p>
        <p className="text-center py-2"> You wasted: {result.years} years</p>
      </div> */}
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
