import React from 'react';
import { Card } from 'semantic-ui-react';
import './style.css';

//carsData=info from cardata array, pulling out repair desc and car mileage to be returned below
function CarSearchResults(props) {
  const noDupesArray = [];
  let dupeObj = {
    mileage: '',
    descriptions: []
  };

  props.carData.forEach(function(obj) {
    if (dupeObj.mileage === obj.due_mileage) {
      dupeObj.descriptions.push(obj.desc);
    } else {
      noDupesArray.push(dupeObj);
      dupeObj = {
        mileage: '',
        descriptions: []
      };
      dupeObj.mileage = obj.due_mileage;
      dupeObj.descriptions.push(obj.desc);
    }
  });

  console.log(noDupesArray);

  const carsData = noDupesArray.map((info, e) => {
    return (
      <div key={e}>
        <h3>{info.mileage}</h3>
        <ul>
          {info.descriptions.map(description => {
            return <li>{description}</li>;
          })}
        </ul>
      </div>
    );
  });

  return (
    <Card
      className='resultsBox'
      style={{ width: '60%', 'background-color': '#F0B5B5' }}
    >
      <h1 className='searchTitle'>Maintenance Report</h1>
      <h1>
        {props.carFromSearch.make} {props.carFromSearch.model}{' '}
        {props.carFromSearch.year}
      </h1>
      <h6>Typical mileage between each maintenance visit</h6>
      <p>{carsData}</p>
    </Card>
  );
}

export default CarSearchResults;
