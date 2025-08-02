import StatCard from './StatCard'
import FeatureCard from './FeatureCard'
import OyestoreHero from '../assets/OyestoreHero.mov'
import logo from '../assets/oyestorelogo.png'

const Hero = () => {
  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Gallery", href: "#" },
    { name: "Feature", href: "#" },
    { name: "Contact us", href: "#" },
  ];

  return (
    <div className="min-h-screen  bg-black relative">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        
        {/* Video Background */}
        <video
          className="absolute top-0 transform  w-screen h-full z-0 object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ 
            objectPosition: 'center'
          }}
        >
          <source src={OyestoreHero} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay (optional for darkening) */}
        <div className="absolute bg-gray-900 inset-0  opacity-30 z-0" />

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="text-white font-bold text-2xl tracking-wider">
                <span className="block text-lg leading-none">
                  <img className='h-16 w-16 scale-150 mt-2' src={logo}></img>
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden  md:flex items-center space-x-8">
              {/* {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </a>
              ))} */}
            </div>

            {/* Join Traveller Button */}
            <button className="hidden md:inline-flex bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200">
              Join Traveller
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white">
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

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col justify-center min-h-screen px-6 pt-32">
          <div className="max-w-7xl mx-auto w-full">
            
            {/* Main Headline */}
            <div className="text-center mb-16">
              <h1 className="text-6xl md:text-8xl lg:text-8xl font-black text-foreground leading-none tracking-wider">
                BRINGING BETTER 
              </h1>
              <p className="text-lg md:text-xl text-white max-w-3xl mx-auto mt-4">
                Curated, founder-led travel experiences with creators, community & clarity.
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col lg:flex-row justify-between items-end space-y-8 lg:space-y-0 lg:space-x-8">
              
              {/* Stats Cards */}
              <div className="flex flex-col sm:flex-row gap-6 lg:gap-8">
                <StatCard 
                  icon={
                    <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1V3H9V1L3 7V9H21ZM12 8C14.2 8 16 9.8 16 12S14.2 16 12 16S8 14.2 8 12S9.8 8 12 8Z"/>
                    </svg>
                  }
                  value="3254+"
                  label="Satisfied Clients"
                />
                <StatCard 
                  icon={
                    <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2L13.09,6.26L17.64,5.55L17.64,5.55L15.55,9.5L20.73,11.5L15.55,14.5L17.64,18.45L13.09,17.74L12,22L10.91,17.74L6.36,18.45L8.45,14.5L3.27,11.5L8.45,9.5L6.36,5.55L10.91,6.26L12,2Z"/>
                    </svg>
                  }
                  value="534+"
                  label="Camps Organized"
                />
                <StatCard 
                  icon={
                    <svg className="w-6 h-6 text-foreground" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2ZM12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4ZM12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6ZM12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
                    </svg>
                  }
                  value="0"
                  label="Incident Happened"
                />
              </div>

              {/* Feature Card */}
              {/* <div className="self-end">
                <FeatureCard 
                  title="THE HIMALAYAS MOUNTAIN"
                  description="We organize professional adventures in the most dangerous corners of our planet. People change after our tours. Forever."
                  imageUrl="/lovable-uploads/2bd00d29-28c8-48af-8ba8-1c2107015222.png"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
