import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from './Logo'
import Search from './Search'

const Navbar = () => {
  const [query, setQuery] = useState("");

  const NavItems = [
    {
      title : "Home",
      isActive : true,
      path : '/'
    },
    {
      title : "About",
      isActive : false,
      path : '/about'
    },
    {
      title : "Profile",
      isActive : false,
      path : '/profile'
    },
  ]
  return (
    <>
      <div className="nav w-full text-lg py-3 px-10 bg-gray-200/60 fixed top-0 left-0 z-50 backdrop-blur-lg flex justify-between items-center gap-2">
        <Link to={'/'} className="text-2xl w-[80px]">
          <Logo />
        </Link>
        <Search query={query} setQuery={setQuery} />
        <div className='flex gap-10 items-center'>
          {NavItems.map((item)=>(
            <NavLink onClick={()=>{}} className={`${item.isActive && 'text-blue-500'}`} to={item.path} key={item.title}>{item.title}</NavLink>
          ))}
        </div>
      </div>
    </>
  )
}

export default Navbar