const kelvinToCelsius = kelvin => parseInt(kelvin - 273.15, 10)

const daysOfTheWeek = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
]

const monthsOfTheYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

const timestampToDayAsString = (timestamp) => {
  const dayIndex = new Date(timestamp * 1000).getDay()
  return daysOfTheWeek[dayIndex].slice(0, 3)
}

const timestampToDateAsString = (timestamp) => {
  const dateObj = new Date(timestamp * 1000)
  return `${dateObj.getDate()} ${monthsOfTheYear[dateObj.getMonth()].slice(0, 3)}`
}

export const normaliseAPIData = (list) => {
  return list.map(dayItem => ({
    id: dayItem.dt,
    description: dayItem.weather[0].main,
    icon: dayItem.weather[0].icon,
    day: timestampToDayAsString(dayItem.dt),
    date: timestampToDateAsString(dayItem.dt),
    max: kelvinToCelsius(dayItem.temp.max),
    min: kelvinToCelsius(dayItem.temp.min)
  }))
}
