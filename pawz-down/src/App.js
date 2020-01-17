import React from 'react';
import './App.css';
import Router from './Router';
import {BrowserRouter} from 'react-router-dom';
import Navigation from './components/Navigation';
import {Provider} from 'react-redux'
// import store from './redux/store'


import AddReview from './components/AddReview'

{/* <Provider store={store}>  */}

function App() {
  return (
    <div className="App">
      
    <AddReview/>

        {/* <Provider>
          <BrowserRouter>
            <Navigation/>
            <Router/>
          </BrowserRouter>
        </Provider> */}
         
        
      
    </div>
  );
}

export default App;
