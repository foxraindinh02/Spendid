import { StyleSheet } from 'react-native'

import { Colors } from './index'

const styles = StyleSheet.create({
  mainView: {
    marginTop: 60
  },
  form: {
    margin: 10,
    flex: 1
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 0
  },
  button: {
    backgroundColor: Colors.a400,
    padding: 10,
    alignItems: 'center',
    marginTop: 10
  }
})

export default styles
