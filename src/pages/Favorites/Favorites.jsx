import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import Fooditem from '../../components/Fooditem/Fooditem'
import './Favorites.css'

const Favorites = () => {
  const { favoriteList } = useContext(StoreContext)

  return (
    <div className='favorites-page'>
      <h2>Your Favorites</h2>
      {favoriteList.length === 0 ? (
        <p className='favorites-empty'>No favorites yet. Add dishes to your favorites to see them here.</p>
      ) : (
        <div className='favorites-grid'>
          {favoriteList.map((item) => (
            <Fooditem
              key={item._id}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              rating={parseInt(item.rating, 10)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
