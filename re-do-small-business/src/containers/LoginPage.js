import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'

import {login} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return{
        login: (username, loggedIn) => dispatch(login(username, loggedIn))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)


