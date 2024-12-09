"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "../page-components/reuseableComponents/ProductCard";

const PopularProducts = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 md:px-[1.5rem] overflow-hidden">
      <div className="relative">
        <h4 className="font-clash font-normal text-lg md:text-4xl text-darkPrimary mb-4 pl-4">
          Our popular products
        </h4>

        {/* Mobile Slider */}
        <div className="block md:hidden px-4 py-2">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: true }}
            loop={true}
            slidesPerView={2}
            spaceBetween={16}
            className="w-full"
          >
            <SwiperSlide>
              <ProductCard
                image="lamp"
                heading="The Lucy Lamp"
                price="399"
                id="2"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="Vase"
                heading="Rustic Vase Set"
                price="155"
                id="1"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="SlikVase"
                heading="The Silky Vase"
                price="125"
                id="3"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard
                image="BlackChair"
                heading="The Dandy Chair"
                price="250"
                id="4"
              />
            </SwiperSlide>
          </Swiper>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex flex-col md:flex-row gap-[30px] group w-full">
          {/* Featured Large Product */}
          <div className="relative w-full max-w-[630px] group">
            <div className="relative w-full h-[375px] overflow-hidden">
              <Image
                src={`/images/sofa.png`}
                alt="Sofa Image"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="mt-4 flex flex-col gap-[8px]">
              <h4 className="font-clash font-normal text-xl text-darkPrimary">
                The Popular suede sofa
              </h4>
              <p className="font-satoshi font-normal text-xl text-darkPrimary">
                £ 980
              </p>
            </div>

            <Link 
              href={`/products/id10`} 
              className="absolute inset-0 z-10 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-center pb-4"
            >
              <span className="bg-white/80 px-6 py-2 rounded-md text-darkPrimary hover:bg-white transition-colors">
                Add to Cart
              </span>
            </Link>
          </div>

          {/* Additional Product Cards */}
          <div className="flex gap-[30px]">
            <ProductCard
              image="BlackChair"
              heading="The Dandy Chair"
              price="250"
              id="4"
            />
            <ProductCard
              image="OldChair"
              heading="The Dandy Chair"
              price="250"
              id="9"
            />
          </div>
        </div>

        {/* View Collection Button */}
        <div className="flex justify-center mt-6 md:mt-8">
          <button className="w-full max-w-[309px] py-[16px] px-[32px] bg-lightGray bg-opacity-[15%] text-[#2a254b] font-satoshi font-normal hover:bg-darkPrimary hover:text-white transition-all duration-300 ease-in-out text-lg">
            View collection
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;