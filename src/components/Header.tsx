import { Button } from "@/components/ui/button";
import { Brain } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 hover-scale">
          <img 
            src="/lovable-uploads/ace31a89-bfd6-4446-8a5b-26bcd635824c.png" 
            alt="NexIA Lab" 
            className="h-8"
          />
          <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
            NexIA Lab
          </span>
        </NavLink>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Início
          </NavLink>
          <NavLink 
            to="/dashboard" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Dashboard
          </NavLink>
        </nav>

        {/* CTA Button */}
        <Button asChild className="shadow-glow">
          <NavLink to="/dashboard">
            <Brain className="w-4 h-4 mr-2" />
            Começar Agora
          </NavLink>
        </Button>
      </div>
    </header>
  );
};

export default Header;