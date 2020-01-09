import { combineReducers } from 'redux'
import initialState from './store'


const user = (state = [], action) => {
    switch(action.type){
        case 'LOGIN':
          
            return Object.assign({}, state, { loggedIn: action.value})
        case 'LOGOUT':
           
            return Object.assign({}, state, { loggedIn: action.value})
        default: 
            return state
    }
}

const posting = (state = [], action) => {
    switch(action.type){
        case 'ADD_POSTING':
            const lastItem = state[state.length-1]
            action.value.id = lastItem.id + 1
            return [...state, action.value]
        case 'DELETE_POSTING':
            const posting = [...state]
            posting.splice(action.value, 1)
            return posting
        default:
            return state
    }
}

export default combineReducers({initialState, user, posting})