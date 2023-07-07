import React, { useState } from "react";
import Weeks from "./Weeks";
import Months from "./Months";
import Years from "./Years";
import ModeButton from "./ModeButton";

function Home() {
  const [mode, setMode] = useState("weeks");
  const [birthDate, setBirthDate] = useState({ month: "", day: "", year: "" });
  const [timePassed, setTimePassed] = useState({
    weeks: 0,
    months: 0,
    years: 0,
  });

  function calculatetimePassed(e) {
    e.preventDefault();

    const { year, month, day } = birthDate;
    if (
      year > 1950 &&
      year < 2023 &&
      day > 1 &&
      day < 31 &&
      year !== "" &&
      day !== "" &&
      month !== ""
    ) {
      const birthdate = new Date(year, month - 1, day);

      const timeDiff = new Date() - birthdate;

      const weeksPassed = Math.round(timeDiff / (7 * 24 * 60 * 60 * 1000));

      const monthsPassed = Math.round(timeDiff / (30 * 24 * 60 * 60 * 1000));

      const yearsPassed = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000));

      setTimePassed({ weeksPassed, monthsPassed, yearsPassed });
    }
  }

  return (
    <div className="h-full">
      <div className="flex flex-col justify-center" key={timePassed}>
        <div className="flex justify-center py-4">
          <ModeButton
            mode="weeks"
            selectedMode={mode}
            setMode={setMode}
            label="weeks"
          />
          <ModeButton
            mode="months"
            selectedMode={mode}
            setMode={setMode}
            label="months"
          />
          <ModeButton
            mode="years"
            selectedMode={mode}
            setMode={setMode}
            label="years"
          />
        </div>
        <div>
          <h1 className="text-center py-2 text-amber-500 text-3xl ">
            please enter your birth date
          </h1>
          <form
            className="xl:flex justify-center text-center py-2"
            onSubmit={calculatetimePassed}
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
                  birthDate.day === "" ||
                  birthDate.day < 1 ||
                  birthDate.day > 31
                    ? "border-2 border-red-500"
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
                  birthDate.year === "" ||
                  birthDate.year < 1933 ||
                  birthDate.year > 2023
                    ? "border-2 border-red-500"
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
                timePassed.weeks !== 0 ? "bg-gray-800" : "bg-amber-500"
              }`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        {mode === "weeks" ? (
          <div>
            <div>
              <Weeks weeks={timePassed.weeksPassed} />
            </div>
          </div>
        ) : mode === "months" ? (
          <Months months={timePassed.monthsPassed} />
        ) : (
          <Years years={timePassed.yearsPassed} />
        )}
      </div>
    </div>
  );
}

export default Home;
