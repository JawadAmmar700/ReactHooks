import React, { createContext } from "react"
import Child from "./child"

export const ChildContext = createContext<any>(null)

const UseContext = () => {
  return (
    <div>
      <h1>UseContext</h1>
      <ChildContext.Provider value={{ name: "jawad ammar" }}>
        <Child />
      </ChildContext.Provider>
    </div>
  )
}

export default UseContext
