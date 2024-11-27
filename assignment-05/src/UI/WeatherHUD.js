import { useContext } from "react";
import WeatherContext from "../API/WeatherContext";
import styles from './WeatherHUD.module.css'; 

function WeatherHUD() {
  

  const { weatherData, loading, error } = useContext(WeatherContext);

  if (loading) return <div className={styles.container}><p>Loading...</p></div>;
  if (error) return <div className={styles.container}><p style = {{color: 'red'}}>{error}</p></div>
  if (!weatherData || !weatherData.main || !weatherData.weather) return <div className={styles.container}><p>No weather data available</p></div>;


  const temperatureInFahrenheit = (((weatherData.main.temp - 273.15) * 1.8) + 32).toFixed(2);

  return (
    <div className={styles.container}>
      <h1>{weatherData.name}</h1>
      <p>Temperature: {temperatureInFahrenheit}°F</p>
      <p>Condition: {weatherData.weather[0]?.description || "No description available"}</p>
    </div>
  );
}

export default WeatherHUD;
