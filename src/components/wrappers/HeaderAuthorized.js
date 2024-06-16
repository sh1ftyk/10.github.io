import { connect } from 'react-redux'

import { logOut } from '../../store/blog'
import Header from '../visual/Header/Header'

const HeaderAuthorized = ({ username, image, logOut }) => {
  return <Header username={username} image={image} logOut={logOut} authorized />
}

const mapStateToProps = (state) => {
  return {
    username: state?.user?.username,
    image: state?.user?.image,
  }
}

export default connect(mapStateToProps, { logOut })(HeaderAuthorized)
