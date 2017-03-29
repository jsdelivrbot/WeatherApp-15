import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    console.log(temps);
    return (
      <tr key={cityName}>
        <td>{cityName}</td>
        <td>
          <Sparklines data={temps}  width={180} height={120}>
            <SparklinesLine color="blue" />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Preasuer</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) { // { weather } === state.weather
  return { weather }; // === {weather:weather}
}

export default connect(mapStateToProps)(WeatherList);
