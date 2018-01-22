import keyTypes from '../keyTypes'

const increaseResultsPage = () => ({
  type: keyTypes.RESULTS_LIST_PAGE_FORWARDS,
})

const decreaseResultsPage = () => ({
  type: keyTypes.RESULTS_LIST_PAGE_BACKWARDS,
})

const movetoResultsPage = payload => ({
  type: keyTypes.MOVE_TO_RESULTS_PANEL,
  payload,
})

export default {
  increaseResultsPage,
  decreaseResultsPage,
  movetoResultsPage,
}
