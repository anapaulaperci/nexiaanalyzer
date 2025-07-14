import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="text-center mb-6">
          <p className="text-muted-foreground text-sm mb-2">
            Receba informações sobre as atualizações feitas no APP.
          </p>
          <p className="text-muted-foreground text-sm mb-3">
            Grupo para receber atualizações da plataforma
          </p>
          <a 
            href="https://chat.whatsapp.com/JEY980forwzLviDjicwDqo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm"
          >
            Entrar agora
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            <span className="text-sm text-muted-foreground">
              © 2025 NexIA Lab. Todos os direitos reservados a 
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