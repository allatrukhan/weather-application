import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {searchGetCityWeather} from "../../store/searchSlice";


import './SearchCityWeather.css';


const SearchCityWeather = () =>{

    const dispatch = useDispatch();

    // const [searchValue, setSearchValue] = useState('');
    // useEffect(() => {
    //   dispatch(searchGetCityWeather(searchValue))   
    // }, [searchValue])

    function onSubmit(event){
        event.preventDefault();
        // setSearchValue();
        dispatch(searchGetCityWeather(event.target.name.value))   
        event.target.reset();
    }

    return (
        <div class="search">
      <form onSubmit={onSubmit} class="search-container">
          <input type="text" name="name"/> 
          <input type="submit" value="Search" />  
      </form>
    </div>
    );
  }

  export default SearchCityWeather;
