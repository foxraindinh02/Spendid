import React from 'react'
import { connect } from 'react-redux'
import { View, TextInput, Text, TouchableOpacity } from 'react-native'

import { addSpending, changeToAddSpending } from '../../actions/spending'

const AddSpendingForm = React.createClass({
  render() {
    const {
      toAddItem, addItem, changeToAddItem
    } = this.props
    return (
      <View style={{marginTop: 100, flex: 0.5}}>
        <Text>
          Spent
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          autoCorrect={false}
          onChangeText={changeToAddItem('amount')}
          value={toAddItem.get('amount')}
        />
        <Text>
          on
        </Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={changeToAddItem('name')}
          value={toAddItem.get('name')}
        />
        <TouchableOpacity onPress={
          () => addItem(toAddItem, () => this.props.navigator.pop(), null)}>
          <Text>Add new spending</Text>
        </TouchableOpacity>
      </View>
    )
  }
})

const mapStateToProps = state => ({
  toAddItem: state.getIn(['spending', 'toAdd'])
})

const mapDispatchToProps = dispatch => ({
  addItem: (item, callback, callbackError) =>
    dispatch(addSpending(item, callback, callbackError)),
  changeToAddItem: prop => text => dispatch(changeToAddSpending(prop, text))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddSpendingForm)
