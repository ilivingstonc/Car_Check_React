import React, { Component } from 'react';
import CarList from '../CarList'
import SearchForCar from '../SearchForCar'
import EditCarModal from '../EditCarModal'
import CarSearchResults from '../CarSearchResults'
// import FindCarForm from '../FindCarForm'
import {Grid} from 'semantic-ui-react'


class CarContainer extends Component {
  constructor(props){
    super(props);

    this.state = {
      cars: [],
      carData: [],
      showEditModal: false,
      carToEdit: {
        make: '',
        model: '',
        year: ''
      },
      carFromSearch: {
        make: '',
        model: '',
        year: ''
      }
    }
  }

  componentDidMount(){
    // this.getCars()
  }

getCars = async () => {

    try {
      const cars = await fetch(process.env.REACT_APP_API_URL + '/api/v1/cars/');
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

addCar = async (e, carFromForm) => {
    e.preventDefault();
    try {

        // We have to send JSON
        // createdCarResponse variable will store the response from the express API
        // const createdCarResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/cars/', {
        //     method: 'POST',
        //     body: JSON.stringify(carFromForm),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        console.log(carFromForm);

        let queryString = `?make=${carFromForm.make}&model=${carFromForm.model}&year=${carFromForm.year}`;
        console.log(queryString);
        const searchedCarResponse = await fetch(process.env.REACT_APP_API_URL + '/api/v1/cars/search' +queryString, {
          method: 'GET'
      });

        const parsedResponse = await searchedCarResponse.json();
        console.log(parsedResponse, ' this is response')
        const carResponse = parsedResponse.data
        const maintResponse = parsedResponse.data.data.data
        console.log(carResponse, 'this is car');
        console.log(maintResponse, 'this is maint');


        this.setState({
            carFromSearch: {
              ...carResponse
            },
            carData: maintResponse
            // cars: [...this.state.cars, carResponse],
            // cars: [...this.state.cars, parsedResponse.data]
            // carData: maintResponse
        })


    } catch (err) {
        console.log('error')
        console.log(err)
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
      <Grid columns={2} textAlign='center' verticalAlign='top'>
          <Grid.Row>
            <Grid.Column>
              <SearchForCar addCar={this.addCar}/>
            </Grid.Column>
            <Grid.Column>
            <CarSearchResults carData={this.state.carData} carFromSearch={this.state.carFromSearch} />
            <CarList cars={this.state.cars} carData={this.state.carData} deleteCar={this.deleteCar} openEditModal={this.openEditModal}/>
             <EditCarModal open={this.state.showEditModal} carToEdit={this.state.carToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      )
  }


}

export default CarContainer

