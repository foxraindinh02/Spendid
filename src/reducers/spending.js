import { SPENDING } from '../actions/types'

export const initialState = {
  toAdd: {
    name: '',
    amount: ''
  },
  displayList: [
    {
      id : 1,
      name: 'Jasd',
      amount: 3.3
    },
    {
      id : 2,
      name: 'Paris Store',
      amount: 4.4
    },
    {
      id : 3,
      name: 'Auchan',
      amount: 7.8
    }
  ]
}

const spending = (state, action) => {
  switch (action.type) {
  case SPENDING.CHANGE_TO_ADD_SPENDING:
    return state.setIn(['toAdd', action.prop], action.value)
  case SPENDING.ADD_SPENDING:
    const displayList = state.get('displayList')
    return state.set('displayList',
      displayList.push(action.item.set('id', displayList.size)))
  default:
    return state
  }
}

export default spending
