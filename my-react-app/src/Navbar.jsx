import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from 'avocode-ui-library/src/components/Button'
import DarkModeToggle from "avocode-ui-library/src/components/DarkModeToggle"
const Navbar = () => {
  const docs = import.meta.env.VITE_DOCS_URL;
  return (
    <div className=' flex justify-around items-center gap-5'> 
        <NavLink className={""} to={"/"}>
            <img width={80} src="avocadologo.png" alt="" />
        </NavLink>
        <div className='flex items-center justify-around gap-3 md:w-1/3'>
          <a className='no-underline text-gray-500' href={docs}>
            <p className='font-bold'>Docs</p>
          </a>
          <DarkModeToggle/>
          <NavLink to={"/getstarted"}>
              <Button className='bg-black text-white p2 pointer'>Get Started</Button>
          </NavLink>
        </div>
    </div>
  )
}

export default Navbar