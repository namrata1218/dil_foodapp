import React, { useContext } from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../Fooditem/Fooditem'


const FoodDisplay = ({category, filters}) => {

    const {food_list, searchTerm}=useContext(StoreContext);
    const searchValue = searchTerm.trim().toLowerCase();
    const filteredFood = food_list.filter((item) => {
      const itemRating = parseInt(item.rating, 10);
      const matchesCategory = category === 'All' || category === item.category;
      const matchesSearch =
        searchValue === '' ||
        item.name.toLowerCase().includes(searchValue) ||
        item.description.toLowerCase().includes(searchValue) ||
        item.category.toLowerCase().includes(searchValue);

      const matchesVeg =
        (!filters?.veg && !filters?.nonVeg) ||
        (filters?.veg && item.isVeg) ||
        (filters?.nonVeg && !item.isVeg);

      const matchesUnder200 = !filters?.under200 || item.price < 200;
      const matchesRating = !filters?.rating4 || itemRating >= 4;
      const matchesDelivery = !filters?.fastDelivery || item.fastDelivery;
      const matchesCuisine =
        (!filters?.chinese && !filters?.italian && !filters?.northIndian) ||
        (filters?.chinese && item.cuisine === 'Chinese') ||
        (filters?.italian && item.cuisine === 'Italian') ||
        (filters?.northIndian && item.cuisine === 'North Indian');

      return (
        matchesCategory &&
        matchesSearch &&
        matchesVeg &&
        matchesUnder200 &&
        matchesRating &&
        matchesDelivery &&
        matchesCuisine
      );
    });
  
  return (
    <div className='food-display ' id="food-display" >
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredFood.length === 0 ? (
          <div className="food-display-empty">No matching items found.</div>
        ) : (
          filteredFood.map((item) => (
            <Fooditem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={parseInt(item.rating,10)}
            />
          ))
        )}
      </div>
    </div>
  )
}

export default FoodDisplay
