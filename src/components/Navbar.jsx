import React from 'react'

const Navigation = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="text-foreground font-bold text-2xl tracking-wider">
            <span className="block text-lg leading-none">TRAIL</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Join Traveller Button */}
        <button variant="adventure" size="lg" className="hidden md:inline-flex">
          Join Traveller
        </button>

        {/* Mobile Menu Button */}
        <button variant="ghost" size="icon" className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;