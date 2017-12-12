import { createStore, combineReducers, applyMiddleware } from 'redux'
import common from './reducers/common'
import _middleware from './middleware'

const reducer = combineReducers({
  common,
})

const middleware = applyMiddleware([
  _middleware.PromiseMiddleware,
])

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  middleware,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

export default store
