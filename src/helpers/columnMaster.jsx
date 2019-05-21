const defaultColumnProps = {
  width: 100,
}

const columnLookup = {
  id: { name: 'id', title: 'Id' },
  date: { name: 'date', title: 'Date' },
  firstName: { name: 'firstName', title: 'First Name' },
  lastName: { name: 'lastName', title: 'Last Name' },
  email: { name: 'email', title: 'Email' },
}

export const generateColumns = fields => {
  const columns = []
  fields.forEach(({ field }) => columns.push(columnLookup[field]))
  return columns
}

export const generateColumnWidths = fields => {
  const columnWidths = []
  fields.forEach(({ field }) => {
    const columnWidthConfig = {}
    columnWidthConfig['columnName'] = field
    columnWidths.push(columnWidthConfig)
  })
  return columnWidths.map(cw => ({ ...cw, ...defaultColumnProps }))
}

export const generateColumnOrder = fields => {
  const columnOrder = []
  fields.forEach(({ field }) => {
    columnOrder.push(columnLookup[field].name)
  })
  return columnOrder
}
