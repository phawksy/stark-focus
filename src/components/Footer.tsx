import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">POKEBOX USA</h3>
            <p className="text-sm mb-4">
              Your trusted source for authentic Pokemon trading cards and accessories.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary text-xs font-bold">FB</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary text-xs font-bold">IG</span>
              </div>
              <div className="w-8 h-8 bg-primary-foreground rounded flex items-center justify-center">
                <span className="text-primary text-xs font-bold">TW</span>
              </div>
            </div>
          </div>
          
          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent">Booster Packs</a></li>
              <li><a href="#" className="hover:text-accent">Single Cards</a></li>
              <li><a href="#" className="hover:text-accent">Theme Decks</a></li>
              <li><a href="#" className="hover:text-accent">Accessories</a></li>
              <li><a href="#" className="hover:text-accent">Pre-Orders</a></li>
            </ul>
          </div>
          
          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-accent">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-accent">Return Policy</a></li>
              <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent">Contact Us</a></li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-sm mb-4">
              Subscribe for exclusive deals and new product alerts.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Enter email" 
                className="bg-primary-foreground text-primary"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
            
            {/* Payment Methods */}
            <div className="mt-6">
              <p className="text-sm mb-2">We Accept:</p>
              <div className="flex space-x-2">
                <div className="w-8 h-5 bg-primary-foreground rounded text-xs flex items-center justify-center text-primary font-bold">
                  VISA
                </div>
                <div className="w-8 h-5 bg-primary-foreground rounded text-xs flex items-center justify-center text-primary font-bold">
                  MC
                </div>
                <div className="w-8 h-5 bg-primary-foreground rounded text-xs flex items-center justify-center text-primary font-bold">
                  PP
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2024 Pokebox USA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;