import React, { Component } from 'react';
import { Form, Button, Label, Segment } from 'semantic-ui-react';

class CreateCar extends Component {
  constructor(){
    super();

    this.state = {
      make: '',
      model: '',
      year: ''
    }
  }
  handleChange = (e) => {
    this.setState({[e.currentTarget.name]: e.currentTarget.value})
  }
  
  render(){
    return (
      <Segment>
        <h4>Search Car</h4>
        <Form onSubmit={(e) => this.props.addCar(e, this.state)}>
          <Label>Make:</Label>
          <Form.Input type='text' name='make' value={this.state.make} onChange={this.handleChange}/>
          <Label>Model:</Label>
          <Form.Input type='text' name='model' value={this.state.model} onChange={this.handleChange}/>
          <Label>Image:</Label>
          <Form.Input type='text' name='year' value={this.state.year} onChange={this.handleChange}/>
          <Button type='Submit'>Submit</Button>
        </Form>
      </Segment>
      )
  }
}

export default CreateCar;