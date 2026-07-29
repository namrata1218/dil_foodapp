import React, { useState } from 'react'
import "./Home.css";
import Header from '../../components/Header/Header';
import Exploremenu from '../../components/Exploremenu/Exploremenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const filterOptions = [
  { key: 'veg', label: '✔ Veg' },
  { key: 'nonVeg', label: '✔ Non Veg' },
  { key: 'under200', label: '✔ Under ₹200' },
  { key: 'rating4', label: '✔ Rating 4+' },
  { key: 'fastDelivery', label: '✔ Fast Delivery' },
  { key: 'chinese', label: '✔ Chinese' },
  { key: 'italian', label: '✔ Italian' },
  { key: 'northIndian', label: '✔ North Indian' },
];

const Home = () => {
    const [category, setCategory] = useState("All");
    const [filters, setFilters] = useState({
      veg: false,
      nonVeg: false,
      under200: false,
      rating4: false,
      fastDelivery: false,
      chinese: false,
      italian: false,
      northIndian: false,
    });

    const toggleFilter = (key) => {
      setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const clearFilters = () => {
      setFilters({
        veg: false,
        nonVeg: false,
        under200: false,
        rating4: false,
        fastDelivery: false,
        chinese: false,
        italian: false,
        northIndian: false,
      });
    };

  return (
    <div>
      <Header/>
      <Exploremenu category={category} setCategory={setCategory}/>
      <div className="home-filters">
        <div className="home-filters-list">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              type="button"
              className={`filter-chip ${filters[option.key] ? 'active' : ''}`}
              onClick={() => toggleFilter(option.key)}
            >
              {option.label}
            </button>
          ))}
        </div>
        <button type="button" className="clear-filters" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
      <FoodDisplay category={category} filters={filters}/>
      <AppDownload/>
    </div>
  )
}

export default Home
