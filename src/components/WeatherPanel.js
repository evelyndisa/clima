import React, {useState} from 'react';
import Form from './Form';
import Card from './Card';

export default function WeatherPanel(){

    //url de la API par obtener los datos
    let urlWeather = "https://api.openweathermap.org/data/2.5/weather?appid=027be95075438873015fce8952faa80e&lang=es";
    let cityUrl = "&q="; //parametro para añadir la ciudad a la URL

    let urlForecast = "https://api.openweathermap.org/data/2.5/forecast?appid=027be95075438873015fce8952faa80e&lang=es"

    const [weather, setWeather] = useState([]); //almacenar los datos del clima actual
    const [forecast, setForecast] = useState([]); //almacenar los datos del pronostico
    const [loading, setLoading] = useState(false); //spinner de carga
    const [show, setShow] = useState(false); //mostrar los datos cuando esten disponibles
    const [location, setLocation] = useState(""); //almacenar la ciudad ingresada

    //obtenemos la ciudad y hacemos solicitudes a la API
    const getLocation = async(loc) => {
        setLoading(true); //inica el estado de carga
        setLocation(loc); //ciudad

        // URL completa para obtener los datos del clima actual
        urlWeather = urlWeather + cityUrl + loc;
        // solicitud
        await fetch(urlWeather).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((weatherData) =>{
            console.log(weatherData);
            setWeather(weatherData); //estabece los datos del clima en el state
        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false); //no mostrar datos si hubo error
        });


        //URL complet para obtener los dtos de la prediccion del clima
        urlForecast = urlForecast + cityUrl + loc;
        //solicitud
        await fetch(urlForecast).then((response) =>{
            if(!response.ok) throw {response}
            return response.json();
        }).then((forecastData) =>{
            console.log(forecastData);
            setForecast(forecastData); //estabece los datos del pronostico en el state

            setLoading(false);
            setShow(true);

        }).catch(error =>{
            console.log(error);
            setLoading(false);
            setShow(false);
        });
    }

    return(
        <React.Fragment>
    
            <Form
                newLocation = {getLocation}
            />
            <Card
                showData = {show} //mostrar
                loadingData = {loading} //visuaizar spinner
                weather = {weather} //datos del tiempo
                forecast = {forecast} //datos de la prediccion
            />

        </React.Fragment>
    );
}