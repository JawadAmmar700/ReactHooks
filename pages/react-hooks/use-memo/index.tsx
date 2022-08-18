import React, { useMemo, useState } from "react"

const UseMemo = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const isEven = useMemo(() => {
    return count % 2 === 0
  }, [])

  return (
    <div>
      <h1>useMemo</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      {/* <p>Is Even: {isEven ? "Yes" : "No"}</p> */}
      {isEven ? <p>Is Even: Yes</p> : <p>Is Even: No</p>}
    </div>
  )
}

export default UseMemo
