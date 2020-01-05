
export const login = () => {
    return{
        type:'LOGIN',
        value: true
        // value: { username, loggedIn}
    }
}

export const logout = () => {
    return{
        type: 'LOGOUT',
        value: false  //*****//
    }
}


export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const deleteListing = (index) => {
    return{
        type: "DELETE_LISTING",
        value: index
    }
}