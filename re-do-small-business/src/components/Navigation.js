import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
  

    const handleLogout = (event) => {
      event.preventDefault();
      document.cookie = 'loggedIn='
      window.location.replace('/')
    }
  
  
      return (
        <AppBar position="relative">
          <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1" }}>
            Austin Small Business
          </Typography>
            <ul className="nav-list">
              <li className="nav-list-item">
                <Link to="/" >Listings</Link>
              </li>
              {document.cookie == 'loggedIn=true' ? (
                <>
                    <li className="nav-list-item">
                    <Link to="/add" >Add</Link>
                  </li>
                  <li className='nav-list-item'
                    onClick={handleLogout}>
                    <Link to='/'>Logout</Link>
                  </li>
                </>
              ):(
                <li className="nav-list-item"
                  >
                <Link to="/login">Login</Link>
              </li>
              )}
            </ul>
          </Toolbar>
        </AppBar>
      )
  }
  
  export default Navigation;