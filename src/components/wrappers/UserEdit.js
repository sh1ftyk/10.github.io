import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { getProfile, updateUser } from '../../store/blog'
import { Edit } from '../visual/UserForm/UserForm'

const UserEdit = ({ authorized, userData, getProfile, updateUser }) => {
  useEffect(() => {
    if (authorized) getProfile()
  }, [])

  if (!authorized) return <Redirect to="/sign-in" />
  return <Edit {...userData} onFinish={updateUser} />
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
    userData: state.user,
  }
}

export default connect(mapStateToProps, { getProfile, updateUser })(UserEdit)
