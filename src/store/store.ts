import { combineReducers, legacy_createStore as createStore }  from 'redux'
import { counterReducer } from './reducers'

export type EntityState = {}

export type CounterState = EntityState & {
  counter: number
}

export const store = createStore(
  combineReducers({
    counter: counterReducer
  })
)
