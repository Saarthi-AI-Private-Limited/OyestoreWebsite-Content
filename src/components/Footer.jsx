import React from "react";
import { Mail, Phone, MapPin, Instagram, Send } from "lucide-react";
import footer from "../assets/footer.png";

const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] text-[#e0e0e0] pt-16 relative overflow-hidden">
      {/* Content Wrapper */}
      <div className="px-6 md:px-20">
        {/* Top Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left mb-16">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="text-sky-400" />
              <span className="text-lg font-semibold">Location</span>
            </div>
            <p>📍 Based in Bangalore</p>
            <p> Address- Flat 201, Banashankari Krupa, SG Palya, Taverekere</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="text-sky-400" />
              <span className="text-lg font-semibold">Phone</span>
            </div>
            <p>📞 +91 7217411667</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="text-sky-400" />
              <span className="text-lg font-semibold">Email</span>
            </div>
            <p>📧 oyestore.trips@gmail.com</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">
          {/* About Us */}
          <div>
            <h4 className="text-xl font-bold mb-4">About Us</h4>
            <p className="text-gray-400 mb-4">
              Oye Store curates authentic travel escapes, building a vibrant
              community of explorers who crave real experiences.
            </p>
            <div className="flex gap-4 text-white">
              <a
                href="https://www.instagram.com/oyestoreforgram?igsh=MTMyZnVuMDAyb3d1ZA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="cursor-pointer hover:text-sky-400" />
              </a>
              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium underline hover:text-sky-400"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Trek Packages</li>
              <li>Classic Tent Camping</li>
              <li>Group Travel</li>
              <li>Weekend Escapes</li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xl font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Upcoming Trips</li>
              <li>Travel Gallery</li>
              <li>Blog & Tips</li>
              <li>Meet Our Team</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Join our tribe to get exclusive travel updates and offers.
            </p>
            <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-4 py-2">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="bg-transparent outline-none text-sm flex-grow text-white placeholder-gray-400"
              />
              <Send className="text-blue-400 cursor-pointer" size={18} />
            </div>
          </div>
        </div>

        {/* Bottom Legal Links */}
        <div className="text-center text-sm text-gray-400 pb-6">
          <p>
            📄{" "}
            <a href="/privacy-policy" className="underline hover:text-sky-400">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/terms" className="underline hover:text-sky-400">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>

      {/* Full-Width Illustration */}
      <div className="w-screen mt-10">
        <img
          src={footer}
          alt="Footer Decoration"
          className="w-full object-cover"
        />
      </div>
    </footer>
  );
};

export default Footer;
