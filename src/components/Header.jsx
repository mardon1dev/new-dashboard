import React, { useContext } from 'react'
import { NotificationIcon, SearchIcon } from '../assets/icons/icons'

import Joe from "../assets/images/joe.png"
import { useLocation } from 'react-router-dom'
import { Context } from '../context/Context'


const Header = () => {
    const location = useLocation()

    const {navlinks} = useContext(Context)

    function formatRoute(route) {
        return navlinks.find(item => item.path == route)?.title ?? "Not Found";
    }      


  return (
    <div className='w-full flex justify-between mb-[54px]'>
        <h1 className='text-2xl leading-7 text-left font-bold'>
            {formatRoute(location.pathname)}
        </h1>
        <div className='flex items-center gap-6'>
            <div className='flex items-center gap-6'>
                <SearchIcon />
                <NotificationIcon />
            </div>
            <div className='flex items-center gap-[14px] pl-8 relative before:absolute before:top-0 before:bottom-0 before:left-0 before:my-auto before:w-[1.5px] before:h-8 before:bg-[#DFE0EB]'>
                <strong>Jones Ferdinand</strong>
                <div className='w-11 h-11 flex items-center justify-center border-[1.5px] border-[#DFE0EB] rounded-full'>
                    <img className='rounded-full' src={Joe} alt="Joe Ferdinand" width={"40"} height={"40"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header