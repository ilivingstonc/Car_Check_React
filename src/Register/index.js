import React, { Component } from 'react';
import { Form, Label, Button, Grid } from 'semantic-ui-react';
import './style.css';

class Register extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    console.log('Email & Password:', this.state);
    //changes url to /cars once logged in]
    try {
      const registrationUrl =
        process.env.REACT_APP_API_URL + '/api/v1/user/register';
      const registerResponse = await fetch(registrationUrl, {
        method: 'POST',
        body: JSON.stringify(this.state),
        credentials: 'include', // Sends session cookie along with request
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const parsedResponse = await registerResponse.json();

      if (parsedResponse.status.code === 201) {
        console.log('Sign up successful');
        this.props.history.push('/cars');
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className='registerContainer'>
        <Grid>
          <Grid.Column centered columns={1}>
            <Form
              className='registerForm'
              onSubmit={this.handleSubmit}
              style={{ backgroundColor: 'gray', borderRadius: '20px' }}
            >
              <h4>Register New User</h4>
              <Label size='big'>Email</Label>
              <Form.Input
                size='big'
                type='email'
                name='email'
                onChange={this.handleChange}
                required
              />
              <Label size='big'>Password</Label>
              <Form.Input
                size='big'
                type='password'
                name='password'
                onChange={this.handleChange}
                required
              />
              <Button size='big' type='submit' color='green'>
                Sign Up
              </Button>
              <h5>
                <a href='/' style={{ color: 'darkblue', textDecoration: "underline"}}>
                  Already Registered?
                </a>
              </h5>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default Register;
