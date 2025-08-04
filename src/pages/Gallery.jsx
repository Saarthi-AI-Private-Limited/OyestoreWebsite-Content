import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/OyestoreHero.mov";
import logo from "../assets/oyestorelogo.png";
import { Button } from "@/components/ui/button";
import { User, Menu, X } from "lucide-react";
import i1 from "../assets/drive-download-20250803T111603Z-1-001/20230304_091308.jpg"
import i2 from "../assets/drive-download-20250803T111603Z-1-001/20230304_091549.jpg";
import i3 from "../assets/drive-download-20250803T111603Z-1-001/20230304_131948.jpg";
import i4 from "../assets/drive-download-20250803T111603Z-1-001/20230304_135134 (1).jpg";
import i5 from "../assets/drive-download-20250803T111603Z-1-001/20230304_135134.jpg";
import i6 from "../assets/drive-download-20250803T111603Z-1-001/20230304_135154.jpg";
import i7 from "../assets/drive-download-20250803T111603Z-1-001/20230304_172543.jpg";
import i8 from "../assets/drive-download-20250803T111603Z-1-001/20230304_173453.jpg";
import i9 from "../assets/drive-download-20250803T111603Z-1-001/20230304_173714.jpg";
import i10 from "../assets/drive-download-20250803T111603Z-1-001/20230304_175107.jpg";
import i11 from "../assets/drive-download-20250803T111603Z-1-001/20230304_180757-EFFECTS.jpg";
import i12 from "../assets/drive-download-20250803T111603Z-1-001/20230304_182914.jpg";
// import i13 from "../assets/drive-download-20250803T111603Z-1-001/20230304_132021.jpg";
// import i14 from "../assets/drive-download-20250803T111603Z-1-001/20230304_132023.jpg";
// import i15 from "../assets/drive-download-20250803T111603Z-1-001/20230304_132025.jpg";
// import i16 from "../assets/drive-download-20250803T111603Z-1-001/20230304_132027.jpg";
// import i17 from "../assets/drive-download-20250803T111603Z-1-001/20230304_132029.jpg";
// import i18 from "../assets/drive-download-20250803T111603Z-1-001/20230304_132031.jpg";



const galleryData = [
  {
    id: 1,
    title: "Himalayan Heights",
    location: "Himachal Pradesh",
    description: "Witness breathtaking sunrise views from snow-capped peaks",
    images: [
      i1,
      i2,
      i3,
    ],
    category: "Mountains",
  },
  {
    id: 2,
    title: "Coastal Paradise",
    location: "Goa & Kerala",
    description: "Golden beaches meet azure waters in perfect harmony",
    images: [
      i4,
      i5,
      i6,
    ],
    category: "Beaches",
  },
  {
    id: 3,
    title: "Desert Dreams",
    location: "Rajasthan",
    description: "Experience the magic of golden dunes and starlit nights",
    images: [
      i7,
      i8,
      i9,
    ],
    category: "Deserts",
  },
  {
    id: 4,
    title: "Backwater Bliss",
    location: "Kerala",
    description: "Serene waterways through lush green landscapes",
    images: [
      i10,
      i11,
      i12,
    ],
    category: "Backwaters",
  },
  {
    id: 5,
    title: "Hill Station Escape",
    location: "Munnar & Coorg",
    description: "Rolling tea gardens and misty mountain mornings",
    images: [
      i1,
      i2,
      i3,
    ],
    category: "Hills",
  },
];

