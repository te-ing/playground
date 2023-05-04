import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>HomePage
      <h3>It's Build File</h3>
      <Link to="/first">first</Link>
      <Link to="/second">second</Link>
      <Link to="/build">build</Link>
    </div>
  )
}
