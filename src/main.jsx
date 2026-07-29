import React, { useEffect } from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import {BrowserRouter} from "react-router-dom";
import StoreContextProvider from './context/StoreContext.jsx';

const Root = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      mirror: false,
    });
  }, []);

  return (
    <BrowserRouter>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);


  
   
    
  

