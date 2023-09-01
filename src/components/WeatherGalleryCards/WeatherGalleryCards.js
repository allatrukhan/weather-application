import WeatherCard from "../WeatherCard/WeatherCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllWeatherCards } from "../../store/weatherSlice";


function WeatherGalleryCards(){
    
    const {searchObject} = useSelector(state => state['searchCityWeatherReduser']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllWeatherCards());

    },[searchObject])

    
return(
    <div>
        {/* {status === 'pending' && <h1>Loading</h1>} */}
        {/* {error && <h2>{error}</h2>} */}
        {/* {weatherCards.map(weatherCard => <WeatherCard key={weatherCard.id} weatherCard={weatherCard}/> ) } */}
        {/* {weatherCards.map(weatherCard => <WeatherCard weatherData={weatherCard}/> ) } */}
        {(searchObject.main!==undefined)?<WeatherCard weatherData={searchObject}/>:(<h1>Try one's more</h1>)}
    </div> 
)
  }
export default WeatherGalleryCards;
