// import { ChevronLeft, ChevronRight } from "lucide-react";
// import TravelCard from "./TravelCard";
// import { useState } from "react";

// // Import images
// // import kesugiRidge from "@/assets/kesugi-ridge.jpg";
// // import santaCruz from "@/assets/santa-cruz.jpg";
// // import montBlanc from "@/assets/mont-blanc.jpg";
// // import milfordTrack from "@/assets/milford-track.jpg";
// // import balloonAdventure from "@/assets/balloon-adventure.jpg";

// const travelPackages = [
//   {
//     // image: kesugiRidge,
//     title: "Varkala Cliff Chapter",
//     rating: 5,
//     duration: "3 to 4 days",
//     location: "Varkala"
//   },
//   {
//     // image: santaCruz,
//     title: "Gokarna Trek",
//     rating: 5,
//     duration: "3 to 4 days",
//     location: "Goa"
//   },
//   {
//     // image: montBlanc,
//     title: "Coorg Coffee Trail",
//     rating: 4,
//     duration: "7 to 11 days",
//     location: "Coorg"
//   },
//   {
//     // image: balloonAdventure,
//     title: "Deserts of Rajasthan",
//     rating: 5,
//     duration: "2 to 3 days",
//     location: "Rajasthan"
//   },
//   {
//     // image: milfordTrack,
//     title: "Milford Track",
//     rating: 5,
//     duration: "4 to 5 days",
//     location: "South Island, New Zealand"
//   }
// ];

// export const TravelPackages = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 5;

//   const nextPage = () => {
//     setCurrentPage(prev => prev < totalPages ? prev + 1 : 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(prev => prev > 1 ? prev - 1 : totalPages);
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 py-20 px-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-16">
//           <div className="animate-slide-up">
//             <p className="text-adventure-accent font-semibold tracking-wider uppercase text-sm mb-4">
//               PACKAGES
//             </p>
//             <h1 className="text-5xl font-bold text-foreground leading-tight">
//               Top packages that<br />
//               <span className="text-adventure-warm">work for you</span>
//             </h1>
//           </div>
          
//           {/* Navigation */}
//           <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
//             <div className="flex items-center gap-4 text-foreground">
//               <span className="text-adventure-accent font-bold">
//                 {String(currentPage).padStart(2, '0')}
//               </span>
//               <div className="w-12 h-px bg-muted" />
//               <span className="text-muted-foreground">
//                 {String(totalPages).padStart(2, '0')}
//               </span>
//             </div>
            
//             <div className="flex gap-2">
//               <button
//                 variant="outline"
//                 size="icon"
//                 onClick={prevPage}
//                 className="w-12 h-12 rounded-full border-border bg-card/20 backdrop-blur-sm hover:bg-adventure-accent hover:border-adventure-accent hover:text-adventure-primary transition-all duration-300"
//               >
//                 <ChevronLeft className="w-5 h-5" />
//               </button>
//               <button
//                 variant="outline"
//                 size="icon"
//                 onClick={nextPage}
//                 className="w-12 h-12 rounded-full border-border bg-card/20 backdrop-blur-sm hover:bg-adventure-accent hover:border-adventure-accent hover:text-adventure-primary transition-all duration-300"
//               >
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Cards Grid */}
//         <div className="relative h-[500px] overflow-hidden">
//           <div className="absolute inset-0 flex items-center justify-center">
//             {/* Background cards */}
//             <div className="relative w-full max-w-6xl">
//               {travelPackages.map((pkg, index) => {
//                 const isCenter = index === 2;
//                 const isLeft = index < 2;
//                 const isRight = index > 2;
                
//                 let zIndex = 10;
//                 let scale = '0.8';
//                 let translateX = '0px';
//                 let translateY = '0px';
//                 let opacity = '0.6';
                
