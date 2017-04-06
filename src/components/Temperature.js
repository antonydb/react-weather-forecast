import React, { PropTypes } from 'react'

const Temperature = ({ temperature }) => (
  <span className="Temperature">{temperature} °</span>
)

Temperature.propTypes = {
  temperature: PropTypes.number.isRequired
}

export default Temperature
