import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signin } from '../../store/reducers'
import { Login } from '../../components/UserForm/UserForm'

const UserLogin = ({ authorized, signin }) => {
  if (authorized) return <Redirect to="/" />

  return <Login onFinish={signin} />
}
UserLogin.defaultProps = {
  authorized: false,
  signin: () => {},
}
UserLogin.propTypes = {
  authorized: propTypes.bool,
  signin: propTypes.func,
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
  }
}

export default connect(mapStateToProps, { signin })(UserLogin)
