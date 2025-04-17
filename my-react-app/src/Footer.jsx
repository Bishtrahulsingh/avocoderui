import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const docs = import.meta.env.VITE_DOCS_URL;
  return (
    <footer className='m5' >
        <hr />
        <div className='flex justify-around m5' >
            <div >
                <p className='w-64'>
                    Designed and built with ❤️ by the Avocode team with the help of our contributors.<br />
                    Currently <strong>v1.0.3</strong>.
                </p>
            </div>
            <div >
                <ul style={{listStyleType:"none"}} >
                    <li className='mb2'><NavLink className={"no-underline text-gray-600 font-bold"} to="/" >Home</NavLink></li>
                    <li className='mb2'><a className='no-underline text-gray-500' href={docs}><p className='font-bold'>Docs</p></a></li>
                    <li className='mb2'><NavLink className={"no-underline text-gray-600 font-bold"} to="/getstarted">get started</NavLink></li>
                </ul>
            </div>
        </div>
        </footer>
  )
}

export default Footer