export default function HeroSection() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const mobileNavRef = useRef(null);
  const navigate = useNavigate();
  const [currentImageIndices, setCurrentImageIndices] = useState(
    galleryData.map(() => 0)
  );
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);
  const scrollTimeoutRef = useRef();

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

  // Intersection Observer for section visibility
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Scroll-based image changing
  useEffect(() => {
    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        sectionRefs.current.forEach((ref, sectionIndex) => {
          if (!ref) return;

          const rect = ref.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const sectionCenter = rect.top + rect.height / 2;
          const windowCenter = windowHeight / 2;

          // Calculate how far the section is from the center of the viewport
          const distanceFromCenter = Math.abs(sectionCenter - windowCenter);
          const maxDistance = windowHeight / 2;

          if (distanceFromCenter < maxDistance) {
            // Calculate which image to show based on scroll position
            const scrollProgress = 1 - distanceFromCenter / maxDistance;
            const imageCount = galleryData[sectionIndex].images.length;
            const imageIndex = Math.floor(scrollProgress * imageCount);
            const clampedIndex = Math.max(
              0,
              Math.min(imageIndex, imageCount - 1)
            );

            setCurrentImageIndices((prev) => {
              const newIndices = [...prev];
              newIndices[sectionIndex] = clampedIndex;
              return newIndices;
            });
          }
        });
      }, 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Hero Section with Video Background */}
      <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#1E293B] to-[#334155]">
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
          <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-[#334155] to-transparent pointer-events-none" />
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Navbar */}
          <nav className="flex items-center justify-between px-2 sm:px-6 py-2 mt-4 mx-2 bg-white/10 backdrop-blur-md rounded-full shadow-lg text-white relative z-20">
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
            <ul className="hidden md:flex gap-2 sm:gap-4 text-xs sm:text-sm font-medium tracking-wide">
              <li>
                <button
                  className="hover:text-gray-300 bg-transparent border-none p-0"
                  onClick={() => navigate("/")}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="hover:text-gray-300 bg-transparent border-none p-0"
                  onClick={() => navigate("/about")}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  className="hover:text-gray-300 bg-transparent border-none p-0"
                  onClick={() => navigate("/gallery")}
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  className="hover:text-gray-300 bg-transparent border-none p-0"
                  onClick={() => navigate("/trips")}
                >
                  Trips
                </button>
              </li>
              <li>
                <button
                  className="hover:text-gray-300 bg-transparent border-none p-0"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </button>
              </li>
            </ul>

            {/* Desktop Join Button */}
            <Button
              className="hidden md:flex bg-blue-600 hover:bg-blue-700 text-white rounded-full px-3 py-1 items-center gap-2 text-xs sm:text-sm"
              onClick={() => navigate("/join")}
            >
              <User className="w-4 h-4" />
              Join Traveller
            </Button>
          </nav>

          {/* Mobile Nav Dropdown */}
          {mobileNavOpen && (
            <div
              ref={mobileNavRef}
              className="md:hidden absolute top-full left-0 right-0 bg-[#1E293B]/90 backdrop-blur z-10 rounded-b-2xl px-4 py-3 shadow-lg animate-slide-down"
            >
              <ul className="flex flex-col gap-4 text-base font-semibold">
                <li>
                  <button
                    className="hover:text-blue-400 bg-transparent border-none p-0 w-full text-left"
                    onClick={() => {
                      setMobileNavOpen(false);
                      navigate("/");
                    }}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 bg-transparent border-none p-0 w-full text-left"
                    onClick={() => {
                      setMobileNavOpen(false);
                      navigate("/about");
                    }}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 bg-transparent border-none p-0 w-full text-left"
                    onClick={() => {
                      setMobileNavOpen(false);
                      navigate("/gallery");
                    }}
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 bg-transparent border-none p-0 w-full text-left"
                    onClick={() => {
                      setMobileNavOpen(false);
                      navigate("/trips");
                    }}
                  >
                    Trips
                  </button>
                </li>
                <li>
                  <button
                    className="hover:text-blue-400 bg-transparent border-none p-0 w-full text-left"
                    onClick={() => {
                      setMobileNavOpen(false);
                      navigate("/contact");
                    }}
                  >
                    Contact
                  </button>
                </li>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 py-1.5 flex items-center gap-2 text-sm w-full justify-center"
                  onClick={() => {
                    setMobileNavOpen(false);
                    navigate("/join");
                  }}
                >
                  <User className="w-4 h-4" />
                  Join Traveller
                </Button>
              </ul>
            </div>
          )}

          {/* Hero Text */}
          <div className="relative z-20 max-w-xl sm:max-w-2xl mx-auto text-white animate-fade-in-up pt-16 sm:pt-54 px-4 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-2 leading-tight">
              Journey Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                {" "}
                India's Beauty
              </span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg mb-6 max-w-xl mx-auto">
              Experience our destinations through an immersive visual journey.
              Scroll down to see images transform as you explore.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Sections */}
      <div className="bg-gradient-to-b from-[#1E293B] to-[#334155]">
        {galleryData.map((destination, index) => (
          <div
            key={destination.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="min-h-screen flex items-center py-20 px-4 sm:px-8"
          >
            <div className="max-w-7xl mx-auto w-full">
              <div
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <div
                  className={`space-y-6 ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  } ${
                    visibleSections.has(index)
                      ? "animate-slide-in-left opacity-100"
                      : "opacity-0 translate-x-[-50px]"
                  } transition-all duration-1000 ease-out`}
                >
                  <div className="space-y-4">
                    <span className="inline-block px-3 py-1 bg-pink-400/20 text-pink-300 text-sm rounded-full">
                      {destination.category}
                    </span>

                    <h3 className="text-white text-3xl sm:text-4xl font-bold">
                      {destination.title}
                    </h3>

                    <p className="text-pink-400 text-lg font-medium">
                      {destination.location}
                    </p>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {destination.description}
                    </p>
                  </div>

                  {/* Image Counter */}
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400 text-sm">Image:</span>
                    {destination.images.map((_, imgIndex) => (
                      <div
                        key={imgIndex}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          currentImageIndices[index] === imgIndex
                            ? "bg-pink-400 w-6"
                            : "bg-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  } ${
                    visibleSections.has(index)
                      ? "animate-slide-in-right opacity-100"
                      : "opacity-0 translate-x-[50px]"
                  } transition-all duration-100 ease-out delay-200`}
                >
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    {destination.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image || "/placeholder.svg"}
                        alt={`${destination.title} - Image ${imgIndex + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                          currentImageIndices[index] === imgIndex
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                        }`}
                      />
                    ))}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                    {/* Floating Badge */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {currentImageIndices[index] + 1} /{" "}
                      {destination.images.length}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-400/10 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-400/10 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Final CTA Section */}
        <div className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-white text-3xl font-bold mb-4">
              Ready to Create Your Own Adventure?
            </h3>
            <p className="text-gray-300 text-lg mb-8">
              Join thousands of travelers who have discovered India's hidden
              gems with us.
            </p>
            <button className="bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
