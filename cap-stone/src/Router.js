import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'

import AddReview from './containers/AddReview'
import CreateAcct from './containers/CreateAcct'
import LoginPage from './containers/LoginPage'
import ParkPage from './containers/ParkPage'
import SearchHome from './components/SearchHome'
import Visited from './containers/Visited'



  const checkAuth = () => {
    
    const cookies = cookie.parse(document.cookie);

    return cookies["loggedIn"] ? true : false
  }
  
  const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => 
            checkAuth() ? <Component {...props} /> : <Redirect to="/" />}
        />
    );
  }


  const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/create-acct" component={CreateAcct}/>
                <ProtectedRoute path="/search-home" component={SearchHome}/>
                <ProtectedRoute path="/add-review" component={AddReview}/>
                <ProtectedRoute path="/visited" component={Visited}/>
                <ProtectedRoute path="/park-page" component={ParkPage}/>
        </Switch>
    );
};

export default Router;