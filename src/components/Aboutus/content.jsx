import {
  Lightbulb,
  Users,
  Camera,
  TreePalm as PalmTree,
  Bus,
  Car,
  Plane,
  Waves,
  Luggage as Suitcase,
  Mail,
  Instagram,
  MapPin,
} from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

// Main About Us section component
export default function AboutUsSection() {
  // Array of features for the "Why Oyestore?" section
  const whyOyestoreFeatures = [
    { icon: <Lightbulb className="w-8 h-8" />, title: "Transparency First", desc: "No hidden costs, no shady plans. Every detail is laid out upfront." },
    { icon: <Users className="w-8 h-8" />, title: "Founder-Led", desc: "Every trip is led by the Oyestore founder – because we believe in being with our community." },
    { icon: <Camera className="w-8 h-8" />, title: "Influencer Onboarded", desc: "Each trip features popular travel content creators for networking and fresh content." },
    { icon: <PalmTree className="w-8 h-8" />, title: "Weekend-Focused", desc: "Quick getaways that respect your 9-to-5." },
    { icon: <Bus className="w-8 h-8" />, title: "Multi-mode Options", desc: "Self-drive, bus, or quick flights – we adapt to you." },
  ];

  // Array of trip types for the "Trip Types" section
  const tripTypes = [
    { icon: <Car className="w-8 h-8" />, title: "Road Trips", desc: "(Self-drive & Shared)" },
    { icon: <Bus className="w-8 h-8" />, title: "Bus Trips", desc: "(Sleeper & Semi-sleeper)" },
    { icon: <Plane className="w-8 h-8" />, title: "Flight Getaways", desc: "(Domestic & Short International)" },
    { icon: <Waves className="w-8 h-8" />, title: "Experience Themes", desc: "Beachside Yoga, Hidden Treks, Wellness Retreats, Backpacking Blitzes" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#3b4b5f] via-[#1e293b] to-[#0b1320] text-white font-sans py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-20 relative z-10">
        {/* Main heading and description */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 drop-shadow">
            Bringing Better – Curated Weekend Getaways for the Bold & Curious
          </h2>
          <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Oyestore is a Bangalore-based travel collective redefining weekend escapes with curated, founder-led trips that blend local culture, community vibes, and influencer energy. We’re not just travel planners — we’re memory makers.
          </p>
        </div>

        {/* Why Oyestore section */}
        <section>
          <h3 className="text-3xl font-bold text-center mb-10">Why Oyestore?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyOyestoreFeatures.map(({ icon, title, desc }, idx) => (
              <Card key={idx} className="bg-white/10 border border-white/20 text-white p-6 text-center hover:scale-[1.02] transition-all duration-300 rounded-xl shadow-md shadow-white/5">
                <div className="text-pink-400 mb-4 flex justify-center">{icon}</div>
                <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
                <CardContent className="text-slate-300 p-0">{desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trip Types section */}
        <section>
          <h3 className="text-3xl font-bold text-center mb-10">Trip Types</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tripTypes.map(({ icon, title, desc }, idx) => (
              <Card key={idx} className="bg-white/10 border border-white/20 text-white p-6 text-center hover:scale-[1.02] transition-transform duration-300 rounded-xl">
                <div className="text-pink-400 mb-4 flex justify-center">{icon}</div>
                <CardTitle className="text-xl font-semibold mb-2">{title}</CardTitle>
                <CardContent className="text-slate-300 p-0">{desc}</CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Target Audience section */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Target Audience</h3>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Young Professionals, Students, Content Creators, Solo Travelers, and Bangalore-based Corporate Groups.
          </p>
        </div>

        {/* Current Operations section */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Current Operations</h3>
          <ul className="text-slate-300 text-lg space-y-2">
            <li><strong className="text-white">Base:</strong> Bangalore</li>
            <li><strong className="text-white">Trip Destinations:</strong> South India – Varkala, Gokarna, Coorg, Chikmagalur, Wayanad & more</li>
            <li><strong className="text-white">Booking:</strong> BookMyShow – Oyestore</li>
            <li><strong className="text-white">Website:</strong> [Under Revamp]</li>
            <li><strong className="text-white">Socials:</strong> Instagram, Facebook, YouTube – launching soon</li>
          </ul>
        </div>

        {/* Sample Trip section */}
        <Card className="bg-white/10 rounded-xl p-8 border border-white/20 text-center shadow-lg shadow-white/10">
          <Suitcase className="w-12 h-12 text-pink-400 mx-auto mb-4" />
          <CardTitle className="text-2xl font-bold text-white mb-3">Sample Trip: Chapter Two – Varkala</CardTitle>
          <CardContent className="text-slate-300 text-lg p-0">
            2 Nights / 3 Days • Bus from Bangalore • Beach café hopping • Sunrise sessions • Cliff-top stay • Guest influencer + Founder-led • Community-driven content with stories & reels.
          </CardContent>
        </Card>

        {/* Collaboration Opportunities section */}
        <div className="text-center space-y-4">
          <h3 className="text-3xl font-bold">Collaboration Opportunities</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-lg list-none p-0">
            <li>Influencer Trips</li>
            <li>Corporate Retreats</li>
            <li>Brand Sponsorships</li>
            <li>Travel Merchandise Partnerships</li>
            <li>Vendor Collaborations (Transport, Stay, Experience)</li>
          </ul>
        </div>

        {/* Contact footer */}
        <footer className="text-center text-sm text-slate-400 mt-12 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4" /> oyestore.trips@gmail.com
          </p>
          <p className="flex items-center justify-center gap-2">
            <Instagram className="w-4 h-4" /> Instagram: @oyestore.in (coming soon)
          </p>
          <p className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Bangalore, India
          </p>
        </footer>
      </div>
    </section>
  );
}
