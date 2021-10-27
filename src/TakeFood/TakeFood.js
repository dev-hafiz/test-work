import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const TakeFood = (props) => {
     const {idMeal, strArea, strCategory, strInstructions, strMeal, strMealThumb, strYoutube} = props.food;

     const history = useHistory()
     const homeHandler = () =>{
          history.push(`/home`)
     }

     return (
          <Row xs={2} md={2}>
               <Col className = "mt-5">
               <h3>Country like : {strArea}</h3>
               <h3>Food Name : {strMeal}</h3>
               <p>{strInstructions.slice(0, 200)}</p>

               <button onClick={homeHandler} className ="btn btn-danger">Go to Home </button>
                </Col>
               <Col>
               <img className ="img-fluid" src={strMealThumb} alt="" />
               </Col>

          </Row>
     );
};

export default TakeFood;