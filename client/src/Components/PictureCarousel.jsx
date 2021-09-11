import React from "react";
import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = () => {
  return (
    <>
      <div className="w-full h-56 lg:h-80 relative px-4 overflow-hidden">
        <div className="w-full h-full relative">
          <img
            src="https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp"
            alt="food"
            className="w-full h-full object-cover transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className=" absolute inset-0 w-full h-full rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>

        <div className="absolute w-full   bottom-2 text-white left-6 lg:left-8">
          <h4 className="z-10">Trending this week</h4>
          <h6 className="z-10 flex items-center">
            15 Places <IoMdArrowDropright className="text-2xl" />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
