function CurrentLocationWeather({lat, long}){
    const getLocation = () =>{
        navigator.geolocation.getCurrentPosition(function(position) {
           lat(position.coords.latitude);
           long(position.coords.longitude);
          });
    }

      return(
        <div>
           <button onClick={getLocation} type="button" class="open-current-location-btn">Current location weather</button> 
        </div>       
      )
}
export default CurrentLocationWeather;  