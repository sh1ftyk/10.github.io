import { configureStore } from '@reduxjs/toolkit'

import blog from './reducers'

const store = configureStore({
  reducer: blog,
})

export default store
