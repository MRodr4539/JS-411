import React, { Component } from 'react';
import './App.css';




class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      results: [],
    };
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
       
      </div>
    );
  } 

}




export default App;
