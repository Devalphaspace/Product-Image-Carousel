import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1300px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/p1.png" alt="" />
        <img src="/p2.png" alt="" />
        <img src="/p3.png" alt="" />
        <img src="/p4.png" alt="" />
        <img src="/p5.png" alt="" />
        <img src="/p6.png" alt="" />
        <img src="/p7.png" alt="" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
