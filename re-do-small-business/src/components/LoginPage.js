import React, { Component } from 'react'
import { AppBar, Typography, TextField, Button, Container } from '@material-ui/core'


class LoginPage extends Component {
  
    state = {
        username: 'JaneDoe01',
        password: 'Doe1234'
  }

  textChangeHandler = (event) => {
    const state = { ...this.state }
    state[event.target.id] = event.target.value
    this.setState(state)
  }

  loginHandler = (event) => {
    event.preventDefault();
    this.props.login(this.state.username, true)
    document.cookie = "loggedIn=true;max-age=60*1000"
    this.props.history.push('/')
  }


  render() {
    return (
      <Container className="signin-container">
        <AppBar position="static">
          <Typography>Sign In</Typography>
        </AppBar>
        <form onSubmit={this.loginHandler} className="signin-form">
          <TextField
            label="Username"
            name="username"
            value={this.state.username}
            onChange={this.textChangeHandler} 
          />
          <TextField 
            name="password"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.textChangHandler} 
          />
          <Button
            type="submit"
            variant="contained"
            color="primary">Sign In</Button>
        </form>
      </Container>
    )
  }
}

export default LoginPage;