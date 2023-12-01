import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Logo from '../assets/Logo.png'
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed z-10 flex items-center justify-between w-full px-4 py-2 text-lg bg-slate-100'>
      <div className='ml-4'>
        <Link to='Home' smooth={true} duration={500}>
          <img src={Logo} alt="Logo Image" style={{width: '175px'}} className='cursor-pointer'/>
        </Link>
      </div>
      
      {/* Navigation Bar Menu */}
        <ul className='hidden mr-4 space-x-10 font-medium lg:flex text-slate-700'>
          <li className='cursor-pointer hover:text-[#e66a55]'>
            <Link to='Home' smooth={true} duration={500}>Beranda</Link>
          </li>
          <li className='cursor-pointer hover:text-[#e66a55]'>
            <Link to='About' smooth={true} duration={500}>Tentang Kami</Link>
          </li>
          <li className='cursor-pointer hover:text-[#e66a55]'>
            <Link to='Product' smooth={true} duration={500} offset={-95}>Produk</Link>
          </li>
          <li className='cursor-pointer hover:text-[#e66a55]'>
            <Link to='Contact' smooth={true} duration={500} offset={-94}>Kontak</Link>
          </li>
        </ul>
      {/* Navigation Bar Menu End */}

      {/* Stacks */}
      <div onClick={handleClick} className='z-10 px-4 lg:hidden'>
        {!nav ? <FaBars /> : <FaTimes/>}
      </div>
      {/* Stacks End */}

      {/* Mobile Navigation Bar Menu */}
        <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen bg-slate-100 text-slate-700 font-medium'}>
            <li className='py-6 text-4xl'>
              <Link to='Home' smooth={true} duration={500} onClick={handleClick}>Beranda</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to='About' smooth={true} duration={500} offset={-75} onClick={handleClick}>Tentang Kami</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to='Product' smooth={true} duration={500} offset={-95} onClick={handleClick}>Produk</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to='Contact' smooth={true} duration={500} offset={-94} onClick={handleClick}>Kontak</Link>
            </li>
        </ul>

      {/* Mobile Navigation Bar Menu End */}
    </div>
  )
}

export default NavBar