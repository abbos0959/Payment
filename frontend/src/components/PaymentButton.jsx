import axios from "axios";

import { useSelector } from "react-redux";
import React from "react";
import { url  } from "../slices/api";

export const PaymentButton = ({ cartItems }) => {
   const user = useSelector((state) => state.auth);
   const handleClick = () => {
      axios
         .post(`${url}/stripe/create-checkout-session`, {
            cartItems,
            UserId: user._id,
            
         })
         .then((res) => {
            if (res.data.url) {
               window.location.href = res.data.url;
            }
         })
         .catch((err) => console.log(err.message));
         cartItems=[]
   };
   return (
      <>
         <button onClick={() => handleClick()}> Check Out</button>
      </>
   );
};
