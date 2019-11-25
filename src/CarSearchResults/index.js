import React from 'react';
import { Form, Label } from 'semantic-ui-react';

//carsData=info from cardata array, pulling out repair desc and car mileage to be returned below
function CarSearchResults (props) {
  
  const noDupesArray = [];

  props.carData.forEach(function(obj) {
      
      if (noDupesArray.indexOf(obj.due_mileage) === -1) {
          noDupesArray.push(obj.due_mileage);
      } else {

      }
      noDupesArray.push((obj.desc))
  });
  
  console.log(noDupesArray)

    const carsData = noDupesArray.map((info, e) => {
        return (
          <div key={e}>
            <h3>{info}</h3>
          </div>
        )
      })    

    
        return (
            <Form>
            <h1>{props.carFromSearch.make} {props.carFromSearch.model} {props.carFromSearch.year}</h1> 
            {carsData}
            </Form>
          )
    

}

export default CarSearchResults