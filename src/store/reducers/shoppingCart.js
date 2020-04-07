import {
  ADD_GOODS
} from '../types/shoppingCart'

import { storage } from '../../utils/storage/storage'

const initState = window.localStorage.getItem('store') ? JSON.parse(window.localStorage.getItem('store')).shoppingCart || [] : []

// 初始化数据存入localStorage
storage('shoppingCart', initState)

const shoppingCart = (state = initState, action) => {
  switch (action.type) { // 通过传入不同的type,去执行相应的操作
    case ADD_GOODS:
      return storage('shoppingCart', [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ])
    default:
      return state
  }
}

export default shoppingCart
