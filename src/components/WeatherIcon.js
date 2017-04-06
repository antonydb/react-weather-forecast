import React, { PropTypes } from 'react';

const WeatherIcon = ({ icon, description }) => (
  <img
    src={`http://openweathermap.org/img/w/${icon}.png`}
    alt={description}
    width="50"
    height="50"
  />
)

WeatherIcon.propTypes = {
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
}

export default WeatherIcon
