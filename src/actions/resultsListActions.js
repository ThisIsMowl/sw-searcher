import keyTypes from '../keyTypes'

const increaseResultsPage = () => ({
  type: keyTypes.RESULTS_LIST_PAGE_FORWARDS,
})

const decreaseResultsPage = () => ({
  type: keyTypes.RESULTS_LIST_PAGE_BACKWARDS,
})

const movetoViewingPanel = payload => ({
  type: keyTypes.MOVE_TO_VIEWING_PANEL,
  payload,
})

const clearDropdownData = () => ({
  type: keyTypes.CLEAR_DROPDOWN,
})

export default {
  increaseResultsPage,
  decreaseResultsPage,
  movetoViewingPanel,
  clearDropdownData,
}
