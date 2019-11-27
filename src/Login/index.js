import React, { Component } from 'react';
import { Form, Label, Button, Message } from 'semantic-ui-react';
import './style.css'

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  // form value change handler <-- sets 'name' of e.target to 'value' entered
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  
  
  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Email & Password:', this.state)
    //changes url to /cars once logged in
    try{
        const loginUrl = process.env.REACT_APP_API_URL + '/api/v1/user/login';
        const loginResponse = await fetch(loginUrl, {
        method: 'POST',
        body: JSON.stringify(this.state),
        credentials: 'include', // Sends session cookie along with request
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const parsedResponse = await loginResponse.json();
    console.log(parsedResponse.status.code)

    if (parsedResponse.status.code === 200) {
        console.log('Login successful');
        this.props.history.push('/cars')
    }
    } catch (err){
        console.log(err)
    }    
}


  render() {
    return (
      <div style={{"margin": "30px"}}>
        <Form onSubmit={this.handleSubmit}>
          <h4>Sign In</h4>
          <Label size='big'>Email</Label>
          <Form.Input size='big' type="email" name="email" onChange={this.handleChange} required />
          <Label size='big'>Password</Label>
          <Form.Input size='big' type="password" name="password" onChange={this.handleChange} required />
          <Button exact path='/cars' size='big' type="submit" color="green">Login</Button>
          { this.state.errorMsg ? <Message negative>{this.state.errorMsg}</Message> : null }
        </Form>
        <Button exact path='/register' size='medium' type="submit" color="black">Register New User</Button>
      </div>
    )
  }
}

export default Login;