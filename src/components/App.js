import React from 'react'
import DailyForecast from '../containers/DailyForecastContainer'

const App = () => (
  <DailyForecast city={'London'} countryISOCode={'GB'} numOfDays={5} />
)

export default App
