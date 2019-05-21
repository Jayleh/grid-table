import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Table from './components/Table'

const VIRTUAL_PAGE_SIZE = 50
const numberRowsToGenerate = 2750
const fields = [
  { field: 'id' },
  { field: 'date' },
  { field: 'firstName' },
  { field: 'lastName' },
  { field: 'email' },
]

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <Table
      fields={fields}
      numberRowsToGenerate={numberRowsToGenerate}
      virtualPageSize={VIRTUAL_PAGE_SIZE}
    />
  </Provider>,
  document.querySelector('#root'),
)
