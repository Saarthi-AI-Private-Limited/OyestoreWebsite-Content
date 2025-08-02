import React from 'react'

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-card border border-border backdrop-blur-sm rounded-2xl p-6 hover:shadow-card transition-all duration-300 max-w-sm">
      {imageUrl && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-32 object-cover"
          />
        </div>
      )}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-card-foreground uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        <button variant="ghost" size="icon" className="ml-auto">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
