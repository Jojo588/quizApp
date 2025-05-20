import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const NavBar = () => {
  const resolvedPath = useResolvedPath('/')
  const isHome = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <>
      {isHome && <Link to="/quiz" className="startButton">Start</Link>}
    </>
  )
}

export default NavBar
