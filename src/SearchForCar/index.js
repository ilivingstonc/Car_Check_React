import React, { Component } from 'react';
import { Form, Button, Label, Icon } from 'semantic-ui-react';

class SearchForCar extends Component {
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
      <div style={{"margin": "30px",}}>
        <h4>Search Car</h4>
        <Form size='big' onSubmit={(e) => this.props.addCar(e, this.state)}>
          <Label size='big'>Make:</Label>
          <Form.Input size='big' type='text' name='make' value={this.state.make} onChange={this.handleChange}/>
          <Label size='big'>Model:</Label>
          <Form.Input size='big' type='text' name='model' value={this.state.model} onChange={this.handleChange}/>
          <Label size='big'>Year:</Label>
          <Form.Input size='big' type='text' name='year' value={this.state.year} onChange={this.handleChange}/>
          <Button size='big' type='Submit' color='red'><Icon name="wrench" />SUBMIT 
          </Button>
          
        </Form>
      </div>
      )
  }
}

export default SearchForCar;