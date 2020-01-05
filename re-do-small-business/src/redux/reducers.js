import { combineReducers } from 'redux'
import initialState from './store'


const user = (state = [], action) => {
    switch(action.type){
        case 'LOGIN':
            // return {
            //     ...state,
            //    username: action.value.username,
            //    loggedIn: true
            // }
            return Object.assign({}, state, { loggedIn: action.value})
        case 'LOGOUT':
            // return {
            //     ...state,
            //     user: null,
            //     loggedIn: false,
            // }
            return Object.assign({}, state, { loggedIn: action.value})
        default: 
            return state
    }
}

const listings = (state = [], action) => {
    switch(action.type){
        case 'ADD_LISTING':
            const lastItem = state[state.length-1]
            action.value.id = lastItem.id + 1
            return [...state, action.value]
        case 'DELETE_LISTING':
            const listings = [...state]
            listings.splice(action.value, 1)
            return listings
        default:
            return state
    }
}

export default combineReducers({initialState, user, listings})