import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import "./Fooditem.css"
import { AiFillHeart, AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { FaCircleMinus, FaCirclePlus, FaPlus } from "react-icons/fa6";
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({id, name, price, description, image,rating}) => {
  const [showToast, setShowToast] = useState(false);
  const [toastText, setToastText] = useState('Item added to cart');
  const {cartItems, addToCart, removeFromCart, favItems, toggleFavorite}=useContext(StoreContext);
  const isFavorite = !!favItems[id];
  const handleAddToCart = (message = 'Item added to cart') => {
    addToCart(id);
    setToastText(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1400);
  };
  const handleFavorite = () => {
    toggleFavorite(id);
    setToastText(isFavorite ? 'Removed from favorites' : 'Added to favorites');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 1400);
  };
  const generateRating=(rating)=>{
    switch(rating){
        case 1:
            return(
                <div className=' rating-app '>
                    <AiFillStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>
                    <AiOutlineStar/>

                </div>
            );
            case 2:
                return(
                    <div className='rating-app'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>
                        <AiOutlineStar/>

                    </div>
                );
                case 3:
                    return(
                        <div className='rating-app'>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiFillStar/>
                            <AiOutlineStar/>
                            <AiOutlineStar/>
    
                        </div>
                    );
                    case 4:
                        return(
                            <div className='rating-app'>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiFillStar/>
                                <AiOutlineStar/>
        
                            </div>
                        );
                        case 5:
                            return(
                                <div className='rating-app'>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
                                    <AiFillStar/>
            
                                </div>
                            );

            default:
                return null;

    }}
   
  return (
    <motion.div
      className='food-item'
      data-aos="fade-up"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -6 }}
    >
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        <motion.button
          type="button"
          className={`favorite-btn ${isFavorite ? 'favorite-active' : ''}`}
          onClick={handleFavorite}
          aria-label="Toggle favorite"
          whileTap={{ scale: 0.92 }}
        >
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </motion.button>
        <div className={`cart-toast ${showToast ? 'visible' : ''}`}>{toastText}</div>
        {!cartItems[id]
         ? (
           <motion.div
             className="add"
             onClick={() => handleAddToCart('Item added to cart')}
             whileHover={{ scale: 1.08 }}
             whileTap={{ scale: 0.95 }}
           >
             <FaPlus />
           </motion.div>
         ) : (
           <div className="food-item-counter">
             <motion.div whileTap={{ scale: 0.95 }} onClick={()=>removeFromCart(id)}>
               <FaCircleMinus />
             </motion.div>
             <p>{cartItems[id]}</p>
             <motion.div whileTap={{ scale: 0.95 }} onClick={() => handleAddToCart('Quantity increased by 1')}>
               <FaCirclePlus />
             </motion.div>
           </div>
         )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            {generateRating(rating)}
        </div>
        <p className="food-item-desp">{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </motion.div>
  )
}

export default Fooditem;
