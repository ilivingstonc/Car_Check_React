import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import './style.css'

function CarList(props) {
  const cars = props.cars.map((car, i) => {
    return (
      <Card key={i} className='cardContainer' style={{ backgroundColor: 'white'}}>
        <Card.Content>
          <Card.Header style={{ textAlign: 'center' }}>
            {car.make} {car.model} {car.year}
          </Card.Header>
          <Card.Description>
            <ul>
              {car.data.data.map(info => {
                return (
                  <li style={{ listStyleType: 'none' }}>
                    {info.due_mileage} - {info.desc}
                  </li>
                );
              })}
            </ul>
          </Card.Description>
          <Icon
            name='delete'
            size='large'
            floated='right'
            onClick={() => props.deleteCar(car.event_id)}
          ></Icon>
          <Icon
            name='edit'
            size='large'
            floated='right'
            onClick={() => props.openEditModal(car)}
          ></Icon>
        </Card.Content>
      </Card>
    );
  });

  return <Card.Group>{cars}</Card.Group>;
}

export default CarList;
