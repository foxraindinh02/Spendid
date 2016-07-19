import React from 'react'
import { connect } from 'react-redux'
import {
  ListView, Text, View, StyleSheet, TouchableOpacity
} from 'react-native'

import SpendingItem from '../SpendingItem'

const styles = StyleSheet.create({
  row: {
    marginTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  }
})

const SpendingList = React.createClass({
  navigateToItem(row) {
    const nextRoute = {
      component: SpendingItem,
      title: row.name,
      passProps: { item: row }
    }
    this.props.navigator.push(nextRoute)
  },
  render() {
    const {
      spendingList
    } = this.props
    const dataSource = new ListView.DataSource(
      {
        rowHasChanged: (r1, r2) => r1.id !== r2.id
      }
    ).cloneWithRows(spendingList.toJS())
    return (
      <ListView dataSource={dataSource} renderRow={
        row => (
          <TouchableOpacity onPress={() => this.navigateToItem(row)}>
            <View style={styles.row}>
              <Text>{row.name}</Text>
              <Text>{row.amount}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    )
  }
})

const mapStateToProps = state => (
  {
    spendingList: state.getIn(['spending', 'displayList'])
  }
)
const SpendingListContainer = connect(
  mapStateToProps
)(SpendingList)

export default SpendingListContainer
