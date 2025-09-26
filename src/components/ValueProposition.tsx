import { Shield, Truck, CreditCard, RotateCcw } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Shield,
      title: "Genuine Products",
      description: "100% authentic trading cards"
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Free shipping on orders over $99"
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Your payment information is safe"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy"
    }
  ];

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="w-12 h-12 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;