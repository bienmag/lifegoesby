import Months from '../Views/Months'
import Weeks from '../Views/Weeks'
import Years from '../Views/Years'

export const renderModeComponent = (mode, timePassed) => {
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
