import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import rootReducer from './reducers'

const loggerMiddleware = createLogger({
  stateTransformer: state => state && state.toJS()
})

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      loggerMiddleware
    )
  )

  return store
}
