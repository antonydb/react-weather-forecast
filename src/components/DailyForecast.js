import React, { PropTypes } from 'react'
import WeatherIcon from './WeatherIcon'
import Temperature from './Temperature'
import './Forecast.css'

const DailyForecast = ({ items }) => (
  <div className="ForecastItems">
    {
      items.map(item => <DailyForecastItem key={item.id} {...item} />)
    }
  </div>
)

const DailyForecastItem = ({ description, icon, day, date, min, max }) => (
  <div className="ForecastItem">
    <div>
      <time>{day}, {date}</time>
    </div>
    <div className="ForecastItem-temp">
      <Temperature temperature={max} />
      {' / '}
      <Temperature temperature={min} />
    </div>
    <div className="ForecastItem-media">
      <WeatherIcon
        icon={icon}
        description={description}
      />
    </div>
    <div className="ForecastItem-description">{description}</div>
  </div>
)

const DailyForecasteItemPropType = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

DailyForecast.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(DailyForecasteItemPropType).isRequired).isRequired
}

DailyForecastItem.propTypes = DailyForecasteItemPropType

export default DailyForecast
