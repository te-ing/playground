import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0)
  const handleClickCount = () => {
    setCount((prev)=> prev+1)
  }

  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <div>Counter Number : {count}</div>
      <button onClick={handleClickCount}>+ 1</button>
    </div>
  )
}