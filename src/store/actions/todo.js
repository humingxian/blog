import {
  ADD_TODO,
  TOGGLE_TODO
} from '../types/todo'

export const addTodo = text => ({
  type: ADD_TODO,
  id: Math.random() + '' + new Date().getTime(),
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})
