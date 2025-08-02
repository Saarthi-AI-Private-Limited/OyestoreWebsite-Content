import React, { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import bg from "../assets/testimonialbg.png";

const testimonials = [
  {
    quote: "This was more than a trip — it was therapy with sunsets!",
    author: "Sneha S.",
    location: "Gokarna Chapter",
  },
  {
    quote: "I met creators I follow online and actually vibed with everyone. Can’t wait for the next chapter.",
    author: "Aditya R.",
    location: "Coorg Chapter",
  },
  {
    quote: "Finally found a travel group that’s real and not touristy!",
    author: "Richa M.",
    location: "Varkala Escape",
  },
];

const ReviewAndMonsoonSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  const { quote, author, location } = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-b from-[#0b1320] to-[#0d1b2a] text-[#e0e0e0] py-16 px-6 md:px-20 overflow-hidden relative">
      {/* Review Section */}
      <div className="text-center max-w-3xl mx-auto mb-20 transition-opacity duration-500 ease-in-out">
        <p className="text-pink-400 text-sm uppercase font-semibold tracking-widest mb-2">
          Review
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Hear It from the Tribe
        </h2>

        <p className="text-gray-300 leading-relaxed text-lg italic mb-4">
          “{quote}”
        </p>
        <div className="flex justify-center items-center gap-1 mb-2">
          {[...Array(5)].map((_, idx) => (
            <Star key={idx} size={18} color="gold" fill="gold" />
          ))}
        </div>
        <p className="font-semibold text-lg">
          {author}, <span className="text-sm font-normal italic">{location}</span>
        </p>
      </div>

      {/* Illustration Section */}
      <div className="w-full mt-10">
        <img src={bg} alt="Hiker" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default ReviewAndMonsoonSection;
