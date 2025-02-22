import React, { useRef, useState,useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./hero.module.scss"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import Slide1 from "../../../public/Images/slide1.jpg"
import Slide2 from "../../../public/Images/slide2.jpg"
import Slide3 from "../../../public/Images/slide3.jpg"
import Image from "next/image";



import { Navigation,Pagination,Autoplay } from 'swiper/modules';



export default function Hero() {



  return (
    <div className={styles.heroMain}>
		{/* <div className={styles.navbuttonContainer}>
				      <div className={styles.navButton} id="prevButton">❮</div>
			  <div className={styles.navButton} id="nextButton">❯</div>
			  </div> */}
      <Swiper


		  autoplay={{
			delay: 3000,
			disableOnInteraction: false,
		  }}
		  modules={[Pagination,Autoplay]}
		  style={{
			height: "95vh",
			width: "100%",
			borderRadius: "0px 0px 40px 40px",
		  }}
		  className="mySwiper"
      >
        <SwiperSlide>
			<Image className={styles.heroImage} src={Slide1} alt="horizon" />
		</SwiperSlide>
        <SwiperSlide>
		<Image className={styles.heroImage} src={Slide2} alt="horizon" />
		</SwiperSlide>
        <SwiperSlide>
		<Image className={styles.heroImage} src={Slide3} alt="horizon" />
		</SwiperSlide>
      </Swiper>
    </div>
  );
}
