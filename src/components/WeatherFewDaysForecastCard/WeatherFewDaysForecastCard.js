

import './WeatherFewDaysForecastCard.css';


function WeatherFewDaysForecastCard ({weatherForecastData, city}){

    const icon = weatherForecastData.weather[0].icon;

    return (
        <div className="main">
            <div className="flex-top">
                <p>{city}</p>
            </div>

            <div className="flex">
            <p className="day">Date: {weatherForecastData.dt_txt.slice(0, 10)}</p>
        
                {/* <p className="day">{moment().add(1, 'days').format('dddd').toString()}, <span>{moment().add(1, 'days').format('LL').toString()}</span></p> */}
            </div>

            <div className="flex">
                <p className="description">{weatherForecastData.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/w/${icon}.png`} alt='weather-icon'/>
            </div>

            <div className="flex">
                <p className="temp">Temperature: {weatherForecastData.main.temp} &deg;C</p>
                <p className="temp">Humidity: {weatherForecastData.main.humidity} %</p>
            </div>
        </div>
    )
}

export default WeatherFewDaysForecastCard;