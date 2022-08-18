import React, { useRef } from "react"

const UseRef = () => {
  const divRef = useRef<any>(null)
  return (
    <div>
      <h1>useRef</h1>
      <div ref={divRef}>
        <style jsx>{`
          div {
            border: 1px solid #ccc;
            padding: 10px;
            width: 200px;
            height: 200px;
          }
          div:hover {
            background-color: #ccc;
          }
        `}</style>
      </div>
      <br />
      <button
        onClick={() => (divRef.current.style.backgroundColor = "#ff0000")}
      >
        Change background color
      </button>
    </div>
  )
}

export default UseRef
