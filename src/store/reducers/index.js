import { combineReducers } from 'redux'
import todos from './todos'
import shoppingCart from './shoppingCart'

export default combineReducers({
  todos, shoppingCart
})
