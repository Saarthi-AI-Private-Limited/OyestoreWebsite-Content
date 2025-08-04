import { useState, useEffect, useRef } from "react"
import { Calendar, Clock, Users, Star, ChevronRight } from "lucide-react"

const upcomingTrips = [
  {
    id: 1,
    title: "Chikmagalur, Karnataka",
    description: "Coffee land with lush greenery and serene hills",
    duration: "2 nights",
    image: "/placeholder.svg?height=400&width=600&text=Chikmagalur+Coffee+Plantations",
    price: "₹4,999",
    dates: ["Mar 15-17", "Mar 22-24", "Apr 5-7"],
    availableSpots: 8,
    totalSpots: 12,
    rating: 4.8,
    highlights: ["Coffee plantation tours", "Sunrise at Mullayanagiri", "Waterfall trekking"],
    difficulty: "Easy",
    category: "Hills",
  },
  {
    id: 2,
    title: "Coorg, Karnataka",
    description: "Scenic beauty with rivers and spice plantations",
    duration: "2 nights",
    image: "/placeholder.svg?height=400&width=600&text=Coorg+Spice+Gardens",
    price: "₹5,499",
    dates: ["Mar 20-22", "Apr 3-5", "Apr 17-19"],
    availableSpots: 5,
    totalSpots: 10,
    rating: 4.9,
    highlights: ["Spice plantation walks", "River rafting", "Abbey Falls visit"],
    difficulty: "Moderate",
    category: "Hills",
  },
  {
    id: 3,
    title: "Rajasthan Deserts",
    description: "Golden sands and cultural charm",
    duration: "3 nights",
    image: "/placeholder.svg?height=400&width=600&text=Rajasthan+Desert+Safari",
    price: "₹8,999",
    dates: ["Apr 10-13", "Apr 24-27", "May 8-11"],
    availableSpots: 12,
    totalSpots: 15,
    rating: 4.7,
    highlights: ["Camel safari", "Desert camping", "Cultural performances"],
    difficulty: "Easy",
    category: "Desert",
  },
  {
    id: 4,
    title: "Goa Beaches",
    description: "Sun, sand, and vibrant nightlife",
    duration: "2 nights",
    image: "/placeholder.svg?height=400&width=600&text=Goa+Beach+Paradise",
    price: "₹6,499",
    dates: ["Mar 25-27", "Apr 8-10", "Apr 22-24"],
    availableSpots: 3,
    totalSpots: 12,
    rating: 4.6,
    highlights: ["Beach parties", "Water sports", "Sunset cruises"],
    difficulty: "Easy",
    category: "Beach",
  },
  {
    id: 5,
    title: "Varkala, Kerala",
    description: "Cliffside beach views and yoga retreats",
    duration: "2 nights",
    image: "/placeholder.svg?height=400&width=600&text=Varkala+Cliff+Beach",
    price: "₹5,999",
    dates: ["Apr 1-3", "Apr 15-17", "May 1-3"],
    availableSpots: 7,
    totalSpots: 10,
    rating: 4.8,
    highlights: ["Cliff-top yoga", "Ayurvedic treatments", "Beach meditation"],
    difficulty: "Easy",
    category: "Beach",
  },
]

const categories = ["All", "Hills", "Beach", "Desert"]

export default function UpcomingTrips() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [visibleCards, setVisibleCards] = useState(new Set())
  const [selectedTrip, setSelectedTrip] = useState(null)
  const cardRefs = useRef([])

  const filteredTrips =
    selectedCategory === "All" ? upcomingTrips : upcomingTrips.filter((trip) => trip.category === selectedCategory)

  // Intersection Observer for card animations
  useEffect(() => {
    const observers = cardRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]))
          }
        },
        { threshold: 0.2 },
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [filteredTrips])

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-400/10"
      case "Moderate":
        return "text-yellow-400 bg-yellow-400/10"
      case "Hard":
        return "text-red-400 bg-red-400/10"
      default:
        return "text-gray-400 bg-gray-400/10"
    }
  }

  const getAvailabilityStatus = (available, total) => {
    const percentage = (available / total) * 100
    if (percentage <= 25) return { text: "Few spots left!", color: "text-red-400" }
    if (percentage <= 50) return { text: "Filling fast", color: "text-yellow-400" }
    return { text: "Available", color: "text-green-400" }
  }

  return (
    <div className="bg-gradient-to-b from-[#3b4b5f] via-[#1e293b] to-[#0b1320] min-h-screen py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-gray-800/50 p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Trips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTrips.map((trip, index) => {
            const availability = getAvailabilityStatus(trip.availableSpots, trip.totalSpots)

            return (
              <div
                key={trip.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`group relative bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-pink-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  visibleCards.has(index) ? "animate-slide-in-up opacity-100" : "opacity-0 translate-y-[50px]"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={trip.image || "/placeholder.svg"}
                    alt={trip.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Availability Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm ${availability.color}`}
                  >
                    {availability.text}
                  </div>

                  {/* Difficulty Badge */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(trip.difficulty)}`}
                  >
                    {trip.difficulty}
                  </div>

                  {/* Price */}
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-4 py-2 rounded-full font-bold">
                    {trip.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title and Rating */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-1">{trip.title}</h3>
                      <p className="text-gray-400 text-sm">{trip.description}</p>
                    </div>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="text-sm font-medium">{trip.rating}</span>
                    </div>
                  </div>

                  {/* Trip Details */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{trip.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>
                        {trip.availableSpots}/{trip.totalSpots} spots
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <h4 className="text-pink-400 text-sm font-medium">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trip.highlights.slice(0, 2).map((highlight, idx) => (
                        <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                      {trip.highlights.length > 2 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full">
                          +{trip.highlights.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Available Dates */}
                  <div className="space-y-2">
                    <h4 className="text-pink-400 text-sm font-medium">Next Dates:</h4>
                    <div className="flex flex-wrap gap-2">
                      {trip.dates.slice(0, 2).map((date, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-1 px-2 py-1 bg-blue-400/10 text-blue-400 text-xs rounded-full"
                        >
                          <Calendar className="w-3 h-3" />
                          <span>{date}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => setSelectedTrip(trip)}
                    className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                  >
                    <span>Book Now</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="border border-pink-400 text-pink-400 px-8 py-3 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300">
            View All Trips
          </button>
        </div>
      </div>

      {/* Trip Detail Modal (Simple version) */}
      {selectedTrip && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedTrip.image || "/placeholder.svg"}
                alt={selectedTrip.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedTrip(null)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-white text-2xl font-bold">{selectedTrip.title}</h3>
              <p className="text-gray-300">{selectedTrip.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-gray-400">
                  <span className="text-pink-400">Duration:</span> {selectedTrip.duration}
                </div>
                <div className="text-gray-400">
                  <span className="text-pink-400">Price:</span> {selectedTrip.price}
                </div>
                <div className="text-gray-400">
                  <span className="text-pink-400">Difficulty:</span> {selectedTrip.difficulty}
                </div>
                <div className="text-gray-400">
                  <span className="text-pink-400">Available:</span> {selectedTrip.availableSpots} spots
                </div>
              </div>

              <div>
                <h4 className="text-pink-400 font-medium mb-2">All Highlights:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedTrip.highlights.map((highlight, idx) => (
                    <span key={idx} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-pink-400 to-purple-400 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                Book This Trip
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
