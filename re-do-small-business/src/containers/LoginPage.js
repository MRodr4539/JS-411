import { connect } from 'react-redux'
import LoginPage from '../components/LoginPage'
import { withRouter } from 'react-router-dom'

import {login} from '../redux/actions'

const mapDispatchToProps = (dispatch) => {
    return{
        login: (username, loggedIn) => dispatch(login(username, loggedIn))
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)

// const mapStateToProps = (state) => {
//     return{
//         user: state.user
//     };
// }

// export default withRouter(connect(mapStateToProps, null)(LoginPage))
