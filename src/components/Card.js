import React from "react"
import Spinner from "./Spinner"
import '../assets/css/Card.css'
                                    //se visualiza o no los datos
export default function Card({loadingData, showData, weather, forecast}){ //weather: nombre de la ciudad

    const today = new Date()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()
    const date = day + '/' + month + '/' + year

    //almacenar las URLs de los iconos de clima y los datos de las predicciones.
    let url = ""
    let iconUrl = ""
    let iconUrl3hr = ""
    let iconUrl6hr = ""
    let iconUrl9hr = ""
    let iconUrl12hr = ""

    let forecastDate3 = ""
    let forecastDate6 = ""
    let forecastDate9 = ""
    let forecastDate12 = ""

    if(loadingData){
        return  <Spinner />;
    }

    if(showData){
        url = "http://openweathermap.org/img/w/" //URL basee para acceder a los iconos del clima

        iconUrl = url + weather.weather[0].icon + ".png" //accedemos a los icons del clima actul
        //accedemos a los iconos de las predicciones
        iconUrl3hr = url + forecast.list[1].weather[0].icon + ".png"
        iconUrl6hr = url + forecast.list[2].weather[0].icon + ".png"
        iconUrl9hr = url + forecast.list[3].weather[0].icon + ".png"
        iconUrl12hr = url + forecast.list[4].weather[0].icon + ".png"
        //accedemos al dato y extraemos caracteres: formateando fechas y horas de las predicciones "dd/mm/yyyy hh"
        forecastDate3 = forecast.list[1].dt_txt.substring(8, 10) + '/' + forecast.list[1].dt_txt.substring(5, 7) + '/' + forecast.list[1].dt_txt.substring(0, 4) + ' ' +  forecast.list[1].dt_txt.substring(11, 13)
        forecastDate6 = forecast.list[2].dt_txt.substring(8, 10) + '/' + forecast.list[2].dt_txt.substring(5, 7) + '/' + forecast.list[2].dt_txt.substring(0, 4) + ' ' +  forecast.list[2].dt_txt.substring(11, 13)
        forecastDate9 = forecast.list[3].dt_txt.substring(8, 10) + '/' + forecast.list[3].dt_txt.substring(5, 7) + '/' + forecast.list[3].dt_txt.substring(0, 4) + ' ' +  forecast.list[3].dt_txt.substring(11, 13)
        forecastDate12 = forecast.list[4].dt_txt.substring(8, 10) + '/' + forecast.list[4].dt_txt.substring(5, 7) + '/' + forecast.list[4].dt_txt.substring(0, 4) + ' ' +  forecast.list[4].dt_txt.substring(11, 13)
    }


    return (
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-dark text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <h3 className="card-title">{weather.name}</h3>
                                    <p className="card-date">{date}</p>
                                    <h1 className="card-temp">{(weather.main.temp - 273.15).toFixed(1)}ºC</h1> {/* convertir a celsius, restamos la constante kelvin */}
                                    <p className="card-desc"><img src={iconUrl} alt="icon weather"/>{weather.weather[0].description}</p> {/* acceso a la descripcion y logo*/ }
                                    <img src="/images/card.png" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body text-start mt-2">
                                        {/* 0 °C = 273.15 K. */}
                                    <h5 className="card-text">Temperatura máxima: {(weather.main.temp_max - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Temperatura mínima: {(weather.main.temp_min - 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">sensación térmica: {(weather.main.feels_like- 273.15).toFixed(1)}ºC</h5>
                                        <h5 className="card-text">Humedad: {weather.main.humidity}%</h5>
                                        <h5 className="card-text">Velocidad del viento: {weather.wind.speed}m/s</h5>
                                    </div>
                                    <hr />
                                    <div className="row mt-4">
                                        <div className="col">
                                            <p>{forecastDate3}hs</p>
                                            <p className="description"><img src={iconUrl3hr} alt="icon"/>{forecast.list[1].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate6}hs</p>
                                            <p className="description"><img src={iconUrl6hr} alt="icon"/>{forecast.list[2].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate9}hs</p>
                                            <p className="description"><img src={iconUrl9hr} alt="icon"/>{forecast.list[3].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>
                                        <div className="col">
                                            <p>{forecastDate12}hs</p>
                                            <p className="description"><img src={iconUrl12hr} alt="icon"/>{forecast.list[4].weather[0].description}</p>
                                            <p className="temp">{(forecast.list[4].main.temp - 273.15).toFixed(1)}ºC</p>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ):(
                    <h2 className="text-light">No se encuentran resultados, corraborar que sea una ciudad existente.</h2>
                )
            }
        </div>
    )
}