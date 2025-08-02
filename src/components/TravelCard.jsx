import { Star, Clock, MapPin } from "lucide-react";

const TravelCard = ({
  image,
  title,
  rating,
  duration,
  location,
  className = "",
  index,
  style = {},
}) => {
  const stars = Array.from({ length: 5 }, (_, i) => i < rating);

  return (
    <div
      className={`relative w-80 h-96 rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl group cursor-pointer animate-fade-in ${className}`}
      style={{
        animationDelay: `${index * 150}ms`,
        background: "linear-gradient(to bottom, #1f2937, #111827)", // fallback gradient
        ...style,
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          {stars.map((filled, i) => (
            <Star
              key={i}
              className={`w-4 h-4 transition-colors duration-200 ${
                filled ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
              }`}
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 leading-tight">{title}</h3>

        {/* Details */}
        <div className="space-y-2 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-yellow-400/10 to-transparent pointer-events-none" />
    </div>
  );
};

export default TravelCard;

  