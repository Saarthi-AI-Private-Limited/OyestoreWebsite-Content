import { Star } from "lucide-react";

const TestimonialSection = () => {
  return (
    <section className="relative py-20 px-4 text-center bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
        Hear It from the 
          <br />
          <span className="text-primary">Tribe</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
          “This was more than a trip — it was therapy with sunsets!”
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-6 h-6 fill-primary text-primary" />
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-primary font-semibold text-lg">Sneha S</p>
          <p className="text-muted-foreground">Gokarna Chapter</p>
        </div>
      </div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
    </section>
  );
};

export default TestimonialSection;