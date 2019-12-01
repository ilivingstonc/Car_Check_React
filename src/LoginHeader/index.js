import React from 'react';
import './style.css';
import { Icon, Grid } from 'semantic-ui-react';

const LoginHeader = () => {
  return (
    <div className='LoginHeader'>
      <Grid>
        <Grid.Row mobile={16} centered rows={1}>
          <Icon className='hospitalIcon' name='hospital' circular inverted />
          <h1 className='siteLogo'>Car Check</h1>
          <Icon className='hospitalIcon' name='hospital' circular inverted />
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default LoginHeader;
