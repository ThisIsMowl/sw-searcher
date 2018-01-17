import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import common from './reducers/common'
import dropdown from './reducers/dropdown'
import _middleware from './middleware'

const reducer = combineReducers({
  common,
  dropdown,
})

const middleware = applyMiddleware(_middleware.PromiseMiddleware)

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* eslint-enable */

const store = createStore(
  reducer,
  middleware,
  /* preloadedState, */
  composeEnhancers(middleware),
)

export default store
