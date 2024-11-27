import {useState, useEffect} from 'react';
import WeatherContext from './API/WeatherContext.js';
import WeatherHUD from './UI/WeatherHUD.js';
import SearchBar from './UI/SearchBar.js';
import Header from './UI/Header.js';
import { fetchWeather } from './API/WeatherApi.js';

function App() {
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

export default App;
