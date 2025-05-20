import React from 'react'
import NavBar from './NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <main className='quizOutlet'>
      <Outlet />
      <NavBar />
    </main>
    

    </>
  )
}

export default Layout