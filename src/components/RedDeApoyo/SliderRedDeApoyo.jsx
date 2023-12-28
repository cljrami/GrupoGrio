// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Navigation } from "swiper/modules";

const SliderRedDeApoyo = () => {
  return (
    <div>
         <Swiper
          slidesPerView={1}
          spaceBetween={0}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="SwiperRedDeApoyo"
        >
          <SwiperSlide><img src="./assets/imagenes/RedDeApoyo/eme.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/RedDeApoyo/proemer.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/RedDeApoyo/biofarmac.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/RedDeApoyo/tpl.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        </Swiper> 
    </div>
  )
}

export default SliderRedDeApoyo
