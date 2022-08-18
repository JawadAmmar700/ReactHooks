import React, { useEffect, useState } from "react"

//TODO: alert hello world with useEffect

const UseEffect = () => {
  const [name, setName] = useState("jawad")
  useEffect(() => {
    setName("nada")
  }, [])

  return <div>{name}</div>
}

export default UseEffect
