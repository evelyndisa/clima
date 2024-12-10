import React from "react"
import Spinner from "./Spinner"
import '../assets/css/Card.css'
import CustomImage from "./CustomImage"

export default function Card({loadingData, showData, weather, forecast}){ //weather: nombre de la ciudad

    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = day + '/' + month + '/' + year

    if(loadingData){
        return  <Spinner />;
    }

    const capitalized = (sentence) => {
        return !sentence ? '' : sentence.charAt(0).toUpperCase() + sentence.slice(1);
      }


    return (
        <>
            <div>
                { showData === true ? (
                    <div>
                        {console.log(weather.weather[0].description, ': description')}
                        <div className="weather">
                            <CustomImage weather={weather}/>
                            <h3 className="title-city">{weather.name}</h3>
                            <p className="date-card">{date}</p>
                            <h2 className="temp-card">{(weather.main.temp - 273.15).toFixed(1)}ºC</h2>
                            <p className="description-card" >{capitalized(weather.weather[0].description)}</p>
                        </div>
                        <hr />
                        <div className="row mt-4">
                            {[1, 2, 3, 4].map((index) => {
                              const forecastData = forecast.list[index];
                              const forecastHour = parseInt(forecastData.dt_txt.substring(11, 13)); // Hora del pronóstico
                              return (
                                <div className="col" key={index}>
                                  <p>{forecastData.dt_txt.substring(8, 10)}/{forecastData.dt_txt.substring(5, 7)} {forecastHour}hs</p>
                                  <CustomImage weather={forecastData} hour={forecastHour} className='custom-forecast'/>
                                  <p className="temp">{(forecastData.main.temp - 273.15).toFixed(1)}ºC</p>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                ):( 
                    (!weather) ? <h2 className="text-light">No se encuentran resultados, corroborar que sea una ciudad existente.</h2> : 'Ingrese una ciudad'
                    )}
            </div>
        </>
    )
}