import React, { useState, useEffect, useRef } from "react";
import video from "../assets/OyestoreHero.mov";
import logo from "../assets/oyestorelogo.png";
import chikmagalur from "../assets/chikmagalur.jpeg";
import coorg from "../assets/coorg.jpeg";
import deserts from "../assets/deserts.jpeg";
import goa from "../assets/goa.jpeg";
import varkala from "../assets/Varkala.jpeg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { User, Mountain, Tent, AlertTriangle, ArrowRight, Menu, X } from "lucide-react";

const destinations = [
  { img: varkala, title: "Varkala Escape", description: "Beach café hopping, cliff stays, sunrise sessions with influencer-led bonding." },
  { img: chikmagalur, title: "Chikmagalur Hills", description: "Coffee estate camping, treks, and scenic drives through misty peaks." },
  { img: coorg, title: "Coorg Adventure", description: "Aromas of coffee and spice, cultural stays, and peaceful getaways." },
  { img: deserts, title: "Desert Campout", description: "Stargazing nights and authentic desert stays with jeep safaris." },
  { img: goa, title: "Goa Getaway", description: "Beach vibes, vibrant nightlife, and serene Portuguese architecture." },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => setCurrentIndex((prev) => (prev + 1) % destinations.length), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768 && mobileNavOpen) {
        setMobileNavOpen(false);
      }
    }

    function handleClickOutside(event) {
      if (mobileNavRef.current && !mobileNavRef.current.contains(event.target)) {
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

  const currentDestination = destinations[currentIndex];

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video src={video} autoPlay muted loop playsInline className="w-full h-full object-cover" />
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
            {mobileNavOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-4 sm:gap-6 text-xs sm:text-sm font-medium tracking-wide">
            <li><a href="#" className="hover:text-gray-300">Home</a></li>
            <li><a href="#" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#" className="hover:text-gray-300">Gallery</a></li>
            <li><a href="#" className="hover:text-gray-300">Trips</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
          </ul>

          {/* Desktop Join Button */}
          <Button className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 items-center gap-2 text-sm">
            <User className="w-4 h-4" />
            Join Traveller
          </Button>
        </nav>

        {/* Mobile Nav Dropdown */}
        {mobileNavOpen && (
          <div ref={mobileNavRef} className="md:hidden absolute top-full left-0 right-0 bg-[#1E293B]/90 backdrop-blur z-10 rounded-b-2xl px-6 py-4 shadow-lg animate-slide-down">
            <ul className="flex flex-col gap-5 text-base font-semibold">
              <li>
                <a href="#" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-400">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-400">
                  Trips
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setMobileNavOpen(false)} className="hover:text-blue-400">
                  Contact
                </a>
              </li>
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 flex items-center gap-2 text-sm w-full justify-center"
                onClick={() => setMobileNavOpen(false)}
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
            Bringing Better Weekends
          </h1>
          <h2 className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-light max-w-md sm:max-w-2xl drop-shadow-md">
            Curated, founder-led travel experiences with creators, community & clarity.
          </h2>
        </div>

        {/* Stats + Destination Highlight */}
        <div className="w-full px-2 sm:px-6 pb-4 sm:pb-6 flex flex-col-reverse md:flex-row justify-center md:justify-between items-center md:items-end gap-3 md:gap-4 absolute bottom-0 left-0">
          {/* Stats Cards - Show on md and above */}
          <div className="hidden md:flex flex-wrap justify-center md:justify-start gap-2 sm:gap-4">
            {[
              ["Clients", "32,541+", <Mountain key="mountain" />],
              ["Camps", "524+", <Tent key="tent" />],
              ["Incidents", "0", <AlertTriangle key="alert" />],
            ].map(([label, count, icon], i) => (
              <Card
                key={i}
                className="bg-white/20 backdrop-blur-sm text-white px-2 py-3 sm:px-3 sm:py-4 rounded-lg flex flex-col items-center text-center min-w-[90px] sm:min-w-[100px] shadow-md border border-white/30"
              >
                <div className="w-6 h-6 mb-1">{icon}</div>
                <div className="text-base sm:text-xl font-bold">{count}</div>
                <div className="text-xs">{label}</div>
              </Card>
            ))}
          </div>

          {/* Rotating Destination Card */}
          <Card
            className="bg-white/20 backdrop-blur-sm text-white w-full max-w-[240px] lg:max-w-[280px]
                       p-2 sm:p-3 rounded-lg shadow-md border border-white/30 transition-all duration-500 mb-2 md:mb-0"
          >
            <div className="relative w-full h-24 xs:h-28 sm:h-32 rounded-md overflow-hidden mb-2">
              <img
                src={currentDestination.img}
                alt={currentDestination.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <h3 className="text-xs sm:text-sm font-semibold mb-1 truncate">{currentDestination.title}</h3>
            <p className="text-xs mb-2 line-clamp-2">{currentDestination.description}</p>
            <Button variant="ghost" className="self-end text-white hover:bg-white/10 p-0 h-auto">
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
