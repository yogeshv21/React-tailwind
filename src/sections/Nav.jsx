import React from 'react'
import { headerLogo } from '../assets/images'
import { navLinks } from '../constents'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 z-10 w-full'>
       <nav className='flex justify-between max-container '>
          <a href="/">
             <img src={headerLogo} alt='Brand-logo' height={29} width={130}/>
          </a>
          <ul className='hidden flex-1 justify-center items-center gap-16 lg:flex'>
             {
              navLinks.map((item)=>(
                <li key={item.label}>
                   <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-gray '>{item.label}</a>
                </li>
              ))
             }
          </ul>
          <div className='cursor-pointer lg:hidden'>
              <img src={hamburger} alt='Hamburger' height={25} width={25}/>
          </div>
       </nav>
    </header>
  )
}

export default Nav
