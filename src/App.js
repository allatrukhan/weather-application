import './App.css';
import SearchCityWeather from './components/SearchCityWeather/SearchCityWeather';
import WeatherGalleryCards from './components/WeatherGalleryCards/WeatherGalleryCards';
import CurrentLocationWeather from  './components/CurrentLocationWeather/CurrentLocationWeather';

function App() {
  
  return (
    <div className="App">
        <CurrentLocationWeather/>
        <SearchCityWeather/>
        <WeatherGalleryCards/>
    </div>
  );
}

export default App;
