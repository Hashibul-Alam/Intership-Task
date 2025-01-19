import React from 'react'
import Sidebar from '../Components/Sidebar'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar/> 
    <div className='w-full ml-16 md:ml-56'>
        <Header/>
        <Outlet/>
    </div>
    </div>
    </>
  )
}

export default Layout