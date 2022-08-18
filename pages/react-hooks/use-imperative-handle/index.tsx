import React from "react"
import Child from "./child"

const useImperativeHandle = () => {
  const childRef = React.useRef<any>(null)
  return (
    <div>
      <h1>Parent</h1>
      <button onClick={() => childRef.current.toggle()}>toggle Parent</button>
      <Child ref={childRef} />
    </div>
  )
}

export default useImperativeHandle
