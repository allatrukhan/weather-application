import React from 'react';

import SearchCityWeather from '../components/SearchCityWeather/SearchCityWeather';
import WeatherGalleryCards from '../components/WeatherGalleryCards/WeatherGalleryCards';
import CurrentLocationWeather from  '../components/CurrentLocationWeather/CurrentLocationWeather';
import FewDaysContainer from '../components/FewDaysContainer/FewDaysContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function Home(){
    
    return (
        <div class="home-page">      
            <Header/>
            <CurrentLocationWeather/>
            <SearchCityWeather/>
            <WeatherGalleryCards/>
            <FewDaysContainer/>
            <Footer/> 
        </div>
    );         
}
export default Home;


