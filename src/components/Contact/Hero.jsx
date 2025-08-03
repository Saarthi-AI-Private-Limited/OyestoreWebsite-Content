import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import video from "../../assets/OyestoreHero.mov";
import logo from "../../assets/oyestorelogo.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  User,
  Mountain,
  Tent,
  AlertTriangle,
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    }

    function handleClickOutside(event) {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target)
      ) {
        setMobileNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileNavOpen]);

  // const currentDestination = destinations[currentIndex]; // Remove if not used

  // Navigation handlers
  const handleNav = (path) => {
    setMobileNavOpen(false);
    navigate(path);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 lg:h-40 bg-gradient-to-t from-[#334155] to-transparent pointer-events-none" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-4 sm:px-8 py-3 mt-4 mx-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg text-white relative z-20">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12 w-auto" />

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden flex items-center p-2 focus:outline-none"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium tracking-wide">
            <li>
              <button
                className="hover:text-gray-300 bg-transparent border-none outline-none"
                onClick={() => handleNav("/")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-300 bg-transparent border-none outline-none"
                onClick={() => handleNav("/about")}
              >
                About Us
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-300 bg-transparent border-none outline-none"
                onClick={() => handleNav("/gallery")}
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-300 bg-transparent border-none outline-none"
                onClick={() => handleNav("/trips")}
              >
                Trips
              </button>
            </li>
            <li>
              <button
                className="hover:text-gray-300 bg-transparent border-none outline-none"
                onClick={() => handleNav("/contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* Desktop Join Button */}
          <Button
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 items-center gap-2 text-sm"
            onClick={() => handleNav("/join")}
          >
            <User className="w-4 h-4" />
            Join Traveller
          </Button>
        </nav>

        {/* Mobile Nav Dropdown */}
        {mobileNavOpen && (
          <div
            ref={mobileNavRef}
            className="md:hidden absolute top-full left-0 right-0 bg-[#1E293B]/90 backdrop-blur z-10 rounded-b-2xl px-6 py-4 shadow-lg animate-slide-down"
          >
            <ul className="flex flex-col gap-5 text-base font-semibold">
              <li>
                <button
                  onClick={() => handleNav("/")}
                  className="hover:text-blue-400 bg-transparent border-none outline-none w-full text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/about")}
                  className="hover:text-blue-400 bg-transparent border-none outline-none w-full text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/gallery")}
                  className="hover:text-blue-400 bg-transparent border-none outline-none w-full text-left"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/trips")}
                  className="hover:text-blue-400 bg-transparent border-none outline-none w-full text-left"
                >
                  Trips
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav("/contact")}
                  className="hover:text-blue-400 bg-transparent border-none outline-none w-full text-left"
                >
                  Contact
                </button>
              </li>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 flex items-center gap-2 text-sm w-full justify-center"
                onClick={() => handleNav("/join")}
              >
                <User className="w-4 h-4" />
                Join Traveller
              </Button>
            </ul>
          </div>
        )}

        {/* Hero Text */}
        <div className="flex-grow flex flex-col items-center justify-center text-center px-2 sm:px-4 mt-[-1.5rem] sm:mt-[-4rem] lg:mt-[-6rem]">
          <h1 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-xl uppercase mb-2 sm:mb-3 leading-tight">
            Contact Us
          </h1>
          <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light max-w-md sm:max-w-2xl drop-shadow-md">
            Scroll Down to Contact us
          </h2>
        </div>
      </div>
    </div>
  );
}
