import React, { useState } from 'react'
import ModeButton from './lib/ModeButton'
import { calculate, monthOptions } from './lib/helpers'
import { renderModeComponent } from './lib/RenderMode'
import { validateBirthdate } from './lib/Validator'

function Input({ onChange, value, placeholder, birthDate }) {
  return (
    <input
      className={`mb-2 w-24 xl:w-40  outline-none placeholder:text-amber-500  bg-[#FCE5C2] text-amber-500 h-8 rounded-full text-center mr-2 px-2 `}
      type="text"
      inputMode="numeric"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

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
    <div className="h-full font-mono bg-gradient">
      <div className="flex flex-col justify-center pt-12" key={timePassed}>
        <h1 className="text-center py-2 text-black xl:text-3xl ">
          Please enter your birth date:
        </h1>
        <div>
          <form
            className="xl:flex justify-center text-center py-2 text-sm"
            onSubmit={calculatetimePassed}
          >
            <div className="flex justify-center text-center">
              <select
                className={`w-24 xl:w-40 mb-2  appearance-none outline-none bg-[#FCE5C2] text-amber-500 h-8 rounded-full text-center mr-2 px-2`}
                type="number"
                value={birthDate.month}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, month: e.target.value })
                }
              >
                {monthOptions.map((month) => (
                  <option
                    key={month.value}
                    value={month.value}
                    className="text-center bg-black"
                    style={{ textAlignLast: 'center' }}
                  >
                    {month.label}
                  </option>
                ))}
              </select>

              <Input
                placeholder="dd"
                birthDate={birthDate}
                value={birthDate.day}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, day: e.target.value })
                }
              />

              <Input
                placeholder="yyyy"
                birthDate={birthDate}
                value={birthDate.year}
                onChange={(e) =>
                  setBirthDate({ ...birthDate, year: e.target.value })
                }
              />
            </div>
            <button
              className={`xl:border-2 shadow-xl text-white rounded-full  xl:h-8  h-8 w-44 text-md hover:bg-amber-600 px-6 bg-amber-500`}
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="flex justify-center py-4">
          <ModeButton
            mode="weeks"
            selectedMode={mode}
            setMode={setMode}
            label="Weeks"
          />
          <ModeButton
            mode="months"
            selectedMode={mode}
            setMode={setMode}
            label="Months"
          />
          <ModeButton
            mode="years"
            selectedMode={mode}
            setMode={setMode}
            label="Years"
          />
        </div>
        {renderModeComponent(mode, timePassed)}
      </div>
    </div>
  )
}

export default App
