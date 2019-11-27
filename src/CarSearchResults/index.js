import React from 'react';
import { Card, Button } from 'semantic-ui-react';

//carsData=info from cardata array, pulling out repair desc and car mileage to be returned below
function CarSearchResults (props) {
  
  const noDupesArray = [];
  let dupeObj = {
    mileage: '',
    descriptions: []
  }

  props.carData.forEach(function(obj) {
      if(dupeObj.mileage === obj.due_mileage) {
        dupeObj.descriptions.push(obj.desc);
      } else {
        noDupesArray.push(dupeObj);
        dupeObj = {
          mileage: '',
          descriptions: []
        }
        dupeObj.mileage = obj.due_mileage;
        dupeObj.descriptions.push(obj.desc);
      }


      // if (noDupesArray.indexOf(obj.due_mileage) === -1) {
      //     noDupesArray.push(obj.due_mileage);
      // } else {
      //   noDupesArray.push({desc: obj.desc})
      // }
      
  });
  
  console.log(noDupesArray)

    const carsData = noDupesArray.map((info, e) => {
        return (
          <div key={e}>
            <h3>{info.mileage}</h3>
            <ul>
              {info.descriptions.map((description) => {
                return (
                  <li>{description}</li>
                )
              })}
            </ul>
          </div>
        )
      })    


   
      
        return (
            
            <Card>
            <h1>{props.carFromSearch.make} {props.carFromSearch.model} {props.carFromSearch.year}</h1> 
            {carsData}
            </Card>
          )

}

export default CarSearchResults