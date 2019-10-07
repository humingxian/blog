
import { apiPost } from '../request/index'

export const getList = (obj) => {
  return apiPost('/omall/mallOrder/h5/v1/read/querySplitMallOrderListByUser', {
    ...obj
  })
}
