import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider1.css";
const SlickSlider1 = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className=" mx-auto    relative bg-[#0e0d0d60]">
      <div className="min-h-full min-w-full bg-[#0a0a0a60] z-10 absolute "></div>
      <Slider
        {...settings}
        ref={(slider) => {
          sliderRef = slider;
        }}
      >
        <div className="">
          <img
            src="https://i.ibb.co/crndkJx/prope2.jpg"
            alt="image"
            className="  object-cover  "
          />
        </div>

        <div className="">
          <img
            src="https://i.ibb.co/crndkJx/prope2.jpg"
            alt="image"
            className="  object-cover  "
          />
        </div>
        <div className="">
          <img
            src="https://i.ibb.co/crndkJx/prope2.jpg"
            alt="image"
            className="  object-cover  "
          />
        </div>
        <div className="">
          <img
            src="https://i.ibb.co/crndkJx/prope2.jpg"
            alt="image"
            className="  object-cover  "
          />
        </div>
      </Slider>
      <div className=" absolute top-10 text-white p-10 pr-[50%]  flex justify-center flex-col h-full z-10 gap-6">
        <h2 className="text-4xl">Arizona</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
          officia,
        </p>
        <div className="space-x-4">
          <button className="btn btn-primary btn-sm">Read More</button>
          <button className="btn btn-ghost btn-sm">Book Tour ☻</button>
        </div>
      </div>
      <div className="text-center mt-10 absolute z-10  right-10 bottom-10 text-slate-300 shadow-lg space-x-3">
        <button className="button  previous slick-arrow " onClick={previous}>
          ←
        </button>
        <button className="button  next slick-arrow  " onClick={next}>
          →
        </button>
      </div>
    </div>
  );
};

export default SlickSlider1;
