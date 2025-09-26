import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import boosterPackImage from "@/assets/booster-pack.jpg";
import singleCardsImage from "@/assets/single-cards.jpg";
import accessoriesImage from "@/assets/accessories.jpg";

interface ProductSectionProps {
  title: string;
  showViewAll?: boolean;
}

const ProductSection = ({ title, showViewAll = true }: ProductSectionProps) => {
  // Mock product data
  const products = [
    {
      image: boosterPackImage,
      title: "Pokemon Scarlet & Violet Base Set Booster Pack",
      price: 4.99,
      originalPrice: 5.99,
      badge: "HOT",
      badgeVariant: "destructive" as const
    },
    {
      image: singleCardsImage,
      title: "Charizard VMAX Rainbow Rare Card",
      price: 89.99,
      badge: "NEW",
      badgeVariant: "default" as const
    },
    {
      image: accessoriesImage,
      title: "Ultra Pro Deck Box - Pokemon",
      price: 12.99,
      originalPrice: 15.99
    },
    {
      image: boosterPackImage,
      title: "Pokemon Crown Zenith Booster Pack",
      price: 5.49,
      isOutOfStock: true
    },
    {
      image: singleCardsImage,
      title: "Pikachu VMAX Alternate Art",
      price: 24.99,
      badge: "HOT",
      badgeVariant: "destructive" as const
    },
    {
      image: accessoriesImage,
      title: "Dragon Shield Card Sleeves (100)",
      price: 9.99
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-foreground">
            {title}
          </h2>
          {showViewAll && (
            <Button variant="outline">
              View All
            </Button>
          )}
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;