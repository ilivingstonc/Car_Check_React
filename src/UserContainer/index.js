import React, { Component } from 'react';
import EditCarModal from '../EditCarModal'

import {Grid} from 'semantic-ui-react'


class UserContainer extends Component {

    constructor(props){
      super(props);
  
      this.state = {
        cars: [],
        carData: [],
        savedCars: [],
        showEditModal: false,
        carToEdit: {
          make: '',
          model: '',
          year: ''
        },
      }
    }

  
  
  deleteCar = async (id) => {
    console.log(id);
    const deleteCarResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/cars/' + id, {
      method: 'DELETE'
    });

    const deleteCarParsed = await deleteCarResponse.json();
    console.log(deleteCarParsed)

    this.setState ({
      cars: this.state.cars.filter((car) => car.id !== id )

    })


  }

    openEditModal = (carFromList) => {
  
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
     
    try {
        const editResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/cars/' +  this.state.carToEdit.id, {
         method: "PUT",
         body: JSON.stringify(this.state.carToEdit),
         headers: {
           'Content-Type': 'application/json'
         }
      })
        const editResponseParsed = await editResponse.json();
        console.log('editResponseParsed: ', editResponseParsed);
  
        const newCarArrayWithEdit = this.state.cars.map((car) => {
            if (car.id === editResponseParsed.data.id) {
                 car = editResponseParsed.data
          }
          
          return car;
      }) 
  
        this.setState ({
          cars: newCarArrayWithEdit,
          showEditModal: false 
        })
  
    }  catch (err) {
      console.log (err);
    }
  
  }
  
  
    render(){
      
      return (
        <Grid.Column>
            <UserContainer deleteCar={this.deleteCar} openEditModal={this.openEditModal}/>
            <EditCarModal open={this.state.showEditModal} carToEdit={this.state.carToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
          </Grid.Column>
      )
  }


}


export default UserContainer