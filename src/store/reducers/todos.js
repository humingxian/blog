import {
  ADD_TODO,
  TOGGLE_TODO
} from '../types/todo'

import { storage } from '../../utils/storage/storage'

const initState = window.localStorage.getItem('store') ? JSON.parse(window.localStorage.getItem('store')).todos || [] : []

// 初始化数据存入localStorage
storage('todos', initState)

const todos = (state = initState, action) => {
  switch (action.type) { // 通过传入不同的type,去执行相应的操作
    case ADD_TODO:
      return storage('todos', [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ])
    case TOGGLE_TODO:
      return storage('todos', state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      ))
    default:
      return state
  }
}

export default todos
