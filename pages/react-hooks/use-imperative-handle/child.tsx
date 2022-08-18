import React, { forwardRef, useImperativeHandle } from "react"

const Child = forwardRef((props, ref) => {
  const [boo, setBoo] = React.useState(false)

  useImperativeHandle(
    ref,
    () => {
      return {
        toggle: () => setBoo(!boo),
      }
    },
    [boo]
  )

  return (
    <div>
      <h1>Child</h1>
      <button onClick={() => setBoo(!boo)}>toggle Child</button>
      {boo ? "true" : "false"}
    </div>
  )
})

export default Child
