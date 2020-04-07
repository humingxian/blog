import { useState, useEffect } from 'react'
function useCustomerHook (state) {
  const [myname, setMyname] = useState('hudada')
  useEffect(() => {
    if (!name) {
      setMyname('huyihui')
    }
    console.log(myname + state.toString())
  })
  return state
}

export default useCustomerHook
