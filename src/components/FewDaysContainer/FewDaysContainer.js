// import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux/es/hooks/useSelector";
import WeatherFewDaysForecastCard from "../WeatherFewDaysForecastCard/WeatherFewDaysForecastCard";
import './FewDaysContainer.css';

function FewDaysContainer(){

    const {dailyForecast} = useSelector(state => state['searchCityWeatherReduser']);
    const arr=dailyForecast[0];
    
    // const [data, setData]=useState([]);

    // useEffect(()=>{
    //     if(data.list){
    //         const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"));
    //         const dailyNewData = dailyData.json();
    //         console.log(dailyData);
    //         setData(dailyNewData);
    //         console.log(dailyNewData);
    //     }
    // },[data.list])

    return (
        <div class="few-days-container">
            {arr.map(el => <WeatherFewDaysForecastCard key={el.id} weatherForecastData={el} city={dailyForecast[1]}/> ) } 
        </div>
        
    )
}

export default FewDaysContainer;