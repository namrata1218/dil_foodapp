import React, { useContext} from 'react'
import "./Fooditem.css"
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaCircleMinus, FaCirclePlus, FaMinus, FaPlus } from "react-icons/fa6";
import { StoreContext } from '../../context/StoreContext';

const Fooditem = ({id, name, price, description, image,rating}) => {
  // const [itemCount, setItemCount]=useState(0);
  const {cartItems, addToCart, removeFromCart}=useContext(StoreContext);
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
    <div className='food-item'>
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
        {!cartItems[id]
         ?<FaPlus className="add text-[black]" onClick={()=>addToCart(id)}/>:
         <div className="food-item-counter">
          <FaCircleMinus onClick={()=>removeFromCart(id)}/>
         <p>{cartItems[id]}</p>
         <FaCirclePlus onClick={()=>addToCart(id)}/>

         </div>
         
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            {generateRating(rating)}
            
        </div>
        <p className="food-item-desp">{description}</p>
        <p className='food-item-price'>${price}</p>
      </div>
    </div>
  )
}

export default Fooditem;
