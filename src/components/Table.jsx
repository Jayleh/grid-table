import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import {
  SearchState,
  SelectionState,
  IntegratedFiltering,
  IntegratedSelection,
  IntegratedSorting,
} from '@devexpress/dx-react-grid'
import {
  ColumnChooser,
  Grid,
  DragDropProvider,
  Table,
  TableHeaderRow,
  TableColumnReordering,
  TableColumnResizing,
  TableColumnVisibility,
  TableSelection,
  Toolbar,
  SearchPanel,
} from '@devexpress/dx-react-grid-material-ui'
import createRowData from '../helpers/createRowData'
import {
  generateColumns,
  generateColumnWidths,
  generateColumnOrder,
} from '../helpers/columnMaster'

import SortingStateContainer from './stateContainers/SortingStateContainer'

class App extends Component {
  state = {
    columns: [],
    columnWidths: [],
    rows: [],
    columnOrder: [],
    hiddenColumnNames: [],
    searchValue: '',
  }

  async componentDidMount() {
    const rows = await createRowData(this.props.numberRowsToGenerate)
    const { fields } = this.props
    this.setState({
      columns: generateColumns(fields),
      columnWidths: generateColumnWidths(fields),
      rows: rows,
      columnOrder: generateColumnOrder(fields),
    })
  }

  changeColumnOrder = newOrder => {
    this.setState({ columnOrder: newOrder })
  }

  changeColumnWidths = columnWidths => {
    this.setState({ columnWidths })
  }

  changeSearchValue = value => {
    this.setState({ searchValue: value })
  }

  hiddenColumnNamesChange = hiddenColumnNames => {
    this.setState({ hiddenColumnNames })
  }

  render() {
    const {
      columns,
      columnWidths,
      rows,
      columnOrder,
      searchValue,
      hiddenColumnNames,
    } = this.state
    return (
      <Paper>
        <Grid rows={rows} columns={columns}>
          <SearchState
            value={searchValue}
            onValueChange={this.changeSearchValue}
          />
          <SelectionState />
          <DragDropProvider />
          <SortingStateContainer />
          <IntegratedFiltering />
          <IntegratedSelection />
          <IntegratedSorting />
          <Table />
          <TableColumnReordering
            order={columnOrder}
            onOrderChange={this.changeColumnOrder}
          />
          <TableColumnResizing
            columnWidths={columnWidths}
            onColumnWidthsChange={this.changeColumnWidths}
          />
          <TableSelection />
          <TableColumnVisibility
            hiddenColumnNames={hiddenColumnNames}
            onHiddenColumnNamesChange={this.hiddenColumnNamesChange}
          />
          <TableHeaderRow showSortingControls />
          <Toolbar />
          <SearchPanel />
          <ColumnChooser />
        </Grid>
      </Paper>
    )
  }
}

export default App
