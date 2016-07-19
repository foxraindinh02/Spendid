import React from 'react'
import { View, Text } from 'react-native'

const SpendingItemRoot = React.createClass({
  render() {
    const {
      item
    } = this.props
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    )
  }
})

export default SpendingItemRoot
