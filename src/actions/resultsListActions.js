import keyTypes from '../keyTypes'

const increaseResultsPage = () => ({
  type: keyTypes.RESULTS_LIST_PAGE_FORWARDS,
})

const decreaseResultsPage = () => ({
  type: keyTypes.RESULTS_LIST_PAGE_BACKWARDS,
})

export default {
  increaseResultsPage,
  decreaseResultsPage,
}
