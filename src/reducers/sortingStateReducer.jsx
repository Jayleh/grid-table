import { SORTING_STATE_CHANGE_ACTION } from '../actions/types'
import Immutable from 'seamless-immutable'

const initialSortingState = {
  data: Immutable([]),
}

export default (state = initialSortingState, action) => {
  const { type, payload } = action
  switch (type) {
    case SORTING_STATE_CHANGE_ACTION: {
      return { data: Immutable(payload) }
    }
    default:
      return state
  }
}
