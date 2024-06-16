import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { signin } from '../../store/blog'
import { Login } from '../visual/UserForm/UserForm'

const UserLogin = ({ authorized, signin }) => {
  if (authorized) return <Redirect to="/profile" />

  return <Login onFinish={signin} />
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
  }
}

export default connect(mapStateToProps, { signin })(UserLogin)
