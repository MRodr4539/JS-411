import React, { Component } from 'react';
import './App.css';


class App extends Component {
  state = { 
    searchTerm: '',
    articles: []
  }
handleInput = (e) => {
  this.setState({ searchTerm: e.target.value })
}

handleSubmit = (e) =>  {
  e.preventDefault()
  fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}`)
    .then(res => res.json())
    .then(news => { 
      this.setState({ searchTerm: '', articles: news.hits })
    })
}

  render() { 
    console.log(this.state.articles)
    return ( 
      <div>
        <h1>New Articles</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="searchTerm">Search for: </label>
          <input 
          placeholder="Enter a search term..."
          onChange={this.handleInput}
          value={this.state.searchTerm.toUpperCase()}
          name="searchTerm" />
          <button type="submit">Search</button>
        </form>
        <div className="article-list">
          {this.state.articles.map((a, i) => {
            return (
              <div key={i} className='info'>
              <p>Title: {a.title}</p>
              <p> Author: {a.author}</p>
              <a target='_blank' href={a.url}>Read More</a>
              <p>relevancy score: {a.relevancy_score}</p>
              </div>
              )
            
              
          })}
        </div>
      </div>
      );
  }
}


export default App;
