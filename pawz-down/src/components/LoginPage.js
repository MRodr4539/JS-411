import React, {Component} from "react"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
    state= {
        username: '',
        password: ''
    }

    textChangeHandler = (event) => {
        const state = { ...this.state }
        state[event.target.id] = event.target.value
        this.setState(state)
    }

    // loginHandler = (event) => {
    //     event.preventDefault();
    //     this.props.login(this.state.username, true)
    //     // document.cookie = "loggedIn=true;max-age=60*1000"
    //     this.props.history.push('/')
    //   }


  render(){
    return(
        <div>
             <TextField 
                id="outlined-basic" 
                label="Username" 
                variant="outlined" 
                value={this.state.username}
                onChange={this.textChangeHandler}
             />
             <br></br>
             <br></br>
             <TextField 
                id="outlined-basic" 
                label="Password" 
                variant="outlined" 
                value={this.state.password}
                onChange={this.textChangeHandler}
             />
             <br></br>
             <br></br>
             <Button
                type='submit' 
                variant="contained" 
                color="primary">
                Login
             </Button>
        </div>
    )
}
}

export default LoginPage;