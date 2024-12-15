import React from "react";

export default function CustomImage({ weather, className }) {
  const today = new Date();
  const hour = today.getHours();

  let icon = '';
  let url = 'http://openweathermap.org/img/w/'; // URL base para acceder a los iconos del clima
  let iconUrl = '';
  
  const clearSkyDay = '/images/icons/clear-sky-day.png';
  const clearSkyNight = '/images/icons/clear-sky-night.png';
  const fewCloudsDay = '/images/icons/few-clouds-day.png';
  const fewCloudsNight = '/images/icons/few-clouds-night.png';
  const scatteredClouds = '/images/icons/scattered-clouds.png';
  const brokenClouds = '/images/icons/broken-clouds.png';
  const showerRain = '/images/icons/shower-rain.png';
  const rain = '/images/icons/rain.png';
  const heavyRain = '/images/icons/thunderstorm.png';
  const thunderstorm = '/images/icons/thunderstorm-rain.png';
  const snow = '/images/icons/snow.png';
  const mist = '/images/icons/mist.png';

  if (weather && weather.weather) {
    icon = weather.weather[0].description;
    iconUrl = url + weather.weather[0].icon + '.png'; // por defecto
  }

  return (
    <img
      src={
        icon === 'nubes' || icon === 'nubes dispersas'
          ? scatteredClouds
          : icon === 'algo de nubes'
          ? hour >= 6 && hour <= 19
            ? fewCloudsDay
            : fewCloudsNight
          : icon === 'cielo claro'
          ? hour >= 6 && hour <= 19
            ? clearSkyDay
            : clearSkyNight
          : icon === 'muy nuboso'
          ? brokenClouds
          : icon === 'lluvia ligera'
          ? showerRain
          : icon === 'lluvia moderada'
          ? rain
          : icon === 'nevada ligera'
          ? snow
          : icon === 'lluvia de gran intensidad'
          ? heavyRain
          : icon === 'neblina'
          ? mist
          : icon === 'tormenta con lluvia'
          ? thunderstorm
          : iconUrl
      }
      alt="icon weather"
      className={`icon-weather ${className}`}
    />
  );
}
