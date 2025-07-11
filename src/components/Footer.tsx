import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="text-sm text-muted-foreground">
              © 2024 NexIA Lab. Todos os direitos reservados a 
              <a 
                href="https://www.instagram.com/anapaulaperci/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors ml-1 font-medium"
              >
                @anapaulaperci
              </a>
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/anapaulaperci/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium">Siga no Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;