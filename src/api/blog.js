
import { apiGet, apiPost } from '../request/index'

// 获取博客列表接口
export const getBlogList = params => {
  return apiGet('/api/blog/list', {
    ...params
  })
}

// 获取详情接口
export const getBlogDetail = id => {
  return apiGet('/api/blog/detail', {
    id
  })
}

// 新增博客接口
export const addBlog = params => {
  return apiPost('/api/blog/add', {
    ...params
  })
}

// 更新博客接口
export const updateBlog = params => {
  return apiPost('/api/blog/update', {
    ...params
  })
}

// 删除博客接口
export const delBlog = params => {
  return apiPost('/api/blog/del', {
    ...params
  })
}
