import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Brain, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: FileText,
    title: "1. Monte uma Explicação Base",
    description: "Descreva detalhadamente o que é o seu negócio, seus produtos/serviços, público-alvo e objetivos",
    color: "text-blue-500"
  },
  {
    icon: Upload,
    title: "2. Faça Upload da Pesquisa",
    description: "Baixe a pesquisa de persona que você tem e faça o upload dela em uma inteligência artificial junto com a explicação base",
    color: "text-purple-500"
  },
  {
    icon: Brain,
    title: "3. Use os Prompts da Plataforma",
    description: "Peça uma análise com os modelos de prompts que nós fornecemos aqui na plataforma para gerar personas sintéticas precisas",
    color: "text-green-500"
  }
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Como Montar a Sua
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme dados brutos em personas sintéticas precisas em 3 passos simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className={`w-10 h-10 text-white`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA para prompts */}
        <div className="text-center">
          <Card className="bg-card/70 backdrop-blur-sm border border-primary/20 p-8 inline-block">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Acesse nossa biblioteca de prompts especializados para análise de personas sintéticas
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => navigate('/dashboard/prompts')}
            >
              Ver Prompts de Análise
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;