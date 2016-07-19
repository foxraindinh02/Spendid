import React from 'react'
import { View, Text } from 'react-native'
import GlobalStyle, { SpendingItemStyle } from '../styles'

const SpendingItemRoot = React.createClass({
  render() {
    const {
      item
    } = this.props
    return (
      <View style={[GlobalStyle.mainView, SpendingItemStyle.mainView]}>
        <Text>{item.name}</Text>
      </View>
    )
  }
})

export default SpendingItemRoot
