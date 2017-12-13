import keyTypes from '../keyTypes'

const initialState = {
  appLoaded: false,
  data: [],
}

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.APP_LOADED:
      return {
        ...state,
        appLoaded: true,
      }
    case keyTypes.LOAD_TEST:
      return {
        ...state,
        data: action.error ? [] : action.payload,
      }
    default:
      return state
  }
}

export default commonReducer
