import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import PublicTable from './containers/Public'
import SingList from './containers/SingList'
import Login from './containers/LoginPage'
import Add from './containers/Add'
import cookie from 'cookie'
import HomeBase from './components/HomeBase'



  const checkAuth = () => {
    
    const cookies = cookie.parse(document.cookie);

    return cookies["loggedIn"] ? true : false
  }
  
  const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => 
            checkAuth() ? <Component {...props} /> : <Redirect to="/login" />}
        />
    );
  }


  const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomeBase}/>
                <Route path="/public" component={PublicTable}/>
                <Route path="/listing/:id" component={SingList}/>
                <Route path="/login" component={Login}/>
            <ProtectedRoute path="/add" component={Add}/>
        </Switch>
    );
};

export default Router;