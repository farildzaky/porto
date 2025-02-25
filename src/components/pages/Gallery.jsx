import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import mossel from "../../assets/image/mossel.svg";
import campus from "../../assets/image/campus.svg";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const images = [
  { src: mossel, path: "https://mossel.vercel.app/",  },
  { src: campus, path: "https://campushub.web.id/"  }
];

const Gallery = () => {
 
  const handleCardClick = (path) => {
    window.open(path, "_blank");
  };

  return (
    <div className="w-full h-full flex justify-center items-center">
      

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 20,
          depth: 200,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-full  max-w-[1500px] "
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="swiper-slide-custom ">
            <img
              src={image.src}
              alt={`Slide ${index}`}
              className="rounded-lg cursor-pointer min-w-[300px] object-cover"
              onClick={() => handleCardClick(image.path)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;
