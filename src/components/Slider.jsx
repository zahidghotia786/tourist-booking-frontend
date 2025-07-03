import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Navigation, EffectCoverflow } from 'swiper/modules';

const Slider = () => {
  const images = [
    'public/slide1.png',
    'public/slide2.png',
    'public/slide3.png',
    'public/slide2.png',
    'public/slide3.png',
    'public/slide2.png',
    'public/slide3.png',
  ];

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Swiper
        navigation={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        loop={true}
        modules={[Navigation, EffectCoverflow]}
        className="h-[500px]"
      >
        {images.map((image, index) => (
          <SwiperSlide
            key={index}
            className="overflow-hidden bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: `url(${image})`,
              width: '400px',
              height: '100%',
            }}
          >
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
