import React, { Component } from 'react';
import CarSearchForm from '../CarSearchForm';
import CarSearchResults from '../CarSearchResults';
import './style.css';

//setting up HomeContainer

class HomeContainer extends Component {
  constructor(props) {
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
      carFromSearch: {
        make: '',
        model: '',
        year: '',
        data: []
      }
    };
  }

  saveCar = async e => {
    e.preventDefault();
    try {
      const savedCarResponse = await fetch(
        process.env.REACT_APP_API_URL + '/api/v1/savedcars/',
        {
          method: 'POST',
          body: JSON.stringify(this.state.carFromSearch),
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      const parsedResponse = await savedCarResponse.json();

      console.log(parsedResponse, 'this is what i am posting');
    } catch (err) {
      console.log(err);
    }
  };

  addCar = async (e, carFromForm) => {
    e.preventDefault();
    try {
      console.log(carFromForm);

      let queryString = `?make=${carFromForm.make}&model=${carFromForm.model}&year=${carFromForm.year}`;
      console.log(queryString);
      const searchedCarResponse = await fetch(
        process.env.REACT_APP_API_URL + '/api/v1/cars/search' + queryString,
        {
          method: 'GET'
        }
      );

      const parsedResponse = await searchedCarResponse.json();
      console.log(parsedResponse, ' this is response');
      const carResponse = parsedResponse.data;
      const maintResponse = parsedResponse.data.data.data;
      console.log(carResponse, 'this is car');
      console.log(maintResponse, 'this is maint');

      this.setState({
        carFromSearch: {
          ...carResponse
        },
        carData: maintResponse
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className='homeContainer'>
        <CarSearchForm
          className='searchForm'
          addCar={this.addCar}
          saveCar={this.saveCar}
        />
        <CarSearchResults
          className='searchResults'
          carData={this.state.carData}
          carFromSearch={this.state.carFromSearch}
        />
      </div>
    );
  }
}

export default HomeContainer;
