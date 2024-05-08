import { useState, useEffect } from "react";

const useWeatherData = (city ) => {
  const [weatherData, setWeatherData] = useState(null);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric";
  const API_KEY = "9d45261bda5cb03e32a634d21dfa1a14";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}`);
        if (!res.ok) {
          throw new Error("Failed to fetch weather data");
        }
        const data = await res.json();
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
        alert("Failed to fetch weather data. Please try again later.");
      }
    };

    if (city !== "") {
      fetchData();
    }
  }, [city]);

  return weatherData;
};

export default useWeatherData;
