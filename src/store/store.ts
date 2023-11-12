import { combineReducers, legacy_createStore as createStore }  from 'redux'
import { counterReducer } from './reducers'

export const store = createStore(
  combineReducers({
    counter: counterReducer
  })
)
