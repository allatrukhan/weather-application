import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {locationGetCityWeather} from "../../store/searchSlice";

import './CurrentLocationWeather.css';

const CurrentLocationWeather = () =>{

  const dispatch = useDispatch();

  const [cords, setCords]=useState({});

  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');

  useEffect(()=>{
    dispatch(locationGetCityWeather(cords));
  }, [cords])

  // useEffect(() => {
  //   if(latitude!==''){
  //     if(longitude!==''){
  //   dispatch(locationGetCityWeather(latitude, longitude)) 
  // }
  // }  
  // }, [latitude, longitude])


  const getLocation=()=>{
          navigator.geolocation.getCurrentPosition(function(position) {
            const lat= position.coords.latitude;
            const long = position.coords.longitude;
            const cordsObject = {
              lat, long
            }
           setCords(cordsObject);
  })
}
    // const getLocation = () =>{
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //        setLatitude(position.coords.latitude);
    //        setLongitude(position.coords.longitude);
    //       });)
    // }

      return(
        <div class="current-location">
           <button onClick={getLocation} type="button" class="btn btn-outline-secondary">Current location weather</button> 
        </div>       
      )
}
export default CurrentLocationWeather;  


// <button class="btn btn-outline-secondary" type="button">Secondary action</button>