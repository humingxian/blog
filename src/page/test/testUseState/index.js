import React, { useState } from 'react'

const TestUseState = () => {
  const [count, setCount] = useState(0)
  return (
    <div onClick={() => setCount(count + 1)}>{`你点了${count}下`}</div>
  )
}

export default TestUseState
