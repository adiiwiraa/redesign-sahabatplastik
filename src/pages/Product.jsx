import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { dataProduk } from '../data'

const Product = () => {
  const settings = {
    accessibility:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };
  
  return (
    <div className='w-full h-screen mt-16 sm:mt-0  bg-[#e66a55]' id='Product'>
      <div className='items-center justify-center max-w-6xl pt-8 mx-auto mb-8 md:mb-0'>
      <h1 className='text-3xl font-bold text-center text-white mb-7 sm:text-5xl'>Produk</h1>
        <Slider {...settings} className='px-4'>
            {dataProduk.map((produk) => (
              <div key={produk.name} className='bg-white h-[500px] w-6 p-4 mt-4 text-black rounded-xl'>
                <div className='flex items-center justify-center h-56 bg-white'>
                  <img src={produk.img} alt="Gambar Produk" className='object-cover h-56 rounded-xl'/>          
                </div>

                <div className='flex flex-col items-center justify-center gap-4 p-4'>
                  <p className='text-lg font-bold'>{produk.name}</p>
                  <p className='text-md'>{produk.information}</p>
                </div>
              </div>
            )
            )}
        </Slider>
      <div className='px-4 mt-8 text-center'>
        <p className='font-medium text-white text-md md:text-xl'>
          Kami siap melayani pembelian grosir dan eceran. Untuk produk yang tidak ready stock, pesan sesuai spesifikasi Anda dengan jumlah minimum tertentu. Pengiriman kami mencakup seluruh Indonesia.</p>
      </div>
      </div> 
    
    </div>
)}
export default Product