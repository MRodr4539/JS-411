import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      showHide: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle = () => {
    // const { showHide } = this.state;
    this.setState({ showHide: !this.state.showHide });
    this.setState({ title: !this.state.Info });
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch("https://randomuser.me/api?results=25")
      .then(response => response.json())
      .then(data => {
        console.log("Data fetched", data);
        this.setState({ results: data.results });
      });
  }

  render() {
    // console.log("Rendered data", this.state.results);
    // console.log("Attemping details pull", this.state.detail);
    // const { results } = this.state;
    return (
      <div className="User-Contact-List">
        <h1>Contact List</h1>
        {this.state.results.map((object, index) => (
          <p key={index}>
            Username: {object.login.username}
            <br />
            <img src={object.picture.large} />
            <br />
            <button onClick={this.toggle}>
              {this.state.showHide ? "Hide Details" : "Show Details"}
            </button>
            <br />
            {this.state.showHide && object.name.title}
            {this.state.showHide && object.name.first}
            {this.state.showHide && object.name.last}
          </p>
        ))}
      </div>
    );
  }
}

// class App extends Component {
//   constructor(props){
//     super(props);

//     this.state = {
//       results: [],
//       details: '',
//       showHide : false,
//     };
//     this.toggle = this.toggle.bind(this)
//   }

//   toggle = () => {
//     const { showHide } = this.state;
//     this.setState({showHide: !this.state.showHide})
//   }

//   componentDidMount(){
//     this.fetchData();
//   }  

//   fetchData(){
//     fetch('https://randomuser.me/api?results=25')
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         results: data.results,
        
//       })
//     })
//   }
  

//   render(){
//     // console.log('this is state', this.state.results)
//     const { results } = this.state;
//     return(
//       <div className= 'User-Contact-List'>
//         <h1>Contact List</h1>
//         <ul>
//           {results.map(result =>
//           <li key={result.objectID}>
//             <a href={result.url}>{result.username}</a>
//           </li>
//           )}
//         </ul>
//         <button onClick={this.toggle}>{this.state.showHide ? 'Hide Details' : 'Show Details'}</button>
//         { this.state.showHide && <Details />}
//       </div>
//     );
//   } 

// }

// class Details extends Component {
//   render(){
//     return(
//       <div>User Details</div>
//     )
//   }
// }



export default App;
