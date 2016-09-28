import React,{Component} from 'react';
import {connect} from 'react-redux';
import RenderCard from './rendercard';
import Map from '../components/map';
import Chart from '../Components/chart';
export class WeatherList extends Component {
    renderWeather(cityData) {
        const cityName=cityData.city.name;
        const temp=_.map(cityData.list.map(weather=>weather.main.temp), (temp)=>temp -273);
        const pressure=cityData.list.map(weather=>weather.main.pressure);
        const humidity=cityData.list.map(weather=>weather.main.humidity);
        // console.log(temp,cityName);
        // console.log(cityData);
        return (
                <tr key={cityName}>
                <td><Map class="cmap" name={name} lng={cityData.city.coord.lon} lat={cityData.city.coord.lat} /></td>
                <td>
                    <RenderCard name={'Temprature'} data={temp} unit={'°C'} color={'green'}  />
                </td>
                <td>
                    <RenderCard name={'Pressure'} data={pressure} unit={'hPa'} color={'red'}  />
                </td>
                <td>
                    <RenderCard name={'Humidity'} data={humidity} unit={'%'} color={'purple'}  />
                    
                </td>
                </tr>
        );
    }
    render() {
        return (
            <div>
                <table className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>City</th>
                            <th>Temprature(°C)</th>
                            <th>Pressure(hPa)</th>
                            <th>humidity(%)</th></tr></thead>
                            <tbody >
                                {this.props.weather.map(this.renderWeather)}
                            </tbody>
                </table>
            </div>
        );
    }
}

         function mapStateToProps({weather}) {
         return {weather};
    }
export default connect(mapStateToProps)(WeatherList);