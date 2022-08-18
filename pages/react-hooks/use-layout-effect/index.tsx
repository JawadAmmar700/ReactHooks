import React, { useEffect, useLayoutEffect } from "react"

const UseLayoutEffect = () => {
  useEffect(() => {
    console.log("useEffect")
  }, [])

  useLayoutEffect(() => {
    console.log("useLayoutEffect")
  }, [])

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <p>open the console to spot the difference</p>
    </div>
  )
}

export default UseLayoutEffect
