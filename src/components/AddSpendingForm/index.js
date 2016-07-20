import React from 'react'
import { connect } from 'react-redux'
import {
  View, TextInput, Text, TouchableOpacity, PickerIOS
} from 'react-native'

import { addSpending, changeToAddSpending } from '../../actions/spending'

import GlobalStyle from '../styles'
import styles from '../styles/AddSpendingForm'

const AddSpendingFormRoot = React.createClass({
  getInitialState() {
    return {
      value: 1,

    }
  },
  render() {
    const {
      toAddItem, addItem, changeToAddItem
    } = this.props
    return (
      <View style={[GlobalStyle.mainView, styles.mainView]}>
        <View style={styles.form}>
          <Text>
            Spent
          </Text>
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'center'}}>
            <View style={{flex:0.4}}>
              <PickerIOS
                selectedValue={this.state.value}
                onValueChange={val => this.setState({value: val})}
              >
                {Array.apply(null, {length: 100})
                  .map(Number.call, Number).map(item =>
                  <PickerIOS.Item key={item} value={item}
                    label={item.toString()}/>
                )}
              </PickerIOS>
            </View>
            <View style={{padding: 30, flex: 0.1}}>
              <Text>.</Text>
            </View>
            <View style={{flex:0.4}}>
              <PickerIOS
                selectedValue={2}
                onValueChange={val => this.setState({value: val})}
              >
                {Array.apply(null, {length: 100})
                  .map(Number.call, Number).map(item =>
                  <PickerIOS.Item key={item} value={item}
                    label={item.toString()}/>
                )}
              </PickerIOS>
            </View>
          </View>
          <TextInput
            style={styles.textInput}
            autoCorrect={false}
            onChangeText={changeToAddItem('amount')}
            value={toAddItem.get('amount')}
          />
          <Text>
            on
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={changeToAddItem('name')}
            value={toAddItem.get('name')}
          />
          <TouchableOpacity onPress={
            () => addItem(toAddItem, () => this.props.navigator.pop(), null)}
            style={styles.button}>
            <Text style={{color: 'white'}}>Add new spending</Text>
          </TouchableOpacity>
        </View>
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
)(AddSpendingFormRoot)
