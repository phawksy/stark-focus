import { Search, ShoppingCart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm">
        FREE SHIPPING ON ORDERS OVER $99
      </div>
      
      {/* Main Header */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-foreground">
              POKEBOX USA
            </div>
            
            {/* Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Pokemon TCG</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[400px]">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Booster Packs</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Latest Pokemon booster packs and sets
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Single Cards</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Individual Pokemon cards and rare finds
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Theme Decks</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Ready-to-play Pokemon theme decks
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Accessories</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[300px]">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Deck Boxes</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Sleeves</div>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                        <div className="text-sm font-medium leading-none">Playmats</div>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
                    Sale
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Button>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;