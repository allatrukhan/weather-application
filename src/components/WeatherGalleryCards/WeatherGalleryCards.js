import WeatherCard from "../WeatherCard/WeatherCard";
import { useSelector } from "react-redux/es/hooks/useSelector";

import './WeatherGalleryCards.css';

function WeatherGalleryCards(){
    
    const {searchObject} = useSelector(state => state['searchCityWeatherReduser']);
    
return(
    <div class="gallery">
        {/* {status === 'pending' && <h1>Loading</h1>} */}
        {/* {error && <h2>{error}</h2>} */}
        {searchObject.map(el => <WeatherCard key={el.id} weatherData={el}/> ) }
        {/* {weatherCards.map(weatherCard => <WeatherCard weatherData={weatherCard}/> ) } */}
        {/* {(searchObject.main!==undefined)?<WeatherCard weatherData={searchObject}/>:(<h1>Try one's more</h1>)} */}
    </div> 
)
  }
export default WeatherGalleryCards;
