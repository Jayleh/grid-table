import React from 'react'
import { connect } from 'react-redux'
import { SortingState } from '@devexpress/dx-react-grid'
import { SORTING_STATE_CHANGE_ACTION } from '../../actions/types'
// import { sorting } from '../../actions'

const SortingStateContainer = ({ sorting, onSortingChange }) => (
  <SortingState sorting={sorting} onSortingChange={onSortingChange} />
)

const mapStateToProps = ({ sorting }) => ({
  sorting: sorting.data,
})

const mapDispatchToProps = dispatch => ({
  onSortingChange: sorting =>
    dispatch({
      type: SORTING_STATE_CHANGE_ACTION,
      payload: sorting,
    }),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  // { sorting },
)(SortingStateContainer)
