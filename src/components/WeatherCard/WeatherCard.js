import moment from 'moment';
import { Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/weatherSlice';
import { useSelector } from "react-redux/es/hooks/useSelector";

function WeatherCard ({weatherCard: {id, weatherData}}){
    
    const dispatch = useDispatch();

    const {info} = useSelector(state => state['weatherReducer']);

    const icon = weatherData.weather[0].icon;
    
    const refresh = () => {
        window.location.reload();
    }

    return (
        <div className="main">
            <h1>{info}</h1>
            <div className="top">
                <p className="header">{weatherData.name}</p>
                <button type="button" class="close-current-location-btn" onClick={()=>dispatch(deleteCard({id}))}>Close</button> 
                <Button className="refresh-button" inverted color='black' circular icon='refresh' onClick={refresh} />
            </div>

            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='weather-icon'/>
            </div>

            <div className="flex">
                <p className="temp">Temprature: {weatherData.main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherData.main.humidity} %</p>
            </div>

            <div className="flex">
                <p className="sunrise-sunset">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
                <p className="sunrise-sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            </div>
        </div>
    )
}

export default WeatherCard;