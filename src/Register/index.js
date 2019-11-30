import React, {Component} from 'react'
import { Form, Label, Button } from 'semantic-ui-react'
import './style.css'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        }
    }


  handleChange = (e) => {
      e.preventDefault();
      this.setState ({
          [e.currentTarget.name]: e.currentTarget.value
      })
  }


  handleSubmit = async (e) => {
    e.preventDefault()
    console.log('Email & Password:', this.state)
    //changes url to /cars once logged in]
    try{
        const registrationUrl = process.env.REACT_APP_API_URL + '/api/v1/user/register';
        const registerResponse = await fetch(registrationUrl, {
        method: 'POST',
        body: JSON.stringify(this.state),
        credentials: 'include', // Sends session cookie along with request
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const parsedResponse = await registerResponse.json();

    if (parsedResponse.status.code === 201) {
        console.log('Sign up successful');
        this.props.history.push('/cars')
    }
    } catch (err){
        console.log(err)
    }    
}

render() {
    return (
    <div style={{"margin": "30px"}}>
        <Form onSubmit={this.handleSubmit} style={{"width": "25%"}}>
            <h4>Register New User</h4>
            <Label size='big'>Email</Label>
            <Form.Input size='big' type="email" name="email" onChange={this.handleChange} required />
            <Label size='big'>Password</Label>
            <Form.Input size='big' type="password" name="password" onChange={this.handleChange} required />
            <Button size='big' type="submit" color="green">Sign Up</Button>
        </Form>
        <Button href='/' size='medium' type="submit" color="black">Login Existing User</Button>
    </div>
    )
  }
}

export default Register;