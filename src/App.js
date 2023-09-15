import React, { useState } from 'react'
import ModeButton from './lib/ModeButton'
import { calculate, monthOptions } from './lib/helpers'
import { renderModeComponent } from './lib/RenderMode'
import { validateBirthdate } from './lib/Validator'

function App() {
  const [mode, setMode] = useState('weeks')
  const [birthDate, setBirthDate] = useState({ month: '', day: '', year: '' })
  const [timePassed, setTimePassed] = useState({
    weeks: 0,
    months: 0,
    years: 0,
  })

  function calculatetimePassed(e) {
    e.preventDefault()
    const errors = validateBirthdate(birthDate)
    if (errors.length) {
      //print the errors to the user
      console.log('errors', errors)
      return
    }

    const { year, month, day } = birthDate
    const birthdate = new Date(year, month - 1, day)

    const timeDiff = new Date() - birthdate

    const { weeksPassed, monthsPassed, yearsPassed } = calculate(timeDiff)
    setTimePassed({ weeksPassed, monthsPassed, yearsPassed })
  }

  return (
    <div className="h-full font-mono">
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
                className={`w-24 xl:w-40 mb-2 appearance-none outline-amber-800  hover:bg-amber-600 border-2 bg-amber-500   text-white h-8 rounded-full text-center mr-2 px-2  ${
                  birthDate.month === ''
                    ? 'border border-red-500 text-gray-300'
                    : ''
                }`}
                type="number"
                placeholder="mm"
                value={birthDate.month}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, month: e.target.value })
                }
              >
                {monthOptions.map((month) => (
                  <option key={month.value} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </select>

              <input
                className={`mb-2 w-24 xl:w-40 border-2 outline-amber-800 placeholder:text-gray-300 hover:bg-amber-600 bg-amber-500 text-white h-8 rounded-full text-center mr-2 px-2 ${
                  birthDate.day === '' ||
                  birthDate.day < 1 ||
                  birthDate.day > 31
                    ? 'border-2 border-red-500'
                    : ''
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
                className={`mb-2 w-24 xl:w-40 border-2 bg-amber-500 placeholder:text-gray-300 hover:bg-amber-600  outline-amber-800 text-white h-8 rounded-full text-center  mr-2 px-2 ${
                  birthDate.year === '' ||
                  birthDate.year < 1933 ||
                  birthDate.year > 2023
                    ? 'border-2 border-red-500'
                    : ''
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
              className={`xl:border-2  text-white rounded-full  xl:h-8  h-14 w-44 text-xl hover:bg-amber-600 px-6 bg-amber-500`}
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
        {renderModeComponent(mode, timePassed)}
      </div>
    </div>
  )
}

export default App
