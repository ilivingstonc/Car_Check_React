import React, { Component } from 'react';
import EditCarModal from '../EditCarModal'
import CarList from '../CarList'
import {Grid, Button} from 'semantic-ui-react'


class UserContainer extends Component {

    constructor(props){
      super(props);
  
      this.state = {
        cars: [],
        carData: [],
        savedCars: [],
        showEditModal: false,
        carToEdit: {
          event_id: '',
          make: '',
          model: '',
          year: ''
        },
      }
    }

     //commented out because was getting all the cars
  componentDidMount(){
    this.getCars()
  }
    getCars = async () => {

      try {
        const cars = await fetch(process.env.REACT_APP_API_URL + '/api/v1/savedcars/');
        const parsedCars = await cars.json();
        const fullData = parsedCars.data
        const mechData = parsedCars.data[0].data.data
        console.log(fullData);
        console.log(mechData);
        
        this.setState({
          cars: fullData,
          carData: mechData
        })
      
      } catch(err){
        console.log(err)
      }
    }
  
  deleteCar = async (id) => {
    console.log(id);
    const deleteCarResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/savedcars/' + id + '/', {
      method: 'DELETE'
    });

    const deleteCarParsed = await deleteCarResponse.json();
    console.log(deleteCarParsed)

    this.setState ({
      cars: this.state.cars.filter((car) => car.event_id !== id )

    })


  }

  openEditModal = (carFromList) => {
    
      console.log(carFromList)
      this.setState ({
        showEditModal: true,
        carToEdit: {
          ...carFromList
        }
      })
  }
  
  
  handleEditChange = (e) => {
      e.preventDefault();
      this.setState ({
        carToEdit: {
        ...this.state.carToEdit,
        [e.currentTarget.name]: e.currentTarget.value
        }
    })
  }
  
  closeAndEdit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending this to server:', this.state.carToEdit);
      const editCarUrl = `${process.env.REACT_APP_API_URL}/api/v1/savedcars/${this.state.carToEdit.event_id}/`;
      const editResponse = await fetch(editCarUrl, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.carToEdit),
        headers: {
          'Content-Type': 'application/json'
        }
      
      });

      const editResponseParsed = await editResponse.json();
      console.log(editResponseParsed, ' parsed edit')

      const newCarArrayWithEdit = this.state.cars.map((car) => {

        if(car.event_id === editResponseParsed.data.event_id){
          car = editResponseParsed.data
        }

        return car
      });

      this.setState({
        showEditModal: false,
        cars: newCarArrayWithEdit
      });


    } catch(err){
      console.log(err)
    }


  }
  
    render(){
      
      return (
        <Grid.Column>
            <CarList deleteCar={this.deleteCar} openEditModal={this.openEditModal} cars={this.state.cars}/>
            <EditCarModal open={this.state.showEditModal} carToEdit={this.state.carToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
            <Button href='/cars' color="red" positive>Back to Search</Button>
            <Button href='/' color="red" positive>Log Out</Button>
          </Grid.Column>
      )
  }


}


export default UserContainer