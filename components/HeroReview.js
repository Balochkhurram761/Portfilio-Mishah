"use client";

import reviews from "../data/Reivew";
import { FaStar } from "react-icons/fa";
import dynamic from "next/dynamic";
import "../styles/slider.css";
import { IoStarSharp } from "react-icons/io5";
import Avatar from "@mui/material/Avatar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false,
});

function Testimonials() {
  const getInitials = (name) => {
    return name
      .split("_")
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };
  return (
    <section id="testimonials" className="py-20 bg-[#0B0B0F] border-b border-gray-800">
      <div className=" px-6">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
          <div>
            <h2 className="text-4xl text-white md:text-5xl font-bold">
              What <span className="text-[#FF7A00]">Clients Say</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Here's what my amazing clients say about my work
            </p>
          </div>

          <div className="flex gap-10 mt-6 lg:mt-0">
            <div>
              <h3 className="text-3xl flex font-bold text-[#FF7A00]">
                {" "}
                <IoStarSharp /> 4.9
              </h3>
              <p className="text-gray-400">Overall Rating</p>
            </div>x

            <div>
              <h3 className="text-3xl text-white font-bold">
                {" "}
                <CountUp start={0} end={100} duration={24} />+
              </h3>
              <p className="text-gray-400">Total Reviews</p>
            </div>
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          spaceBetween={30}
          freeMode={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {reviews.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#1A1A1F] p-4 rounded-xl text-left h-full">
                <div className="wrap flex flex-col sm:flex-row justify-between ">
                  <div className="flex mb-3 items-center gap-3">
                    <Avatar
                      sx={{
                        bgcolor: "#7c3aed",
                        width: 50,
                        height: 50,
                        fontWeight: 700,
                      }}
                    >
                      {" "}
                      {getInitials(item.name)}{" "}
                    </Avatar>
                    {/* User */}
                    <div className="">
                      <h4 className="text-white font-semibold">{item.name}</h4>
                      <p className="text-gray-400 text-sm">{item.country}</p>
                    </div>
                  </div>
                  <div className="flex text-[#FF7A00] mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                {/* Review */}
                <div className="flex flex-col gap-2 ">
                  <p className="text-gray-300 ">{item.review}</p>
                  <p className="text-gray-300 ">Published: {item.published}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;
