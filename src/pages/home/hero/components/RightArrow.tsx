import { RightArrowIcon } from "../../../../assets/icons/indext"
import { useSwiper } from 'swiper/react';

function RightArrow() {
  const swiper = useSwiper();
  return (
    <button onClick={() => swiper.slideNext()} className="swiper-button-next w-10 h-10 bg-[#ffffff3f] rounded-full border-[1px] border-[#00000033] flex items-center justify-center"><RightArrowIcon /></button>
  )
}

export default RightArrow