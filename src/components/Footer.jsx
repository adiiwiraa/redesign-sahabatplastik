import Logo from '../assets/Logo.png';
import { FaCopyright, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='hidden bg-slate-100 md:block'>
      <div className='container flex items-center justify-between px-3 py-2 mx-auto'>
        <p className='flex items-center'>
          Copyright <FaCopyright className='mx-2' style={{ color: "#000000" }}/> Sahabat Plastik Indonesia
        </p>
          <a href="https://www.instagram.com/karungmurah/" className='flex items-center'>
            <FaInstagram className='mr-2'/> Instagram
          </a>
          
          <a href="https://www.facebook.com/karungplastikmurah/" className='flex items-center'>
            <FaFacebook className='mr-2'/> Facebook
          </a>
        <img src={Logo} alt="Logo Footer" className='h-16' />
      </div>
    </div>
  );
};

export default Footer;
