import { Button } from "@/components/ui/button";
import { Brain, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3 hover-scale">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-purple rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-foreground">
              NexIA Analyzer
            </span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA Button */}
        <Button asChild className="hidden md:flex shadow-glow">
          <NavLink to="/dashboard">
            <Brain className="w-4 h-4 mr-2" />
            Começar Agora
          </NavLink>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-accent/10 rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border/50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <NavLink 
              to="/" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Início
            </NavLink>
            <NavLink 
              to="/dashboard" 
              className="text-muted-foreground hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </NavLink>
            <Button asChild className="shadow-glow mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              <NavLink to="/dashboard">
                <Brain className="w-4 h-4 mr-2" />
                Começar Agora
              </NavLink>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;