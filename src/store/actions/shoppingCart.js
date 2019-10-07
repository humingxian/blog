import {
  ADD_GOODS
} from '../types/shoppingCart'

export const addGoods = name => ({
  type: ADD_GOODS,
  id: Math.random() + '' + new Date().getTime(),
  name
})
