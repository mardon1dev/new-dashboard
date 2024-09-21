import React, { useContext } from 'react'
import NavbarLink from './NavbarLink'
import { Link } from 'react-router-dom'
import Logo from "../assets/images/logo.svg"
import { Context } from '../context/Context'
const Navbar = () => {
    const {navlinks} = useContext(Context)
  return (
    <div className='max-w-[255px] w-full bg-[#363740] h-screen sticky top-0 left-0 pt-[37px]'>
        <Link className='flex pl-8 items-center gap-3 text-lg leading-6 text-left text-[#A4A6B3]/70 font-bold' to="/">
            <img src={Logo} alt="Logo" width={"32"} height={"32"} />
            <span>Dashboard Kit</span>
        </Link>
        <ul className='mt-[59px]'>
            {navlinks.map((item, index) => (
                <NavbarLink key={index} item={item} />
            ))}
        </ul>
    </div>
  )
}

export default Navbar