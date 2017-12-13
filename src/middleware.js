import keyTypes from './keyTypes'

// Smaller helper function to determine if item is a promise.

const isPromise = v => (v && typeof v.then === 'function')

// Middleware for handling promises.

const PromiseMiddleware = store => next => (action) => {
  if (isPromise(action.payload)) {
    store.dispatch({
      type: keyTypes.ASYNC_START,
      subtype: action.type,
    })

    action.payload
      .then((res) => {
        action.payload = res
        store.dispatch(action)
      })
      .catch((err) => {
        action.error = true
        action.payload = err
        store.dispatch(action)
      })

    return
  }

  next(action)
}

export default {
  PromiseMiddleware,
}
