export const monthOptions = [
  { value: '', label: 'mm' },
  { value: '1', label: 'january' },
  { value: '2', label: 'february' },
  { value: '3', label: 'march' },
  { value: '4', label: 'april' },
  { value: '5', label: 'may' },
  { value: '6', label: 'june' },
  { value: '7', label: 'july' },
  { value: '8', label: 'august' },
  { value: '9', label: 'september' },
  { value: '10', label: 'october' },
  { value: '11', label: 'november' },
  { value: '12', label: 'december' },
]

export function calculate(timeDiff) {
  const weeksPassed = Math.round(timeDiff / (7 * 24 * 60 * 60 * 1000))

  const monthsPassed = Math.round(timeDiff / (30 * 24 * 60 * 60 * 1000))

  const yearsPassed = Math.floor(timeDiff / (365 * 24 * 60 * 60 * 1000))

  return { weeksPassed, monthsPassed, yearsPassed }
}
