import React from 'react'
import { NavLink } from 'react-router-dom'
const NavbarLink = ({item}) => {
  return (
    <li>
        <NavLink to={item.path} className="flex relative items-center gap-6 text-[#A4A6B3] pl-8 py-[18px] text-base leading-5 text-left hover:bg-[#A4A6B3]/5 ">
            {item.icon}
            <span>{item.title}</span>
        </NavLink>
    </li>
  )
}

export default NavbarLink