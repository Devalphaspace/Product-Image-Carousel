import React from "react";

import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import Wrapper from "./../../components/Wrapper";
import ProductDetailsCarousel from "./../../components/ProductDetailsCarousel";

const ProductDetails = () => {
  return (
    <div className=" w-full md:py-20">
      <Wrapper>
        <div className=" flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start */}
          <div className=" w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* left column end */}

          {/* right column start */}
          <div className=" flex-1 py-3">
            {/* Product title */}
            <div className=" text-[34px] font-semibold mb-3">
              Jordon Retro 6 G
            </div>
            {/* Product subtitle */}
            <div className=" text-xl font-semibold mb-5">
              Men&apos;s Golf Shoes
            </div>
            {/* Product price */}
            <div className=" text-lg font-semibold mb-0">MRF : $ 1965.00</div>
            <div className=" text-base font-medium text-black/[.5]">
              incl. of taxes
            </div>
            <div className=" text-base font-medium text-black/[.5]">
              {`(Also includes all applicable duties)`}
            </div>

            {/* Product size range start */}
            <div className=" mb-10 mt-10">
              <div className=" flex justify-between mb-2">
                <div className=" text-base font-semibold">Size Select</div>
                <div className=" text-base font-semibold">Select Guide</div>
              </div>

              {/* Size selection */}
              <div className=" grid grid-cols-3 gap-2">
                <div className=" border rounded-full text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 5
                </div>
                <div className=" border rounded-full text-center py-3 font-medium cursor-not-allowed bg-black/[.1] opacity-50">
                  UK 6
                </div>
                <div className=" border rounded-full text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className=" border rounded-full text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className=" border rounded-full text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className=" border rounded-full text-center py-3 font-medium cursor-not-allowed bg-black/[.1] opacity-50">
                  UK 10
                </div>
              </div>
              {/* Size selection */}
              {/* size warning */}
              <div className=" text-red-600 mt-1">
                {" "}
                Size selection is required
              </div>
              {/* size warning */}
            </div>
            {/* Product size range end */}

            {/* Buttons start */}
            <button className=" w-full  flex items-center justify-center gap-2  py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75">
              Add to Cart
              <BsCart size={18} />
            </button>
            <button className=" w-full py-4 border border-black flex items-center justify-center gap-2 mb-10 rounded-full bg-white text-black text-lg font-medium transition-transform active:scale-95 hover:opacity-75">
              Whishlist
              <IoMdHeartEmpty size={20} />
            </button>
            {/* Buttons end */}
          </div>
          {/* right column end */}
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
