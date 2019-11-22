import React from 'react';
import { Card, Button, Image} from 'semantic-ui-react';

function CarList(props){

  // const carsData = props.carData.map((info, e) => {
  //   return (
  //     <div key={e}>
  //       <h5>{info.desc}</h5>
  //       <h5>{info.due_mileage}</h5>
  //     </div>
  //   )
    
    
  
  //   })


  const cars = props.cars.map((car) => {
    return (
        <Card key={car.id}>
        {/* <Image src={car.image} wrapped ui={false} /> */}
          <Card.Content>
            <Card.Header>{car.make}</Card.Header>
            <Card.Description>{car.model}</Card.Description>
            <Card.Description>{car.year}</Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button onClick={() => props.deleteCar(car.id)}>Delete Car</Button>
            <Button onClick={() => props.openEditModal(car)}>Edit Car</Button>
          </Card.Content>
        </Card>
        )
  })


  return (
      <Card.Group>
        { cars }
        {/* { carsData } */}
      </Card.Group>
    )
}

export default CarList