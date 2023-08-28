import './App.css';
// import {useState} from 'react';
import SearchCityWeather from './components/SearchCityWeather/SearchCityWeather';
import WeatherGalleryCards from './components/WeatherGalleryCards/WeatherGalleryCards';
// import CurrentLocationWeather from  './components/CurrentLocationWeather/CurrentLocationWeather';

function App() {
  
  // const [searchStr, setSearchStr]=useState('');
  // const [currentLat, setCurrentLat]=useState(null);
  // const [currentLong, setCurrentLong]=useState(null);
  
  // function currentLatitude(lat){
  //   setCurrentLat(lat);
  // }
  
  // function currentLongitude(long){
  //   setCurrentLong(long);
  // }

  // function onSearchClick(str){
  //   setSearchStr(str);
  // }
  
  return (
    <div className="App">
        {/* <CurrentLocationWeather lat={currentLatitude} long={currentLongitude}/> */}
        <SearchCityWeather/>
        <WeatherGalleryCards/>
    </div>
  );
}

export default App;
