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
    fetch('http://hn.algolia.com/api/v1/search?query=foo&tags=story')
    .then(response => response.json())
    .then(data => {
      this.setState({results: data.results})
    })
  }
  render(){
    console.log('this is state', this.state.results)
    return(
      <div className = 'news-feed'>
      <h1>News Feed</h1>
      <button></button>
      </div>
    ) 
  }
}

export default App;
