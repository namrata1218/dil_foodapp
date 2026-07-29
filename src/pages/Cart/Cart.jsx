import React, { useContext } from 'react'
import { motion } from 'framer-motion';
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext"
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate= useNavigate();
  return (
    <motion.div
      className='cart'
      data-aos="fade-up"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="cart-items">
        <div className="cart-item-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <motion.div
                key={item._id}
                className="cart-row"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                <div className="cart-item-title cart-item-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p className="cart-item-quantity">{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross-icon'>x</p>
                </div>
                <hr />
              </motion.div>
            )
          }
          return null;
        })}
      </div>
          <div className="cart-bottom">
            <motion.div
              className="cart-total"
              data-aos="fade-left"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2>Cart Totals</h2>
              <div>
              <div className="car-total-details">
                <p>Subtotal</p>
                <p>{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="car-total-details">
                <p>Delivery Fee</p>
                <p>${getTotalCartAmount()===0?0:2}</p>
              </div>
              <hr />
              <div className="car-total-details">
                <b>Total</b>
                <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
              </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={()=>navigate('/order')}
              >
                PROCEED TO CHECKOUT
              </motion.button>
            </motion.div>
            <motion.div
              className="cart-promocode"
              data-aos="fade-right"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <div>
                <p>If you have a promocode, Enter it here</p>
                <div className='cart-promocode-input'>
<input type="text" placeholder='promocode' />
<button>Submit</button>
                </div>
              </div>
            </motion.div>
          </div>
    </motion.div>
  )
}

export default Cart
