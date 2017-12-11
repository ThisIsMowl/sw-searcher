import { createStore, combineReducers } from 'redux'
import common from './reducers/common'

const reducer = combineReducers({
  common,
})

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer,
  /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
/* eslint-enable */

export default store
