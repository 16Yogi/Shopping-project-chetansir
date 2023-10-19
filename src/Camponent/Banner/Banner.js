import React from "react";
import "./Banner.scss";
// import Swiper core and required modules
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Banner() {
  return (
    <>
      <div className="container-fluid p-0" id="Banner-cf">
        <Swiper
          // install Swiper modules
          modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          //   navigation
          autoplay={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="py-4" id="banner-img">
            <div className="container p-3" id="bg">
                <div className="col py-5">
                  <h2><span className="px-2 bg-white">let's</span></h2>
                  <h2><span className="px-2 ">Explore</span></h2>
                  <h2><span className="px-2 bg-info">unique</span></h2>
                  <h2><span className="px-2 ">shoes.</span></h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button className="btn btn-dark">Shop Now</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-4" id="banner-img">
            <div className="container p-3" id="bg">
                <div className="col py-5">
                  <h2><span className="px-2 bg-white">let's</span></h2>
                  <h2><span className="px-2 ">Explore</span></h2>
                  <h2><span className="px-2 bg-info">unique</span></h2>
                  <h2><span className="px-2 ">shoes.</span></h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button className="btn btn-dark">Shop Now</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-4" id="banner-img">
            <div className="container p-3" id="bg">
                <div className="col py-5">
                  <h2><span className="px-2 bg-white">let's</span></h2>
                  <h2><span className="px-2 ">Explore</span></h2>
                  <h2><span className="px-2 bg-info">unique</span></h2>
                  <h2><span className="px-2 ">shoes.</span></h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button className="btn btn-dark">Shop Now</button>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-4" id="banner-img">
            <div className="container p-3" id="bg">
                <div className="col py-5">
                  <h2><span className="px-2 bg-white">let's</span></h2>
                  <h2><span className="px-2 ">Explore</span></h2>
                  <h2><span className="px-2 bg-info">unique</span></h2>
                  <h2><span className="px-2 ">shoes.</span></h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <button className="btn btn-dark">Shop Now</button>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
