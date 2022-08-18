import React, { useReducer } from "react"

const reducer = (state: number, action: any) => {
  switch (action.type) {
    case "increment":
      return state + 1
    case "decrement":
      return state - 1
    default:
      return state
  }
}

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      <h1>useReducer</h1>
      <button onClick={() => dispatch({ type: "increment" })}>increment</button>
      {count}
      <button onClick={() => dispatch({ type: "decrement" })}>decrement</button>
    </div>
  )
}

export default UseReducer