//                 if (isCenter) {
//                   zIndex = 50;
//                   scale = '1';
//                   opacity = '1';
//                   translateY = '-20px';
//                 } else if (index === 1) {
//                   zIndex = 40;
//                   scale = '0.85';
//                   translateX = '-150px';
//                   translateY = '10px';
//                   opacity = '0.8';
//                 } else if (index === 3) {
//                   zIndex = 40;
//                   scale = '0.85';
//                   translateX = '150px';
//                   translateY = '10px';
//                   opacity = '0.8';
//                 } else if (index === 0) {
//                   zIndex = 30;
//                   scale = '0.7';
//                   translateX = '-280px';
//                   translateY = '40px';
//                   opacity = '0.6';
//                 } else if (index === 4) {
//                   zIndex = 30;
//                   scale = '0.7';
//                   translateX = '280px';
//                   translateY = '40px';
//                   opacity = '0.6';
//                 }
                
//                 return (
//                   <TravelCard
//                     key={index}
//                     index={index}
//                     {...pkg}
//                     className="absolute top-1/2 left-1/2 transition-all duration-700 ease-out hover:!scale-105 hover:!opacity-100 hover:z-[60]"
//                     style={{
//                       transform: `translate(-50%, -50%) translateX(${translateX}) translateY(${translateY}) scale(${scale})`,
//                       zIndex,
//                       opacity
//                     }}
//                   />
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default TravelPackages;
import { Clock, Globe, ChevronRight, ChevronLeft } from "lucide-react";
import coorg from '../assets/coorg.jpeg'
import varkala from '../assets/varkala.jpeg'
import chikmagalur from '../assets/chikmagalur.jpeg'
import goa from '../assets/goa.jpeg'
import deserts from '../assets/deserts.jpeg'

export default function TravelPackages() {
  const packages = [
    {
      id: 1,
      name: "Coorg",
      location: "Coorg",
      duration: "",
      rating: 5,
      image: coorg,
      position: "top-0 left-0 z-10",
    },
    {
      id: 2,
      name: "Varkala",
      location: "Varkala",
      duration: "3 to 4 days",
      rating: 5,
      image: varkala,
      position: "top-16 left-32 z-20",
    },
    {
      id: 3,
      name: "Chikmagalur",
      location: "Chikmagalur",
      duration: "",
      rating: 4,
      image: chikmagalur,
      position: "top-32 left-100 z-80",
    },
    // {
    //   id: 4,
    //   name: "Tour Du Mont Blanc",
    //   location: "Europe - France, Italy, Switzerland",
    //   duration: "7 to 11 days",
    //   rating: 4,
    //   image: "/placeholder.svg?height=400&width=300",
    //   position: "top-32 left-64 z-30",
    // },
    {
      id: 5,
      name: "Goa",
      location: "Goa",
      duration: "",
      rating: 4,
      image: goa,
      position: "top-16 right-64 z-20",
    },
    {
      id: 4,
      name: "Rajasthan",
      location: "Rajasthan",
      duration: "",
      rating: 5,
      image: deserts,
      position: "top-0 right-10 z-10",
    },
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-yellow-400 ${i < rating ? "opacity-100" : "opacity-30"}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-24 relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-16">
        <div>
          <p className="text-rose-400 text-sm font-medium tracking-wider uppercase mb-4">PACKAGES</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
            Top packages that
            <br />
            for you
          </h1>
        </div>

        {/* Navigation */}
        <div className="flex items-center gap-4 text-white">
          <span className="text-lg">01 — 05</span>
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Package Cards */}
      <div className="relative h-96 md:h-[500px]">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className={`absolute w-72 md:w-80 h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl ${pkg.position} hover:scale-105 transition-transform duration-300 cursor-pointer`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 shadow-4xl bg-cover bg-center"
              style={{
                backgroundImage: `url('${pkg.image}')`,
              }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              {/* Rating */}
              <div className="flex gap-1 mb-3">{renderStars(pkg.rating)}</div>

              {/* Package Name */}
              <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight">{pkg.name}</h3>

              {/* Duration */}
              <div className="flex items-center gap-2 mb-2 text-white/80">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{pkg.duration}</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-white/80">
                <Globe className="w-4 h-4" />
                <span className="text-sm">{pkg.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
