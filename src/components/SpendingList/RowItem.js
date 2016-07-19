import React from 'react'
import { View, Text } from 'react-native'
import { SpendingListStyle } from '../styles'

const RowItem = React.createClass({
  render() {
    const {
      row
    } = this.props
    return (
      <View style={SpendingListStyle.row}>
        <Text>
          <Text style={SpendingListStyle.amountLabel}>{row.amount}</Text>
          <Text style={SpendingListStyle.currencyLabel}> €</Text>
        </Text>
        <Text>{row.name}</Text>
      </View>
    )
  }
})

export default RowItem
