import { connect } from 'react-redux'
import PublicTable from '../components/Public'
import { deleteListing } from '../redux/actions'

const mapStateToProps = (state) => {
    // console.log(state)
    return{
        user: state.user,
        listings: state.listings
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteListing: index => dispatch(deleteListing(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PublicTable)