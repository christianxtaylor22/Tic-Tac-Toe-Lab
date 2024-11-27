import React, { useState, useContext } from 'react';
import WeatherContext from '../API/WeatherContext';

const SearchBar = () => {
  const [city, setCity] = useState("");
  const { handleSearch } = useContext(WeatherContext);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearchClick = () => {
    if (city.trim()) {
      handleSearch(city.trim()); 
      setCity(""); 
    }
  };

  const containerStyle = {
    display: 'flex',    
    justifyContent: 'center', 
    alignItems: 'center',     
    marginTop: '20px',      
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    width: '200px',
    marginRight: '10px',
  };

  const buttonStyle = {
    padding: '12px 20px',
    fontSize: '16px',
    backgroundColor: '#1fd655',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleInputChange} 
        style={inputStyle} 
      />
      <button onClick={handleSearchClick} style={buttonStyle}>Search</button> 
      {}
    </div>
  );
};

export default SearchBar;
