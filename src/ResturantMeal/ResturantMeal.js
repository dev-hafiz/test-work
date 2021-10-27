import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResturantMeal = (props) => {
     const {idMeal, strArea, strCategory, strInstructions, strMeal, strMealThumb, strYoutube} = props.meal || {};
     
     return (
          <div>
                  <Col>
                         <Card>
                         <Card.Img variant="top" src={strMealThumb} />
                         <Card.Body>
                              <Card.Title>{strMeal}</Card.Title>
                              <Card.Text>
                              {strInstructions.slice(0, 200)}
                              </Card.Text>

                              <Link to={`/sesturantmeal/${idMeal}`}>Order Food</Link>
                         </Card.Body>
                        
                         </Card>
                    </Col>
          </div>
     );
};

export default ResturantMeal;