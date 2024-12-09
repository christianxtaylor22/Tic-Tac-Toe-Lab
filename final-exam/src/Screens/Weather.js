import React from 'react';
import Header from '../Weather/UI/Header';
import SearchBar from '../Weather/UI/SearchBar';
import WeatherHUD from '../Weather/UI/WeatherHUD';
import WeatherContext from '../Weather/API/WeatherContext.js';
import {useState, useEffect} from 'react';
import { fetchWeather } from '../Weather/API/WeatherApi.js';

function Weather() {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [city, setCity] = useState("");
  
    useEffect(() => {
      if (city.trim()) {
        setLoading(true);
        setError(null);
        fetchWeather(city)
          .then((data) => {
            setWeatherData(data);
          })
          .catch((err) => {
            setError(err.message);
            setWeatherData(null); 
          })
          .finally(() => {
            setLoading(false); 
          });
      }
    }, [city]);
  
     
      const handleSearch = (cityName) => {
        setCity(cityName); 
      };
  
    return (
      <WeatherContext.Provider
        value = {{
          weatherData,
          loading,
          error,
          handleSearch, 
        }}>
          <Header />
          <SearchBar/>
          <WeatherHUD/>
      </WeatherContext.Provider>
    );
  }

export default Weather;
