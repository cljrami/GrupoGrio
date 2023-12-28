// SWIPER
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Keyboard, Navigation } from "swiper/modules";

const SliderNuestroDirectorio = () => {
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
            spaceBetween: 20,
          },
        }}
        navigation={true}
        modules={[Keyboard, Navigation]}
        className="SwiperNuestroDirectorio"
      >
        <SwiperSlide><img src="./assets/imagenes/SliderNuestroDirectorio/nombre.webp" alt="Nombre integrante - Cargo" width="312px" height="360" />
      <div className="Datos">
        <p>Nombre</p>
        <p>Cargo</p>
        </div>
       
        </SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/SliderNuestroDirectorio/nombre.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/SliderNuestroDirectorio/nombre.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/SliderNuestroDirectorio/nombre.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/SliderNuestroDirectorio/nombre.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/SliderNuestroDirectorio/nombre.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
        <SwiperSlide><img src="./assets/imagenes/SliderNuestroDirectorio/nombre.webp" alt="Nombre integrante - Cargo" width="312px" height="360" /></SwiperSlide>
      </Swiper>      
    </div>
  )
}

export default SliderNuestroDirectorio
