import React, { Component } from 'react';
import WeatherList from '../containers/weather_list';
import SeachBar from '../containers/search_bar';
export default class App extends Component {
  render() {
    return (
              <div>
              <SeachBar></SeachBar>
              <WeatherList></WeatherList>
      </div>
    );
  }
}
