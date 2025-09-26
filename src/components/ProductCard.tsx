import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  badgeVariant?: "default" | "destructive" | "outline" | "secondary";
  isOutOfStock?: boolean;
}

const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  badge, 
  badgeVariant = "default",
  isOutOfStock = false 
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-none overflow-hidden hover:shadow-lg transition-shadow">
      {/* Badge */}
      {badge && (
        <Badge 
          variant={badgeVariant} 
          className={`absolute top-2 left-2 z-10 text-xs font-bold ${
            badgeVariant === 'destructive' ? 'bg-primary text-primary-foreground' : 
            badge === 'NEW' ? 'bg-accent text-accent-foreground' : ''
          }`}
        >
          {badge}
        </Badge>
      )}
      
      {/* Out of Stock Overlay */}
      {isOutOfStock && (
        <div className="absolute inset-0 bg-background/80 z-20 flex items-center justify-center">
          <Badge variant="outline" className="text-sm">
            SOLD OUT
          </Badge>
        </div>
      )}
      
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-secondary">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-medium text-sm mb-2 line-clamp-2 text-foreground">
          {title}
        </h3>
        
        {/* Pricing */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="font-bold text-foreground">
            ${price.toFixed(2)}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <Button 
          className="w-full" 
          variant={isOutOfStock ? "outline" : "default"}
          disabled={isOutOfStock}
        >
          {isOutOfStock ? "OUT OF STOCK" : "ADD TO CART"}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;