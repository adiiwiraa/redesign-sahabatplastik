import Logo from '../assets/Logo.png'

const About = () => {
  return (
  <div className='w-full h-screen pb-12 md:pb-0' id='About'>
    <div className='flex flex-col items-center justify-center w-full h-full my-16 sm:my-0'>
      <div className='hidden mb-6 sm:block'>
        <img src={Logo} alt="Logo Sahabat Plastik" />
      </div>
        <p className='mb-8 text-3xl font-bold text-center sm:text-5xl'>Tentang <span className='text-[#e66a55]'>Sahabat Plastik</span></p>
        <div className='grid w-full max-w-6xl gap-8 px-8 md:grid-cols-2'>
          <div className='text-md sm:text-lg'>
            <p>
              Sebagai distributor karung plastik, kami melayani kebutuhan grosir dan eceran di seluruh Indonesia, termasuk pengiriman ke luar kota bahkan luar pulau (ongkos kirim ditanggung pembeli sesuai dengan tarif terkini dari layanan jasa kirim terpilih). Usaha ini, yang dirintis pada pertengahan tahun 1980-an, secara resmi dibuka dengan nama UD Sahabat pada tahun 1995. Dengan pengalaman puluhan tahun, kami siap membantu Anda dalam memenuhi kebutuhan produk plastik apa pun.</p>
          </div>
          <div className='text-md sm:text-lg'>
            <p>        
              Karung plastik menjadi solusi efektif untuk mengkemas barang dalam jumlah besar, karena keunggulannya sebagai wadah tahan air dan berkualitas tinggi. Produk alam seperti batu bara, beras, dan pupuk sering menggunakan karung plastik sebagai pilihan pengemasan dalam jumlah besar. Jika Anda membutuhkan karung plastik, Anda berada di tempat yang tepat! Kami menyediakan karung plastik, dapat disablon sesuai merk, dan telah dipercaya konsumen dari berbagai wilayah di Indonesia, termasuk Kalimantan, Manado, hingga Timor Leste.</p>
          </div>
        </div>
      </div>
   </div>
  )
}

export default About