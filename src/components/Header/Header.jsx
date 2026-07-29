import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import "./Header.css"

const weatherCodes = {
  0: 'Clear',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Overcast',
  45: 'Fog',
  48: 'Depositing rime fog',
  51: 'Drizzle',
  53: 'Moderate drizzle',
  55: 'Dense drizzle',
  56: 'Freezing drizzle',
  57: 'Dense freezing drizzle',
  61: 'Rain',
  63: 'Moderate rain',
  65: 'Heavy rain',
  66: 'Freezing rain',
  67: 'Heavy freezing rain',
  71: 'Snow fall',
  73: 'Snow showers',
  75: 'Heavy snow',
  77: 'Snow grains',
  80: 'Rain showers',
  81: 'Heavy rain showers',
  82: 'Violent rain showers',
  85: 'Snow showers',
  86: 'Heavy snow showers',
  95: 'Thunderstorm',
  96: 'Thunderstorm with hail',
  99: 'Thunderstorm with heavy hail',
}

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [weather, setWeather] = useState({label: 'Loading...', temperature: '--°C', location: 'your area'});

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const fetchWeather = async (latitude, longitude, locationLabel) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=auto`
        );
        const data = await response.json();
        if (data?.current_weather) {
          const code = data.current_weather.weathercode;
          setWeather({
            label: weatherCodes[code] || 'Clear',
            temperature: `${Math.round(data.current_weather.temperature)}°C`,
            location: locationLabel,
          });
        } else {
          setWeather((prev) => ({ ...prev, label: 'Weather unavailable' }));
        }
      } catch (error) {
        setWeather((prev) => ({ ...prev, label: 'Weather unavailable' }));
      }
    };

    const defaultLocation = { latitude: 40.71, longitude: -74.01, label: 'New York' };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(position.coords.latitude, position.coords.longitude, 'Local area');
        },
        () => {
          fetchWeather(defaultLocation.latitude, defaultLocation.longitude, defaultLocation.label);
        },
        { timeout: 5000 }
      );
    } else {
      fetchWeather(defaultLocation.latitude, defaultLocation.longitude, defaultLocation.label);
    }
  }, []);

  const greeting = currentTime.getHours() < 12 ? 'Good morning' : currentTime.getHours() < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <div className='header'>
      <motion.div
        className='header-status'
        data-aos="fade-down"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <span>{greeting}</span>
          <strong>{currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</strong>
        </div>
        <div>
          <span>{weather.location}</span>
          <strong>{weather.label}, {weather.temperature}</strong>
        </div>
      </motion.div>
      <motion.div
        className="header-content"
        data-aos="fade-up"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2>Order your favourite food here</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim unde aperiam, illo assumenda iste optio ea quae cupiditate placeat doloremque illum veritatis eum corporis porro minus sunt quasi voluptatem nemo.</p>
        <motion.button
          type="button"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => document.getElementById('explore-menu')?.scrollIntoView({ behavior: 'smooth' })}
        >
          View Menu
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Header
