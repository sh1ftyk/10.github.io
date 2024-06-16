import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './store/store'
import App from './components/App/App'

import './normalize.css'
import './index.scss'

const root = createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
