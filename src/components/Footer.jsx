import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import winterCamping from "@/assets/winter-camping.jpg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Us */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">About Us</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              We are an innovative outdoor company helping adventurers discover amazing camping experiences worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">hello@adventurecamp.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">+1 234 567 890</span>
              </div>
              
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Services */}
          {/* <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Services</h3>
            <ul className="space-y-2">
              {[
                "Tent Camping", 
                "RV Sites", 
                "Guided Tours", 
                "Equipment Rental",
                "Group Packages"
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                "Home",
                "About",
                "Destinations", 
                "Blog",
                "Contact Us",
                "Privacy Policy"
              ].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Subscribe to get adventure updates and special offers delivered to your inbox!
            </p>
            
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-secondary border-border"
              />
              <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </button>
            </div>
            
            {/* Winter camping image */}
            <div className="mt-6">
              {/* <img 
                src={winterCamping} 
                alt="Winter camping" 
                className="w-full h-32 object-cover rounded-lg"
              /> */}
            </div>
          </div>
        </div>
        
        {/* Social Media & Copyright */}
        {/* <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" }
            ].map(({ Icon, href }, index) => (
              <a 
                key={index}
                href={href}
                className="w-10 h-10 bg-secondary hover:bg-primary/20 rounded-full flex items-center justify-center transition-colors group"
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
          
          <p className="text-muted-foreground text-sm">
            © 2025 Oyestore. All rights reserved.
          </p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;