import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import discoverWorld from "../assets/discoverMap.png";
import chikmagalur from "../assets/chikmagalur.jpeg";
import coorg from "../assets/coorg.jpeg";
import desserts from "../assets/deserts.jpeg";
import goa from "../assets/goa.jpeg";
import varkala from "../assets/Varkala.jpeg";
import hikebg from "../assets/hikebg.png";

const destinations = [
  {
    title: "Chikmagalur, Karnataka",
    description: "Coffee land with lush greenery and serene hills",
    duration: "2 nights",
    image: chikmagalur,
  },
  {
    title: "Coorg, Karnataka",
    description: "Scenic beauty with rivers and spice plantations",
    duration: "2 nights",
    image: coorg,
  },
  {
    title: "Rajasthan Deserts",
    description: "Golden sands and cultural charm",
    duration: "3 nights",
    image: desserts,
  },
  {
    title: "Goa Beaches",
    description: "Sun, sand, and vibrant nightlife",
    duration: "2 nights",
    image: goa,
  },
  {
    title: "Varkala, Kerala",
    description: "Cliffside beach views and yoga retreats",
    duration: "2 nights",
    image: varkala,
  },
];

export default function DestinationSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      {/* Slider Section */}
      <div className="bg-gradient-to-b from-[#334155] to-[#0f172a] py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-pink-400 text-sm font-semibold uppercase mb-1">
            Popular Escapes & Treks Loved by Our Travelers
          </h2>
          <h3 className="text-white text-xl sm:text-2xl font-bold mb-10">
            From misty mountains to beachside bliss, our community trips are
            designed to spark wanderlust and deliver unforgettable memories.
            Explore our top destinations:
          </h3>

          <Slider {...settings}>
            {destinations.map((dest) => (
              <div key={dest.title} className="px-4">
                <div className="rounded-3xl overflow-hidden relative shadow-xl h-[200px] h-[650px] transition-transform duration-300 hover:scale-105 bg-black">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <h4 className="text-xl font-semibold mb-1">{dest.title}</h4>
                    <p className="text-sm text-gray-200 mb-1">
                      {dest.description}
                    </p>
                    <span className="text-sm text-yellow-300">
                      {dest.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Discover World Section */}
      <div className="w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0b1320] py-8 px-0">
        <img
          src={discoverWorld}
          alt="Discover the world through our eyes"
          className="w-full h-auto object-cover opacity-90"
        />
      </div>

      {/* Hike Background Section */}
      <div className="w-full bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0b1320] py-8 px-0">
        <img
          src={hikebg}
          alt="Hiking Adventures"
          className="w-full h-auto object-cover opacity-100"
        />
      </div>
    </>
  );
}
