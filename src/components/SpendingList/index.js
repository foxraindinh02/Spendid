import React from 'react'
import { NavigatorIOS } from 'react-native'

import SpendingList from './SpendingList'
import AddSpendingForm from '../AddSpendingForm'

const SpendingListWrapper = React.createClass({
  onRightButtonPress() {
    this.refs.nav.push({
      component: AddSpendingForm,
      title: 'Add new item'
    })
  },
  render() {
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: SpendingList,
          title: 'Last Spendings',
          rightButtonTitle: 'Add',
          onRightButtonPress: this.onRightButtonPress
        }}
        style={{flex: 1}}
      />
    )
  }
})

export default SpendingListWrapper
