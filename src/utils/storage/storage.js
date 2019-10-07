export function storage (key, value) {
  // 将原先的store里面的数据取出来
  const initDefaultStore = JSON.parse(window.localStorage.getItem('store')) || {}

  // 合并原先的store数据并更新传过来的数据
  window.localStorage.setItem('store', JSON.stringify({
    ...initDefaultStore,
    [key]: value
  }))

  console.log('--->', JSON.parse(window.localStorage.getItem('store')), '<---')

  return value
}
