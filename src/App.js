import React, { useState } from 'react'
import Weeks from './Views/Weeks'
import Months from './Views/Months'
import Years from './Views/Years'
import ModeButton from './lib/ModeButton'
import { monthOptions } from './lib/helpers'

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

    const { year, month, day } = birthDate
    if (
      year > 1950 &&
      year < 2023 &&
      day > 1 &&
      day < 31 &&
      year !== '' &&
      day !== '' &&
      month !== ''
    ) {
      const birthdate = new Date(year, month - 1, day)

      const timeDiff = new Date() - birthdate

      const weeksPassed = Math.round(timeDiff / (7 * 24 * 60 * 60 * 1000))

      const monthsPassed = Math.round(timeDiff / (30 * 24 * 60 * 60 * 1000))

      const yearsPassed = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000))

      setTimePassed({ weeksPassed, monthsPassed, yearsPassed })
    }
  }

  const renderModeComponent = () => {
    switch (mode) {
      case 'weeks':
        return <Weeks weeks={timePassed.weeksPassed} />
      case 'months':
        return <Months months={timePassed.monthsPassed} />
      case 'years':
        return <Years years={timePassed.yearsPassed} />
      default:
        return null
    }
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
                className={`w-24 xl:w-40 mb-2 appearance-none border-2 bg-amber-500   text-white h-8 rounded-full text-center mr-2 px-2  ${
                  birthDate.month === ''
                    ? 'border border-red-500 text-gray-400'
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
                className={`mb-2 w-24 xl:w-40 border-2 bg-amber-500 text-white h-8 rounded-full text-center mr-2 px-2 ${
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
                className={`mb-2 w-24 xl:w-40 border-2 bg-amber-500 text-white h-8 rounded-full text-center  mr-2 px-2 ${
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
              className={`xl:border-2  text-white rounded-full  xl:h-8  h-14 w-44 text-xl hover:bg-amber-600 px-6 ${
                timePassed.weeks !== 0 ? 'bg-gray-800' : 'bg-amber-500'
              }`}
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
        {renderModeComponent()}
      </div>
    </div>
  )
}

export default App
