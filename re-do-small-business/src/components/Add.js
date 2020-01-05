import React, { Component, Fragment } from 'react'
import { Button, TextField } from '@material-ui/core'
import {addListing} from '../redux/actions'



class Add extends Component {
    state = {
        accessable: 'false',
        id: '',
        name: '',
        address: '',
        hours: '',
        description: '',
    }

    textChangeHandler = (event) => {
        // event.preventDefault()
        const newState = {...this.state}
        newState[event.target.id] = event.target.value
        this.setState(newState)
    }

    submitHandler = (event) => {
        event.preventDefault()
        const listing = {...this.state}
        listing.id = this.props.listingTotal + 1
        this.props.addListing(listing)
        this.setState({accessable: false})
        this.props.history.push('/')
    }


    render(){
        return(
            <div className="whole-page">
                <form 
                    onSubmit = {this.submitHandler}
                >
                <TextField
                    id='name'
                    placeholder='Name'
                    value = {this.state.name}
                    onChange = {this.textChangeHandler}
                    required />

                <TextField
                    id='hours'
                    placeholder='Hours'
                    value = {this.state.hours}
                    onChange = {this.textChangeHandler}
                    required />

                <TextField
                    id='description'
                    placeholder='Description'
                    value = {this.state.description}
                    onChange = {this.textChangeHandler}
                    required />

                <TextField
                    id='description'
                    placeholder='Description'
                    value = {this.state.description}
                    onChange = {this.handleTextChange}
                    required />
                <br></br>
                <Button variant = 'contained' color = 'primary' type = 'submit'>Add Listing</Button>
                </form>
            </div>
        )
    }
}

export default Add;