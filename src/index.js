import React from 'react'
import { Provider } from 'react-redux'
import { NavigatorIOS } from 'react-native'

import SpendingList from './components/SpendingList'
import AddSpendingForm from './components/AddSpendingForm'
import configureStore from './configureStore'
import initialState from './reducers/initialState'

const App = React.createClass({
  handleNavigationRequest() {
    this.refs.nav.push({
      component: AddSpendingForm,
      title: 'Genius'
    })
  },
  render() {
    const store = configureStore(initialState)
    return (
      <Provider store={store}>
        <NavigatorIOS
          initialRoute={{
            component: SpendingList,
            title: 'Last Spendings',
            rightButtonTitle: 'Add',
            onRightButtonPress: () => this.handleNavigationRequest()
          }}
        />
      </Provider>
    )
  }
})

export default App
