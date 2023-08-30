import WeatherCard from "../WeatherCard/WeatherCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllWeatherCards } from "../../store/weatherSlice";


function WeatherGalleryCards(){
    
    const {weatherCards, status, error} = useSelector(state => state['weatherReducer']);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllWeatherCards())
    },[])

    
return(
    <div>
        {status === 'pending' && <h1>Loading</h1>}
        {error && <h2>{error}</h2>}
        {weatherCards.map(weatherCard => <WeatherCard key={weatherCard.id} weatherCard={weatherCard}/> ) }
    </div> 
)
  }
export default WeatherGalleryCards;
