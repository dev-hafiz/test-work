import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import TakeFood from '../TakeFood/TakeFood';

const Mealdetail = () => {
     const {mealId} = useParams()
     const [orderFoods, setOrderFoods] = useState([])
     useEffect( ()=>{
          const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
          fetch(url)
          .then( res => res.json())
          .then( data => setOrderFoods(data.meals))
     },[])
     return (
          <div className = "container mt-5 text-center">
               <h1 className="mb-4">FOOD YOU ORDERED </h1>
               <hr />
               
               
               {
                    orderFoods.map(food => <TakeFood food={food} key={food.idMeal} />)
               }
               
          </div>
     );
};

export default Mealdetail;