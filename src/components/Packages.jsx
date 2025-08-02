import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import chikmagalur from "../assets/chikmagalur.jpeg";
import coorg from "../assets/coorg.jpeg";
import desserts from "../assets/deserts.jpeg";
import goa from "../assets/goa.jpeg";
import varkala from "../assets/Varkala.jpeg";

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
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = destinations
    .concat(destinations)
    .slice(startIndex, startIndex + 5);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % destinations.length);
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + destinations.length) % destinations.length
    );
  };

  return (
    <section
      className="bg-gradient-to-b from-[#3b4b5f] via-[#1e293b] to-[#0b1320]
 text-white font-sans py-16 px-6 overflow-hidden"
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto flex items-center justify-between mb-10">
        <div>
          <h3 className="text-pink-400 uppercase text-sm font-semibold">
            Handpicked Weekend Packages
          </h3>
          <h2 className="text-3xl md:text-2xl font-bold">
            Browse our upcoming getaways curated with care, vibes and fun.
            Limited seats. All-inclusive.
          </h2>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="text-pink-400">
            0{(startIndex % destinations.length) + 1}
          </span>
          <span className="text-slate-400">/ 05</span>
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full border border-slate-500 flex items-center justify-center hover:bg-slate-700 transition"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full border border-slate-500 flex items-center justify-center hover:bg-slate-700 transition"
          >
            →
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex justify-center">
        <div className="relative h-[420px] w-full flex items-center justify-center">
          {visibleCards.map((place, index) => {
            const scale =
              index === 2
                ? "scale-100"
                : index === 1 || index === 3
                ? "scale-95"
                : "scale-90";
            const z =
              index === 2
                ? "z-30"
                : index === 1 || index === 3
                ? "z-20"
                : "z-10";
            return (
              <div
                key={index}
                className={`absolute ${z} ${scale} transition-all duration-500 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-md w-[350px] h-[400px] bg-white/10 border border-white/10`}
                style={{
                  left: `calc(50% + ${(index - 2) * 220}px)`,
                  transform: "translateX(-50%)",
                }}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-2/3 object-cover"
                />
                <div className="p-4">
                  <div className="flex text-yellow-400 text-sm mb-1">
                    {[...Array(4)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <h3 className="text-base font-semibold mb-1">
                    {place.title}
                  </h3>
                  <p className="text-slate-300 text-sm">{place.duration}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
