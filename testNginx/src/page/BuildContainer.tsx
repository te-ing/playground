import { Link, Outlet } from 'react-router-dom'

export const BuildContainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: "column", gap: "10px" }}>
      <h3>Build 컨테이너 안에 있습니다.</h3>
      <h2>3000번 포트입니다</h2>
      <Link to="/">HOME</Link>
      <Link to="./first">first</Link>
      <Link to="./second">second</Link>
      <Outlet />
    </div>
  )
}
