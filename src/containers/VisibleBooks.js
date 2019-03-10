import {
  connect
} from 'react-redux'
import Books from '../components/Books'

const mapStateToProps = state => (state)

export default connect(
  mapStateToProps
)(Books)