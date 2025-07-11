import { NavLink, useLocation } from "react-router-dom";
import { Home, BookOpen, MessageSquare, Sparkles, Copy, Brain } from "lucide-react";
import { cn } from "@/lib/utils";

const HorizontalNav = () => {
  const location = useLocation();
  
  const navItems = [
    { title: "Início", url: "/", icon: Home },
    { title: "Tutorial", url: "/tutorial", icon: BookOpen },
    { title: "Prompts", url: "/prompts", icon: MessageSquare },
    { title: "Copy", url: "/copy", icon: Copy },
    { title: "Planejamento de Campanha", url: "/campaign", icon: Sparkles },
  ];

  return (
    <nav className="border-b border-border/50 bg-card/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-glow rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent group-hover:from-primary group-hover:to-primary-glow transition-all duration-300">
                NexIA Analyzer
              </span>
            </div>
          </NavLink>

          {/* Navigation */}
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = item.url === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(item.url);
              
              return (
                <NavLink
                  key={item.url}
                  to={item.url}
                  end={item.url === "/"}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent"
                  )}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{item.title}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HorizontalNav;