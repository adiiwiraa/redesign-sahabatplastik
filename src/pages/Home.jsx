import { FaPhone } from 'react-icons/fa'
import { Link } from 'react-scroll'
import Texture from '../assets/Plastic-Texture.png'

const Home = () => {
  return (
    <div className='w-full h-screen ' id='Home'>
      <img src={Texture} alt="Tekstur" className='top-0 left-0 w-full h-screen'/>
      {/* Container */}
      <div className='absolute inset-0'>
        <div className='relative flex flex-col justify-center h-full max-w-6xl px-8 mx-auto'>
          <h1 className='text-4xl sm:text-7xl font-black text-[#e66a55] '>Sahabat Plastik Indonesia</h1>
          <p className='my-4 text-2xl font-bold sm:text-4xl'>Kemudahan dan inovasi dalam setiap kemasan plastik</p>
          <p className='text-lg sm:text-xl'>Kami hadir sebagai mitra terpercaya untuk membantu mengemas segala jenis produk dengan desain inovatif yang mencerminkan nilai unik Anda. Dari konsep hingga pelanggan, kami memastikan pengalaman kemasan yang efisien dan menarik. Temukan kemudahan dan keberagaman kemasan plastik bersama kami.</p>
          <div>
            <button className=' px-6 py-3 my-4 border-2 border-black hover:bg-[#e66a55] hover:text-white hover:border-[#e66a55] '>
            <Link to='Contact' className='flex items-center' smooth={true} duration={500} offset={-94}> Hubungi Kami <FaPhone className='ml-2'/></Link>
            </button>
          </div>
        </div>

      </div>
      {/* Container End */}
      
    </div>
  )
}

export default Home