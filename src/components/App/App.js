import { useEffect } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Layout, ConfigProvider } from 'antd'
import cn from 'classnames'

import HeaderAuthorized from '../../pages/HeaderAuthorized/HeaderAuthorized'
import HeaderUnauthorized from '../../pages/HeaderUnauthorized/HeaderUnauthorized'
import PostListWrapper from '../../pages/PostListWrapper/PostListWrapper'
import PostView from '../../pages/PostView/PostView'
import PostEdit from '../../pages/PostEdit/PostEdit'
import PostCreate from '../../pages/PostCreate/PostCreate'
import UserLogin from '../../pages/UserLogin/UserLogin'
import UserRegister from '../../pages/UserRegister/UserRegister'
import UserEdit from '../../pages/UserEdit/UserEdit'
import { getProfile } from '../../store/reducers'

import css from './App.module.scss'
import 'react-toastify/dist/ReactToastify.css'

const App = ({ getProfile, authorized, loading }) => {
  useEffect(() => {
    getProfile()
  }, [authorized])

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#00B96B' } }}>
      <Router>
        <ToastContainer position="top-right" draggable={false} pauseOnHover theme="light" />
        <Layout className={cn(css.App, { [`${css.isLoading}`]: loading })}>
          <Layout.Header className={css.Header}>
            {authorized ? <HeaderAuthorized /> : <HeaderUnauthorized />}
          </Layout.Header>
          <Layout.Content className={css.Content}>
            <Switch>
              <Route exact path={['/', '/articles/']} component={PostListWrapper} />
              <Route exact path="/articles/:slug/" render={(router) => <PostView {...router} />} />
              <Route exact path="/articles/:slug/edit" render={(router) => <PostEdit {...router} />} />
              <Route exact path="/new-article" render={(router) => <PostCreate {...router} />} />
              <Route exact path="/sign-in" component={UserLogin} />
              <Route exact path="/sign-up" component={UserRegister} />
              <Route exact path="/profile" component={UserEdit} />
              <Route path="*">
                <h1>404 – Page not found</h1>
              </Route>
            </Switch>
          </Layout.Content>
        </Layout>
      </Router>
    </ConfigProvider>
  )
}

App.defaultProps = {
  getProfile: () => {},
  authorized: false,
  loading: false,
  error: '',
}
App.propTypes = {
  getProfile: propTypes.func,
  authorized: propTypes.bool,
  loading: propTypes.bool,
  error: propTypes.string,
}

const mapStateToProps = (state) => {
  return {
    authorized: state.authorized,
    loading: state.loading,
  }
}

export default connect(mapStateToProps, { getProfile })(App)
