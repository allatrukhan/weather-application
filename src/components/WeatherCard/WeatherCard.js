import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteCard, refreshCard, weatherForecast } from '../../store/searchSlice';

import './WeatherCard.css';


function WeatherCard ({weatherData}){
    
    const dispatch = useDispatch();

    const icon = weatherData.weather[0].icon;
    
    const refresh = (name) => {
        dispatch(refreshCard(name));
    }

    return (
        <div className="main">
            <div className="flex-top">
                <p>{weatherData.name}</p>
                    <div className="button-box">
                        <button type="button" class="btn btn-outline-secondary" onClick={()=> dispatch(weatherForecast(weatherData.name))
                        }>5 days forecast</button>
                        <button type="buttton" className="btn btn-outline-secondary" onClick={()=>refresh(weatherData.name)}>Refrech card</button>
                        <button type="button" class="btn btn-outline-secondary" onClick={()=> dispatch(deleteCard(weatherData))
                        }>Close</button> 
                    </div>
            </div>

            <div className="flex">
                <p className="day">{moment().format('dddd')}, <span>{moment().format('LL')}</span></p>
                <p className="description">{weatherData.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='weather-icon'/>
            </div>

            <div className="flex">
                <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
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