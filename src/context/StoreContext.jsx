import { createContext, useEffect, useState } from "react";
export const StoreContext=createContext(null)
import { food_list } from "../assets/assets";
const StoreContextProvider=(props)=>{
    const[cartItems, setCartItems]=useState({});
    const[favItems, setFavItems]=useState({});
    const[searchTerm, setSearchTerm]=useState('');
    const addToCart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }

    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))

    }
    const toggleFavorite=(itemId)=>{
        setFavItems((prev)=>{
            if(prev[itemId]){
                const updated = {...prev};
                delete updated[itemId];
                return updated;
            }
            return {...prev, [itemId]: true};
        })
    }
   const getTotalCartAmount=()=>{
    let totalAmount=0;
    for(const item in cartItems){

        if(cartItems[item]>0){
            let itemInfo=food_list.find((product)=>product._id===item);
            totalAmount +=itemInfo.price*cartItems[item];
        }
        
    }
    return totalAmount;

}

    const favoriteList = food_list.filter((item) => favItems[item._id]);
        
    const contextValue={
         food_list,
         cartItems,
         setCartItems,
         favItems,
         setFavItems,
         favoriteList,
         searchTerm,
         setSearchTerm,
         addToCart,
         removeFromCart,
         toggleFavorite,
         getTotalCartAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}

export default StoreContextProvider;