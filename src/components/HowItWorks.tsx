import { Card, CardContent } from "@/components/ui/card";
import { Upload, Brain, Rocket, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "1. Faça Upload",
    description: "Carregue seus dados de pesquisa em qualquer formato (CSV, Excel, PDF)",
    color: "text-blue-400"
  },
  {
    icon: Brain,
    title: "2. IA Analisa",
    description: "Claude/ChatGPT processa e identifica insights valiosos automaticamente",
    color: "text-purple-400"
  },
  {
    icon: Rocket,
    title: "3. Gere Campanhas",
    description: "Receba campanhas de marketing completas baseadas nos insights",
    color: "text-pink-400"
  },
  {
    icon: BarChart3,
    title: "4. Monitore Resultados",
    description: "Acompanhe performance e otimize suas campanhas em tempo real",
    color: "text-green-400"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Como Funciona
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme dados brutos em campanhas de marketing de alta performance em 4 passos simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6 relative">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;