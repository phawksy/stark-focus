import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoryGrid from "@/components/CategoryGrid";
import ValueProposition from "@/components/ValueProposition";
import ProductSection from "@/components/ProductSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoryGrid />
        <ValueProposition />
        <ProductSection title="Best Sellers" />
        <ProductSection title="New Arrivals" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
