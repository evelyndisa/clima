import React from "react";
import '../assets/css/CardDetails.css'
import { type } from "@testing-library/user-event/dist/type";

export default function CardDetails ({weather, type}){
    const rain = weather.rain?.["1h"] || 0; // Lluvia en mm (última hora)
    const mist = weather.snow?.["1h"] || 0; // Nieve en mm (última hora)
    const precipitacion = rain + mist;

    return(
        <div>
            {type === 'first' && (
                <>
                    <div className="card-details-container">
                        {console.log(weather.main.humidity + '%: humidity')}
                        <p>Humidity <img alt="icon"/></p>
                        <p>{weather.main.humidity + '%'}</p>
                    </div>
                    <div className="card-details-container">
                        {console.log(weather.main.pressure + ' hPa: humidity')}
                        <p>Pressure <img alt="icon"/></p>
                        <p>{weather.main.pressure + ' hPa'}</p>
                    </div>
                </>
            )}
            {type === 'second' &&(
                <>
                    <div className="card-details-container">
                        {console.log(weather.wind.speed + ' m/s: wind')}
                        <p>Wind <img alt="icon"/></p>
                        <p>{weather.wind.speed + ' m/s'}</p>
                    </div>
                    <div className="card-details-container">
                        {console.log(precipitacion + ' mm: precipitation')}
                        <p>Precipitation <img alt="icon" /></p>
                        <p>{precipitacion + ' mm'}</p>
                    </div>
                </>
            )}
        </div>
    )
}