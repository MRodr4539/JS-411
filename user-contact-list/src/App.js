import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      results: [],
      details: '',
      showHide : false,
    };
    this.toggle = this.toggle.bind(this)
  }

  toggle = () => {
    const { showHide } = this.state;
    this.setState({showHide: !this.state.showHide})
  }

  componentDidMount(){
    this.fetchData();
  }  

  fetchData(){
    fetch('https://randomuser.me/api?results=25')
    .then(response => response.json())
    .then(data => {
      this.setState({results: data.results})
    })
  }
  

  render(){
    console.log(this.state.results)
    return(
      <div className= 'User-Contact-List'>
        <h1>Contact List</h1>
        <button onClick={this.toggle}>{this.state.showHide ? 'Hide Details' : 'Show Details'}</button>
        { this.state.showHide && <Details />}
      </div>
    );
  } 

}

class Details extends Component {
  render(){
    return(
      <div>User Details</div>
    )
  }
}



export default App;
