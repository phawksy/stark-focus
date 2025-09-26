import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-products.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Premium Pokemon Trading Cards
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Discover authentic Pokemon TCG products, rare cards, and exclusive accessories. 
              Your trusted source for genuine trading cards with fast, secure shipping.
            </p>
            <div className="flex space-x-4">
              <Button size="lg" className="px-8">
                Shop Now
              </Button>
              <Button variant="outline" size="lg" className="px-8">
                View Collection
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Pokemon Trading Cards Collection"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;