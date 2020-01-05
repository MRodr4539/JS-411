import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
// import { withRouter} from 'react-router-dom'
import {logout} from '../redux/actions'

const mapStateToProps = state => ({
    user: state.user
})


const mapDispatchToProps = (dispatch) => {
    return{
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)


// export default withRouter(connect(mapStateToProps, null)(Navigation))