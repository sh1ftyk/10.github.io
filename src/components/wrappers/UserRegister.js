import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { register } from '../../store/blog'
import { Signup } from '../visual/UserForm/UserForm'

const UserRegister = ({ authorized, register }) => {
  if (authorized) return <Redirect to="/profile" />

  return <Signup onFinish={register} />
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
  }
}

export default connect(mapStateToProps, { register })(UserRegister)
