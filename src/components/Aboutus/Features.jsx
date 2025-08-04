"use client";

import { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Compass,
  Users,
  MessageCircle,
  CheckCircle,
  ChevronDown,
} from "lucide-react";

const timelineData = [
  {
    id: 1,
    icon: MapPin,
    title: "Handpicked Weekend Destinations",
    subtitle: "Close to Bangalore, but far from ordinary.",
    description:
      "We carefully curate destinations within driving distance of Bangalore that offer extraordinary experiences. From hidden waterfalls to serene hill stations, each location is chosen for its unique charm and accessibility.",
    color: "from-pink-400 to-rose-400",
    bgColor: "bg-pink-400/10",
    features: [
      "Curated locations within 300km",
      "Hidden gems off the beaten path",
      "Perfect for weekend getaways",
    ],
  },
  {
    id: 2,
    icon: Compass,
    title: "Founder-Led for Real Vibes",
    subtitle: "Travel with passion, not just plans.",
    description:
      "Our founders personally lead trips, bringing authentic passion and deep local knowledge. This isn't just tourism - it's about sharing genuine experiences and creating meaningful connections with places and people.",
    color: "from-blue-400 to-cyan-400",
    bgColor: "bg-blue-400/10",
    features: [
      "Personal guidance from founders",
      "Authentic local experiences",
      "Passionate storytelling",
    ],
  },
  {
    id: 3,
    icon: Users,
    title: "Influencer Energy on Every Trip",
    subtitle: "Meet creators, make memories, be part of the story.",
    description:
      "Join content creators and influencers who bring vibrant energy to every adventure. Document your journey, share your story, and become part of a creative community that celebrates travel and exploration.",
    color: "from-purple-400 to-violet-400",
    bgColor: "bg-purple-400/10",
    features: [
      "Content creator community",
      "Instagram-worthy moments",
      "Creative collaboration opportunities",
    ],
  },
  {
    id: 4,
    icon: MessageCircle,
    title: "Community-Driven",
    subtitle: "Chill with strangers, leave with friends.",
    description:
      "Our trips are designed to foster genuine connections. Through shared experiences, group activities, and communal moments, you'll build lasting friendships that extend far beyond the journey itself.",
    color: "from-green-400 to-emerald-400",
    bgColor: "bg-green-400/10",
    features: [
      "Small group sizes (8-12 people)",
      "Icebreaker activities",
      "Lifelong friendship opportunities",
    ],
  },
  {
    id: 5,
    icon: CheckCircle,
    title: "Transparent Planning",
    subtitle: "No hidden costs. No chaos. Just clarity.",
    description:
      "Everything is upfront and transparent. From detailed itineraries to clear pricing, we believe in honest communication. You'll know exactly what to expect, allowing you to focus on enjoying your adventure.",
    color: "from-orange-400 to-amber-400",
    bgColor: "bg-orange-400/10",
    features: [
      "All-inclusive pricing",
      "Detailed day-by-day itineraries",
      "24/7 support during trips",
    ],
  },
];

export default function ScrollableTimeline() {
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  // Intersection Observer for section visibility and active section
  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, index]));

            // Set active section based on which section is most visible
            const rect = entry.boundingClientRect;
            const windowHeight = window.innerHeight;
            const visibilityRatio =
              Math.max(
                0,
                Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
              ) / windowHeight;

            if (visibilityRatio > 0.5) {
              setActiveSection(index);
            }
          }
        },
        { threshold: [0.3, 0.5, 0.7] }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <div className="bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0b1320] min-h-screen">
      {/* Timeline Sections */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-400 via-purple-400 to-blue-400 hidden lg:block" />

        {timelineData.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={item.id}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="min-h-screen flex items-center py-20 px-4 sm:px-8 relative"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 hidden lg:block z-10" />

              <div className="max-w-4xl mx-auto w-full">
                <div
                  className={`text-center ${
                    visibleSections.has(index)
                      ? "animate-slide-in-up opacity-100"
                      : "opacity-0 translate-y-[50px]"
                  } transition-all duration-1000 ease-out`}
                >
                  {/* Icon and Number */}
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <div
                      className={`p-4 rounded-full ${item.bgColor} border border-gray-700`}
                    >
                      <IconComponent className={`w-12 h-12 text-white`} />
                    </div>
                    <span className="text-8xl font-bold text-gray-800">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="space-y-6 max-w-3xl mx-auto">
                    <h3 className="text-white text-4xl sm:text-5xl font-bold">
                      {item.title}
                    </h3>

                    <p
                      className={`text-xl font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
