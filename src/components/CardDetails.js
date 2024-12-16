import React from "react";
import '../assets/css/CardDetails.css'

export default function CardDetails ({weather, type}){
    const rain = weather.rain?.["1h"] || 0; // Lluvia en mm (última hora)
    const mist = weather.snow?.["1h"] || 0; // Nieve en mm (última hora)
    const precipitacion = rain + mist;

    return(
        <div>
            {type === 'first' && (
                <div className="card-details">
                    <div className="card-details-container">
                        {console.log(weather.main.humidity + '%: humidity')}
                        <p className="card-details-title">Humidity <img src="/images/cardDetails/humidity.png" alt="icon"/></p>
                        <p className="card-details-description">{weather.main.humidity + '%'}</p>
                    </div>
                    <div className="card-details-container">
                        {console.log(weather.main.pressure + ' hPa: humidity')}
                        <p className="card-details-title">Pressure <img src="/images/cardDetails/pressure.png" alt="icon pressure"/></p>
                        <p className="card-details-description">{weather.main.pressure + ' hPa'}</p>
                    </div>
                </div>
            )}
            {type === 'second' &&(
                <div className="card-details">
                    <div className="card-details-container">
                        {console.log(weather.wind.speed + ' m/s: wind')}
                        <p className="card-details-title">Wind <img src="/images/cardDetails/wind.png" alt="icon"/></p>
                        <p className="card-details-description">{weather.wind.speed + ' m/s'}</p>
                    </div>
                    <div className="card-details-container">
                        {console.log(precipitacion + ' mm: precipitation')}
                        <p className="card-details-title">Precipitation <img src="/images/cardDetails/precipitation.png" alt="icon" /></p>
                        <p className="card-details-description">{precipitacion + ' mm'}</p>
                    </div>
                </div>
            )}
        </div>
    )
}