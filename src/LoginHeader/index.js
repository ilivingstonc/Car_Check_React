import React from 'react';
import { Link } from 'react-router-dom';
import { Header, List } from 'semantic-ui-react';
import './style.css'

const LoginHeader = () => {
  return (
    <Header style={{"backgroundColor": "white", "margin": "30px", "padding": "25px", "borderStyle": "inset", "width": "30%"}}>
      <List horizontal>
        <List.Item>
          <Link className="navHeader" to="/">Register</Link>
        </List.Item>
        <List.Item>
          <Link className="navHeader" to="/login">Login</Link>
        </List.Item> 
      </List>
    </Header>
    
  )
}

export default LoginHeader;