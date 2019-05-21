import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'

import Table from './components/Table'

const numberRowsToGenerate = 50
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
    <Table fields={fields} numberRowsToGenerate={numberRowsToGenerate} />
  </Provider>,
  document.querySelector('#root'),
)
