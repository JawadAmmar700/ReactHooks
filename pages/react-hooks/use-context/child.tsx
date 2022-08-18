import React,{useContext} from "react"
import {ChildContext} from "./index"

const Child = () => {
    const {name} = useContext(ChildContext)
  return (
    <div>
      <h1>Child name: {name}</h1>
    </div>
  )
}

export default Child
