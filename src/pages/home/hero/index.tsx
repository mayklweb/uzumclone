import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import LeftArrow from './components/LeftArrow';
import RightArrow from './components/RightArrow';


function Hero() {
  return (
    <div>
      <div className='container mx-auto px-[20px]'>
        <Swiper
           style={{
            "--swiper-pagination-color": "#fff",
            "--swiper-pagination-size": "5px",
          } as React.CSSProperties}
          speed={1000}
          slidesPerView={1}
          loop={true}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
          className="rounded-lg"
        >
          <SwiperSlide>
            <img src="https://images.uzum.uz/cs7s83dpq3ghb2qjbe80/main_page_banner.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.uzum.uz/csd1ocj4nkdhfdv6d5cg/main_page_banner.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.uzum.uz/cs7atvjvgbkl7nok0l30/main_page_banner.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.uzum.uz/csb378r4nkdhfdv5qqu0/main_page_banner.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.uzum.uz/csb13k34nkdhfdv5plbg/main_page_banner.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.uzum.uz/csg96a34nkdhfdv78m6g/main_page_banner.jpg" alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://images.uzum.uz/cs001r3i153t30uo8u7g/main_page_banner.jpg" alt="" />
          </SwiperSlide>
          <div className="absolute bottom-0 left-0 w-full h-10">
            <div className="swiper-pagination">
              <span className='swiper-pagination-bullet'></span>
            </div>
          </div>
          <RightArrow />
          <LeftArrow />
        </Swiper>
        <div className='flex gap-3 mt-3'>
          <button className='w-[300px] h-[60px] px-8 py-3 bg-grey-100 rounded-2xl hover:bg-grey-200 transition'>Распродажа</button>
          <button className='w-[300px] h-[60px] px-8 py-3 bg-grey-100 rounded-2xl hover:bg-grey-200 transition'>Скидки Xiaomi</button>
          <button className='w-[300px] h-[60px] px-8 py-3 bg-grey-100 rounded-2xl hover:bg-grey-200 transition'>Ликвидация</button>
          <button className='w-[300px] h-[60px] px-8 py-3 bg-grey-100 rounded-2xl hover:bg-grey-200 transition'>Сезон свадеб</button>
        </div>
      </div>
    </div >
  )
}

export default Hero