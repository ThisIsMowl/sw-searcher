import keyTypes from '../keyTypes'

const initialState = {
  appLoaded: false,
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.APP_LOADED:
      return {
        ...state,
        appLoaded: true,
      }
    default:
      return state
  }
}

export default commonReducer
