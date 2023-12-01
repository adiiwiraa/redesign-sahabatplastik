import { FaWhatsapp, FaPhone, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-white' id='Contact'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col items-center justify-center w-full h-full my-16 sm:my-0'>
        <h1 className='mt-12 mb-8 text-5xl font-bold text-center'>Kontak</h1>
          <div className='grid w-full max-w-6xl gap-12 px-8 mt-8 md:grid-cols-2'>
            <div>
              <h2 className='text-lg font-bold sm:text-xl'>Alamat</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.36996490921922!2d112.76438686517665!3d-7.250009508007562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f99e0d35d52f%3A0xe96ca148a926281e!2sKarung%20Plastik!5e0!3m2!1sen!2sus!4v1701401772734!5m2!1sen!2sus&zoom=10" width="100%" height="200" style={{border:"0"}} allowfullscreen="" loading="lazy" className='mt-2 mb-4'></iframe>
                <p className='mt-2'>Jl. Kapas Krampung No.97A, Rangkah, Kec. Tambaksari, Surabaya, Jawa Timur 60133, Indonesia.</p>
                <p>(Sebelah Bank NISP)</p>
              <h2 className='mt-4 text-lg font-bold sm:text-xl'>Hubungi Kami</h2>
                <p className='flex items-center mt-2'> <FaWhatsapp className='mr-2' /><a href="https://wa.me/62811309339" className='mr-2 text-[#e66a55]'>0811-3093-39 </a> Bapak Agus Gunawan</p>
                <p className='flex items-center mt-2'> <FaPhone className='mr-2' /><a href="tel:+62313766484" className='mr-2 text-[#e66a55]'>(031) 3766-484</a>  Ibu Agus</p>
                <p className='flex items-center mt-2'> <FaEnvelope className='mr-2' /><a href="mailto:sahabatplastikindonesia@gmail.com" className='text-[#e66a55]'>sahabatplastikindonesia@gmail.com</a></p>
            </div>
            <div className='text-md sm:text-lg'>
              <form method='POST' action="https://getform.io/f/c86e722f-5f98-4a5b-9417-7f5ededce069">
                <input type="text" className='w-full p-2 border-2 border-black' placeholder='Nama Anda' name='nama' required/>
                <input type="email" className='w-full p-2 my-4 border-2 border-black' placeholder='Email Anda' name='email' required/>
                <textarea className='w-full p-2 border-2 border-black' rows='10' placeholder='Pesan Anda' name='pesan' />
                <button type='submit' className='w-full p-2 mt-5 mb-32 text-center border-2 border-black hover:bg-[#e66a55] hover:text-white hover:border-[#e66a55]'>Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact