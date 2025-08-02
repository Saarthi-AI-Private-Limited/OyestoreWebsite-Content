import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import everestImage from '@/assets/everest-base-camp.jpg';
// import markhaImage from '@/assets/markha-valley.jpg';
// import annapurnaImage from '@/assets/annapurna-circuit.jpg';
// import kilimanjaroImage from '@/assets/kilimanjaro.jpg';
// import patagoniaImage from '@/assets/patagonia.jpg';
import varkala from '../assets/Varkala.jpeg'
import goa from '../assets/goa.jpeg'
import coorg from '../assets/coorg.jpeg'
import chikmagalur from '../assets/chikmagalur.jpeg'
import desert from '../assets/deserts.jpeg'

const destinations = [
  {
    id: 1,
    name: 'Varkala Cliff Chapter',
    location: 'Varkala',
    duration: '4 Nights 3 Days',
    description: 'Beach cafés, cliff-top yoga, and sunsets with creators',
    image: varkala,
   
  },
  {
    id: 2,
    name: 'Gokarna Calling',
    location: 'Goa - Gokarna',
    duration: '4 Days ',
    description: 'Hidden beaches, coastal treks, and bonfires with a vibe',
    image: goa
  },
  {
    id: 3,
    name: 'Coorg Trails',
    location: 'Coorg',
    duration: '',
    description: ' Coffee plantations, jungle vibes, and cool misty mornings',
    image: coorg
  },
  {
    id: 4,
    name: 'Chikmagalur Chapter',
    location: 'Chikmagalur',
    duration: '',
    description: ' Hill views, waterfall chasing & good coffee conversations',
    image: chikmagalur,
   
  },
  {
    id: 5,
    name: 'Deserts of Rajasthan',
    location: 'Rajasthan',
    duration: '',
    description: 'Lose yourself in the dunes, find yourself in the silence.',
    image: desert,
  
  }
];

const Trips = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const getVisibleDestinations = () => {
    const visible = [];
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + destinations.length) % destinations.length;
      visible.push({ ...destinations[index], position: i });
    }
    return visible;
  };

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-trek-purple blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-trek-pink blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:py-20 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 lg:mb-20">
          <div className="mb-8 lg:mb-0">
            <p className=" font-medium text-sm lg:text-sm tracking-widest uppercase mb-2">
              POPULARLY
            </p>
            <h1 className="text-4xl lg:text-4xl font-bold text-trek-text leading-tight">
            Popular Escapes & Treks <br/> Loved by Our Travelers
            </h1>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-trek-text-muted">
              <span className="text-lg font-medium text-trek-purple">
                {String(currentIndex + 1).padStart(2, '0')}
              </span>
              <div className="w-8 h-px bg-trek-text-muted"></div>
              <span className="text-lg font-medium">
                {String(destinations.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border-trek-text-muted/30 hover:border-trek-purple hover:bg-trek-purple/10 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5 text-trek-text" />
              </button>
              <button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border-trek-text-muted/30 hover:border-trek-purple hover:bg-trek-purple/10 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5 text-trek-text" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-7xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6 items-center">
                {getVisibleDestinations().map((destination, idx) => {
                  const isCenter = destination.position === 0;
                  return (
                    <div
                      key={`${destination.id}-${idx}`}
                      className={`
                        relative transition-all duration-700 ease-out cursor-pointer
                        ${isCenter 
                          ? 'lg:col-span-3 lg:scale-100 z-20' 
                          : 'lg:col-span-1 lg:scale-90 opacity-70 hover:opacity-90'
                        }
                        ${destination.position === -1 ? 'lg:order-1' : ''}
                        ${destination.position === 0 ? 'lg:order-2' : ''}
                        ${destination.position === 1 ? 'lg:order-3' : ''}
                      `}
                      onClick={() => !isCenter && goToSlide((currentIndex + destination.position + destinations.length) % destinations.length)}
                    >
                      <div className={`
                        relative rounded-2xl lg:rounded-3xl overflow-hidden bg-gradient-card backdrop-blur-sm
                        ${isCenter ? 'h-96 lg:h-[500px]' : 'h-80 lg:h-96'}
                        group hover:scale-105 transition-transform duration-500
                      `}>
                        <div className="absolute inset-0">
                          <img
                            src={destination.image}
                            alt={destination.name}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-overlay"></div>
                        </div>

                        <div className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end">
                          {/* {isCenter && (
                            <div className="mb-4">
                              <div className="inline-flex items-center gap-2 bg-trek-purple/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-trek-text">
                                <span className="w-2 h-2 bg-trek-purple rounded-full"></span>
                                {destination.difficulty}
                              </div>
                            </div>
                          )} */}

                          <div className="space-y-2 lg:space-y-3">
                            <h3 className={`
                              font-bold text-trek-text leading-tight
                              ${isCenter ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-2xl'}
                            `}>
                              {destination.name}, {destination.location}
                            </h3>

                            <p className={`
                              text-trek-text-muted
                              ${isCenter ? 'text-base lg:text-lg' : 'text-sm lg:text-base'}
                            `}>
                              {destination.description}
                            </p>

                            <div className="flex items-center justify-between pt-2">
                              <div className="flex items-center gap-4">
                                <div className="flex items-center gap-1 text-trek-text-muted">
                                  <Clock className="w-4 h-4" />
                                  <span className="text-sm">{destination.duration}</span>
                                </div>
                                {isCenter && (
                                  <div className="flex items-center gap-1 text-trek-text-muted">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm">{destination.location}</span>
                                  </div>
                                )}
                              </div>
                              {/* <div className={`
                                font-bold text-trek-text
                                ${isCenter ? 'text-xl lg:text-2xl' : 'text-lg'}
                              `}>
                                ${destination.price.toLocaleString()}
                              </div> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-12">
            <div className="flex gap-2">
              {destinations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${index === currentIndex 
                      ? 'bg-trek-purple w-8' 
                      : 'bg-trek-text-muted/30 hover:bg-trek-text-muted/50'
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trips;
