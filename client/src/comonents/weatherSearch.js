import React, {useState} from "react";

function WeatherSearch(){
    const[city, setCity] = useState('');

    function handleSearch(e){
        e.preventDefault();
    };

    return(
        <form onSubmit={handleSearch}>
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter your city name"
            />

            <button type="submit">search</button>

        </form>
    );
};

export default WeatherSearch;

