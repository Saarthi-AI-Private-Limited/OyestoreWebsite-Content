import React from "react";
import maps from '../assets/maps.png'

const Overlay = () => {
    return (
      <div className=" bg-gray-900 relative w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
  
        {/* Background SVG Image */}
        <img 
          src={maps}
          alt="Background SVG" 
          className="w-full h-3/4 object-fit " 
        />
  
        {/* Overlay Icons */}
        {/* <div className="absolute top-[20%] left-[30%]">
          <img 
            src="/icons/icon1.svg" 
            alt="Icon 1" 
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>
  
        <div className="absolute top-[50%] left-[60%]">
          <img 
            src="/icons/icon2.svg" 
            alt="Icon 2" 
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div>
  
        <div className="absolute top-[70%] left-[20%]">
          <img 
            src="/icons/icon3.svg" 
            alt="Icon 3" 
            className="w-10 h-10 md:w-14 md:h-14"
          />
        </div> */}
  
      </div>
    );
  };
  
export default Overlay;
  