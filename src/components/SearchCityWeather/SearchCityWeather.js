import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {searchGetCityWeather} from "../../store/searchCityWeatherSlice";

function SearchCityWeather() {

    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState('');

    useEffect(() => {
      dispatch(searchGetCityWeather(searchValue))
  }, [searchValue])

    return (
        <div className="form">
            <form className="search_form">
                    <input
                        type="text"
                        placeholder="Search city..."
                        className="search_input"
                        onChange={(event => setSearchValue(event.target.value))}
                    />
                </form>
            </div>
    );
  }

  export default SearchCityWeather;
