// import React, { Component } from 'react';
// import { Form, Button, Label, Segment } from 'semantic-ui-react';

// class FindCarForm extends Component {
//   constructor(){
//     super();

//     this.state = {
//       make: '',
//       model: '',
//       year: '',
//       mileage: ''
//     }
//   }
//   handleChange = (e) => {
//     this.setState({[e.currentTarget.name]: e.currentTarget.value})
//   }
  
//   render(){
//     return (
//       <Segment>
//         <h4>Find your car</h4>
//         <Form onSubmit={(e) => this.props.findCar(e, this.state)}>
//           <Label>Make:</Label>
//           <Form.Input type='text' name='make' value={this.state.make} onChange={this.handleChange}/>
//           <Label>Model:</Label>
//           <Form.Input type='text' name='model' value={this.state.model} onChange={this.handleChange}/>
//           <Label>Year:</Label>
//           <Form.Input type='text' name='year' value={this.state.year} onChange={this.handleChange}/>
//           <Label>Mileage:</Label>
//           <Form.Input type='number' name='mileage' value={this.state.mileage} onChange={this.handleChange}/>
//           <Button type='Submit'>Submit</Button>
//         </Form>
//       </Segment>
//       )
//   }
// }

// export default FindCarForm;