import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './App.css'

export const StarRating = ({ numberOfStar = 5 }) => {

    const [hover , setHover] = useState(0)
    const [rating , setRating] = useState(0)


   
  return (
    <>
      {[...Array(numberOfStar)].map((item, index) => (
        
            <FaStar key={index}
            className={index+1 <= (hover || rating) ? 'active':"inactive"}
            onClick={()=>setRating(index+1)}
            onMouseEnter={()=>setHover(index+1)} 
            onMouseLeave={()=>setHover(0)}
            size={40} />


      ))}
    </>
  );
};

