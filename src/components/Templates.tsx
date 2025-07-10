import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, MessageSquare, Target, Users, TrendingUp } from "lucide-react";

const templates = [
  {
    icon: MessageSquare,
    title: "Análise de Sentimento",
    description: "Identifique emoções e sentimentos dos respondentes",
    prompt: "Analise o sentimento desta pesquisa e identifique os principais pontos de dor dos clientes...",
    category: "Análise",
    color: "text-blue-400"
  },
  {
    icon: Target,
    title: "Segmentação de Público",
    description: "Crie personas detalhadas baseadas nos dados",
    prompt: "Com base nesta pesquisa, crie 3 personas distintas e suas características...",
    category: "Segmentação",
    color: "text-purple-400"
  },
  {
    icon: Users,
    title: "Jornada do Cliente",
    description: "Mapeie a experiência completa do consumidor",
    prompt: "Mapeie a jornada do cliente baseada nos insights desta pesquisa...",
    category: "Experiência",
    color: "text-pink-400"
  },
  {
    icon: TrendingUp,
    title: "Campanha de Conversão",
    description: "Gere campanhas focadas em resultados",
    prompt: "Crie uma campanha de marketing digital completa para aumentar conversões...",
    category: "Marketing",
    color: "text-green-400"
  }
];

const Templates = () => {
  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // toast would be added here
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Templates de Prompts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prompts otimizados para extrair insights valiosos e gerar campanhas de alta performance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {templates.map((template, index) => (
            <Card 
              key={index} 
              className="relative bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              
              <CardHeader className="relative">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <template.icon className={`w-6 h-6 ${template.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {template.title}
                    </CardTitle>
                    <span className="text-sm text-primary font-medium">
                      {template.category}
                    </span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="relative">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {template.description}
                </p>
                
                <div className="bg-secondary/50 p-4 rounded-lg mb-4 border border-border/30">
                  <p className="text-sm text-foreground font-mono leading-relaxed">
                    "{template.prompt}"
                  </p>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => copyPrompt(template.prompt)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Prompt
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Templates;