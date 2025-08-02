import React from "react";
import aboutUsImage from "../assets/image-removebg-preview.png"; // rename the uploaded image to this

export default function AboutUsSection() {
  return (
    <div className="relative w-full font-sans bg-gradient-to-b from-[#0b1320] via-[#1e2738] to-[#3b4b5f] text-white overflow-hidden">
      <div className="w-full flex flex-col-reverse lg:flex-row items-center py-20 gap-12">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 px-6 sm:px-12 z-10">
          <h3 className="text-pink-400 text-sm font-semibold uppercase mb-3">
            About Us
          </h3>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Travel That Feels Like You
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Oyestore is a travel movement born in Bangalore, created for people
            who want to explore without stress. We design short weekend getaways
            that combine authenticity, aesthetics, and adventure. Every trip is
            founder-led and includes local creators who bring the journey alive.
            Whether it’s a cliffside sunset in Varkala or a coffee-scented hike
            in Coorg, we focus on transparency, people, and shared experiences.
          </p>
        </div>

        {/* Right Image Section - Flush to right edge */}
        <div className="w-full lg:w-1/2 flex justify-end">
          <img
            src={aboutUsImage}
            alt="Illustration of person on cliff"
            className="w-full max-w-none h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
