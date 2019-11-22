import React, { Component } from 'react';
import CarList from '../CarList'
import CreateCarForm from '../CreateCarForm'
import EditCarModal from '../EditCarModal'
// import FindCarForm from '../FindCarForm'
import {Grid} from 'semantic-ui-react'


class CarContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: [],
      showEditModal: false,
      carToEdit: {
        make: '',
        model: '',
        image: '',
        year: ''

      }
    }
  }

  componentDidMount(){
    this.getCars();
  }

  getCars = async () => {

    try {
      const cars = await fetch(process.env.REACT_APP_API_URL + '/api/v1/cars/');
      const parsedCars = await cars.json();
      console.log(parsedCars);
      
      this.setState({
        cars: parsedCars.data // array from flask
      })
    
    } catch(err){
      console.log(err)
    }
  }

  addCar = async (e, carFromForm) => {
    e.preventDefault();
    try {

        // We have to send JSON
        // createdCarResponse variable will store the response from the express API
        const createdCarResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/cars/', {
            method: 'POST',
            body: JSON.stringify(carFromForm),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // we have to turn the response from flask into
        // an object we can use
        const parsedResponse = await createdCarResponse.json();
        console.log(parsedResponse, ' this is response')

        // we are emptying all the dogs that are living in state into a new array,
        // and then adding the dog we just created to the end of it
        // the new dog which is called parsedResponse.data

        this.setState({
            cars: [...this.state.cars, parsedResponse.data]
        })


    } catch (err) {
        console.log('error')
        console.log(err)
    }
    // request address will start with 'http://localhost:8000'
    // becuase after we create it, we want to add it to the dogs array
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
      <Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
          <Grid.Row>
            <Grid.Column>
              <CarList cars={this.state.cars} deleteCar={this.deleteCar} openEditModal={this.openEditModal}/>
            </Grid.Column>
            <Grid.Column>
             <CreateCarForm addCar={this.addCar}/>
             {/* <FindCarForm findCarr={this.findCar}/> */}
             <EditCarModal open={this.state.showEditModal} carToEdit={this.state.carToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
  }


}

export default CarContainer

