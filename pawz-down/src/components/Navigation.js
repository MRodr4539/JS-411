import React from "react"
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PetsIcon from '@material-ui/icons/Pets';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from 'react-router-dom'
// import './Navigation.css'



const Navigation = () => {


    return(
        <div>
            <BottomNavigation>
                <BottomNavigationAction
                  label="My Account" icon={<AccountCircleIcon fontSize='large'/>} />
                  <Link to='/'>My account</Link>
                <BottomNavigationAction 
                  label="Visited" icon={<PetsIcon fontSize='large'/>} />
                <BottomNavigationAction 
                  label="Search" icon={<SearchIcon fontSize='large' />} />
                <BottomNavigationAction 
                  label="Logout" icon={<ExitToAppIcon fontSize='large' />} />
            </BottomNavigation>
        </div>
    )
}

export default Navigation;