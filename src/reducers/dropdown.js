import keyTypes from '../keyTypes'

const initialState = {
  data: [],
  page: 1,
}

const dropdownReducer = (state = initialState, action) => {
  switch (action.type) {
    case keyTypes.RESULTS_LIST_PAGE_FORWARDS:
      return {
        ...state,
        page: state.page + 1,
      }
    case keyTypes.RESULTS_LIST_PAGE_BACKWARDS:
      return {
        ...state,
        page: state.page - 1,
      }
    default:
      return state
  }
}

export default dropdownReducer
