import { StyleSheet } from 'react-native'

import { Colors } from './index.js'

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 60
  },
  form: {
    margin: 10
  },
  textInput: {
    height: 40,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    padding: 0
  },
  button: {
    backgroundColor: Colors.a400,
    color: 'white',
    padding: 10,
    alignItems: 'center',
    marginTop: 10
  }
})

export default styles
