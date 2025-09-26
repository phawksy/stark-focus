import boosterPackImage from "@/assets/booster-pack.jpg";
import singleCardsImage from "@/assets/single-cards.jpg";
import accessoriesImage from "@/assets/accessories.jpg";

const CategoryGrid = () => {
  const categories = [
    {
      title: "Booster Packs",
      image: boosterPackImage,
      description: "Latest sets and expansions"
    },
    {
      title: "Single Cards",
      image: singleCardsImage,
      description: "Rare and collectible cards"
    },
    {
      title: "Accessories",
      image: accessoriesImage,
      description: "Deck boxes, sleeves & more"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Shop by Category
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden bg-secondary mb-4">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;