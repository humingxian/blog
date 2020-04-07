import React, { useState, useEffect } from 'react'

const TestUseEffect = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `you clicked ${count} times`
    console.log('我是effect操作会执行的代码')
    return () => {
      console.log('我是清除effect操作会执行的代码')
    }
  })
  return (
    <div onClick={() => setCount(count + 1)}>{`你点了${count}下`}</div>
  )
}

export default TestUseEffect
TestUseEffect.displayName = 'TestUseEffect'
