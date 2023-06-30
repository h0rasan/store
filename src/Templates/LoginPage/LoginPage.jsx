import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { Button, Grid } from '@mui/material';
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { colors } from '../../util/theme';

const styles = {
  form: {
    color: colors.lightGray,
  },

  or: {
    height: '25px',
    width: '25px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: '10px',
    backgroundColor: colors.accentColor,
    color: colors.white,
  },

  button: {
    backgroundColor: colors.accentColor,
    margin: '8px 0 0 0',
  },

  input: {
    width: ' 100%',
    padding: '12px 0 12px 5px',
    margin: '8px 0',
    border: '1px solid #EFECEC',
    backgroundColor: '#EFECEC',
    boxSizing: 'borderbox',
  },
};

const LoginPage = () => {
  return (
    <Grid
      container
      direction='row'
      justifyContent='center'
      padding='10% 0'
      gap={4}
    >
      <Grid item lg={3} md={3} sm={4}>
        <h3>Login to your account</h3>
        <input placeholder='Name' type='text' style={styles.input} />
        <input type='text' style={styles.input} placeholder='Email Address' />

        <input type='checkbox' />
        <label>Keep me signed in</label>
        <br />
        <Button variant='contained' style={styles.button}>
          Login
        </Button>
      </Grid>
      <div style={styles.or}>OR</div>
      <Grid item lg={3} md={3} sm={4}>
        <h3>New User Signup!</h3>
        <input type='text' style={styles.input} placeholder='Name' />
        <input placeholder='Emain Address' type='text' style={styles.input} />
        <input placeholder='Password' type='text' style={styles.input} />

        <Button variant='contained' style={styles.button}>
          Signup
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
