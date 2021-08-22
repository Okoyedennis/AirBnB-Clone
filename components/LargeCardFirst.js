import Image from "next/image";
import React from "react";
import img from "../img/img.jpg";

const LargeCardFirst = ({ description, title, btn }) => {
  return (
    <div className="relative cursor-pointer my-16">
      <div className="h-96  min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute  top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 text-white">{title}</h3>
        <p className="text-white text-sm w-6/12">{description}</p>
        <button className="bg-white text-sm text-gray-900 px-4 py-2 rounded-lg mt-5 active:scale-90 transition  ease-out duration-150">
          {btn}
        </button>
      </div>
    </div>
  );
};

export default LargeCardFirst;
