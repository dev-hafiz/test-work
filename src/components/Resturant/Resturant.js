import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, FormControl, InputGroup, Row } from 'react-bootstrap';
import ResturantMeal from '../../ResturantMeal/ResturantMeal';

const Resturant = () => {
     const [searchValue, setSearchValue] = useState("")
     const [meals, setMeals] = useState([])

    
     useEffect(()=>{
          const url =  `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
          fetch(url)
          .then(res => res.json())
          .then( data => setMeals(data.meals))
     },[searchValue])

     //SEARCH HANDELER EMPLIMENT
     const handleSearch = event =>{
          const searchText = event.target.value;
          setSearchValue(searchText)
     }

     


     return (
          <div className = "container">
               <h1 className = "text-center fw-bolder mt-5 mb-4">Resturant Iteam</h1>
               <InputGroup className="mb-3">
                    <FormControl
                         onChange={handleSearch}
                         placeholder="Search your hungry foods"
                         aria-label="Recipient's username"
                         aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                         Button
                    </Button>
               </InputGroup>
               <Row xs={1} md={3} className="g-4 mt-5">
                    {
                         meals.map(meal => <ResturantMeal key={meal.idMeal} meal={meal}></ResturantMeal>)
                    }
               </Row>
          </div>
     );
};

export default Resturant;