import { SPENDING } from './types.js'

export const addSpending = item => (
  {
    type: SPENDING.ADD_SPENDING,
    item
  }
)

export const removeSpending = id => (
  {
    type: SPENDING.REMOVE_SPENDING,
    id
  }
)
