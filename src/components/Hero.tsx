import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BarChart3, Sparkles, Users } from "lucide-react";
import { useNavigate, NavLink } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6">

        {/* Floating Icons - Hidden on mobile */}
        <div className="hidden sm:block absolute -top-16 left-1/4 animate-bounce delay-300">
          <Users className="w-8 h-8 text-primary opacity-60" />
        </div>
        <div className="hidden sm:block absolute -top-8 right-1/3 animate-bounce delay-700">
          <Brain className="w-6 h-6 text-primary-glow opacity-60" />
        </div>
        <div className="hidden sm:block absolute top-4 left-1/3 animate-bounce delay-1000">
          <Sparkles className="w-7 h-7 text-primary opacity-60" />
        </div>

        {/* Main Content */}
        <div className="space-y-6 sm:space-y-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Crie Personas Sintéticas
            <br />
            <span className="text-2xl sm:text-4xl md:text-6xl">com Inteligência Artificial</span>
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <p className="text-base sm:text-xl md:text-2xl text-muted-foreground leading-relaxed px-4">
              <strong className="text-foreground">Personas sintéticas</strong> são perfis de usuários/clientes gerados automaticamente por Inteligência Artificial através da análise massiva de dados reais do seu negócio, em vez de serem criadas manualmente através de pesquisas tradicionais.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-12">
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => navigate('/dashboard')}
            >
              Começar Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <NavLink to="/dashboard/prompts">
                Ver Prompts
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;