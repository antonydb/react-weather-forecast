import React, { Component, PropTypes } from 'react'
import DailyForecast from '../components/DailyForecast'
import { getDailyForecast } from '../api/weather'
import { normaliseAPIData } from '../helpers/utils'

class DailyForecastContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      hasErrored: false
    }
  }

  componentWillMount() {
    this.makeRequest(
      this.props.city,
      this.props.countryISOCode,
      this.props.numOfDays
    )
  }

  componentWillReceiveProps(nextProps) {
    this.makeRequest(
      nextProps.city,
      nextProps.countryISOCode,
      nextProps.numOfDays
    )
  }

  makeRequest(city, countryISOCode, numOfDays) {
    getDailyForecast(city, countryISOCode, numOfDays)
      .then((data) => {
        this.setState({
          isLoading: false,
          foreacastData: normaliseAPIData(data)
        })
      })
      .catch(() => {
        this.setState({
          isLoading: false,
          hasErrored: true
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return <p>Loading. Please wait</p>
    }

    return this.state.hasErrored ?
      <p>Something went wrong</p> :
      <DailyForecast items={this.state.foreacastData} />
  }
}

DailyForecastContainer.propTypes = {
  city: PropTypes.string.isRequired,
  countryISOCode: PropTypes.string.isRequired,
  numOfDays: PropTypes.number.isRequired
}


export default DailyForecastContainer
