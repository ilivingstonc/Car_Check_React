import React from 'react';
import { Card, Button} from 'semantic-ui-react';

function CarList(props){

  return (
    <div></div>
  )

  // const carsData = props.carData.map((info, e) => {
  //   return (
  //     <div key={e}>
  //       <h5>{info.desc}</h5>
  //       <h5>{info.due_mileage}</h5>
  //     </div>
  //   )
  // })




  // const cars = props.cars.map((car) => {
  //   return (
  //       <Card key={car.id}>
  //         <Card.Content>
  //           <Card.Header>{car.make}</Card.Header>
  //           <Card.Description>{car.model}</Card.Description>
  //           <Card.Description>{car.year}</Card.Description>
  //         </Card.Content>
  //         <Card.Content extra>
  //           <Button onClick={() => props.deleteCar(car.id)}>Delete Car</Button>
  //           <Button onClick={() => props.openEditModal(car)}>Edit Car</Button>
  //         </Card.Content>
  //       </Card>
  //   )
  // })


  // return (
  //     <div>  
  //       <h3>{props.carFromSearch.make}</h3>
  //       <h3>{props.carFromSearch.model}</h3>
  //       <h3>{props.carFromSearch.year}</h3>
  //       <h5>{carsData}</h5>
  //     </div>
  //   )
   } 


export default CarList