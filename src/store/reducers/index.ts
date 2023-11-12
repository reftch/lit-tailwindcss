import { AnyAction } from "redux"

export type CounterState = {
  counter: number
}

export const initialState: CounterState = {
  counter: 0
} 

export const counterReducer = (state = initialState, action: AnyAction) => {
  if (typeof state === 'undefined') {
    return 0
  }

  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}