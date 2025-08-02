import React from 'react'
const Banners = () => {
    return (
      <section className="relative py-20 px-4 bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Discount badge and logo */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 bg-card/20 backdrop-blur-sm border border-border rounded-full px-6 py-3">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">
                  SPECIAL DISCOUNT
                </span>
                <span className="text-foreground font-semibold text-lg">MOONSONY</span>
              </div>
              
              {/* Main illustration */}
              <div className="relative">
                {/* <img 
                  src={campingHero} 
                  alt="Camping adventure scene" 
                  className="w-full h-auto rounded-2xl shadow-warm"
                /> */}
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000" />
              </div>
            </div>
            
            {/* Right side - Additional content or space */}
            <div className="hidden lg:block">
              <div className="text-right space-y-6">
                <h3 className="text-2xl font-bold text-foreground">
                  Adventure Awaits
                </h3>
                <p className="text-muted-foreground">
                  Discover the perfect camping experience with our premium gear and expert guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Banners;