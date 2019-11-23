import React from 'react'

function CarSearchResults (props) {
    const carsData = props.carData.map((info, e) => {
        return (
          <div key={e}>
            <h5>{info.desc} at {info.cycle_mileage} miles</h5>
          </div>
        )
      })    

    return (
      <div>
      <h2>{props.carFromSearch.make}{props.carFromSearch.model}{props.carFromSearch.year}</h2> 
      {carsData}
      </div>
    )



}

export default CarSearchResults