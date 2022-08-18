import React, { useState } from "react"

//TODO: counter example

const UseState = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <span>{count}</span>
    </div>
  )
}

export default UseState
