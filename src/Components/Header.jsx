import React from 'react'
import {CiSearch}  from "react-icons/ci";
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChevronDownOutline } from "react-icons/io5";

const Header = () => {
  
  return (
    <div>
        <header className="flex items-center justify-between px-6 py-3 bg-white border-b">
    
      {/* Search Bar */}
      <div className="hidden md:flex md:w-[334px] md:h-[38px] items-center border-2 border-primary hover:border-green-500 duration-300 rounded-[4px] px-3 py-1">
        <CiSearch className="text-primary mr-1 size-[18px] "/>
        <input
          type="text"
          placeholder="Search" 
          className="outline-none text-[13px] px-[11px] py-[7px] "

        />
        <span className="text-primary rounded-[2px] bg-primary/15 ml-16 size-[18px] flex items-center justify-center font-medium "> ⌘</span>
        <span className="text-primary rounded-[2px] bg-primary/15 ml-2 size-[18px] flex items-center justify-center font-medium "> F</span>
      </div>

      {/* User Section */}
      <div className="flex items-center  space-x-5">
        {/* Notification Icon */}
        <button className="border border-[#E7EAE9] size-[32px] rounded">
            <Box sx={{ color: 'action.active' }}>
          <Badge color='error' variant="dot">
           <IoNotificationsOutline/>
          </Badge>
        </Box>
        </button>

        {/* Profile */}
        <div className="flex items-center space-x-4">
          <img
            src="/profile.png"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <p className="text-[13px] font-medium flex items-center gap-2 cursor-pointer hover:scale-105 duration-150">Harsh <span><IoChevronDownOutline className='size-[14px]'/> </span> </p>
        </div>
      </div>
    </header>
    </div>
  )
}

export default Header