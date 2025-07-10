import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BarChart3, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Floating Icons */}
        <div className="absolute -top-16 left-1/4 animate-bounce delay-300">
          <Brain className="w-8 h-8 text-primary opacity-60" />
        </div>
        <div className="absolute -top-8 right-1/3 animate-bounce delay-700">
          <BarChart3 className="w-6 h-6 text-primary-glow opacity-60" />
        </div>
        <div className="absolute top-4 left-1/3 animate-bounce delay-1000">
          <Sparkles className="w-7 h-7 text-primary opacity-60" />
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-hero bg-clip-text text-transparent leading-tight">
            Transforme Pesquisas em 
            <br />
            Campanhas de Marketing
            <br />
            <span className="text-4xl md:text-6xl">com IA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Aprenda a analisar pesquisas usando Claude/ChatGPT e gere campanhas completas automaticamente
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
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
              variant="glass" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
            >
              Ver Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;