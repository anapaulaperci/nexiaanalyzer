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
            src="/lovable-uploads/84cf1afe-0db5-413f-bfe7-26875942dfa8.png" 
            alt="anapaulaperci" 
            className="h-8"
          />
          <span className="font-bold text-xl bg-gradient-hero bg-clip-text text-transparent">
            anapaulaperci
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