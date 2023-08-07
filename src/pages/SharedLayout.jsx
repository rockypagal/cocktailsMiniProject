import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../components/Nav/Nav'
const SharedLayout = () => {
  return (<>
    
    <Nav></Nav>
    <Outlet />
  </>
  )
}

export default SharedLayout