import React from "react";
import WeatherSearch from "./comonents/weatherSearch";

function App(){
    return(
        <div className="App">
            <header>
                <h1>weather forecasting App</h1>
                <WeatherSearch/>
            </header>
        </div>
    );
}