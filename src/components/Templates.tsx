import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy, MessageSquare, Target, Users, TrendingUp } from "lucide-react";

const templates = [
  {
    icon: Users,
    title: "Análise de Personas Sintéticas",
    description: "Gere personas detalhadas baseadas em dados reais de comportamento",
    prompt: "Com base nos dados fornecidos, crie 3-5 personas sintéticas detalhadas incluindo:\n\n1. **Demografia e Psicografia**\n2. **Padrões de Comportamento**\n3. **Necessidades e Dores**\n4. **Jornada de Compra**\n5. **Canais de Comunicação Preferidos**\n\nPara cada persona, forneça insights acionáveis sobre como abordá-las...",
    category: "Personas",
    color: "text-blue-500"
  },
  {
    icon: Target,
    title: "Segmentação Comportamental",
    description: "Identifique grupos de usuários com comportamentos similares",
    prompt: "Analise os dados de comportamento dos usuários e identifique segmentos distintos:\n\n1. **Critérios de Segmentação**\n2. **Características de Cada Segmento**\n3. **Tamanho e Potencial de Cada Grupo**\n4. **Estratégias Específicas por Segmento**\n\nBase sua análise em padrões reais de uso e interação...",
    category: "Segmentação",
    color: "text-purple-500"
  },
  {
    icon: MessageSquare,
    title: "Análise de Motivações",
    description: "Descubra o que realmente motiva seus usuários",
    prompt: "Identifique as principais motivações dos usuários baseado nos dados:\n\n1. **Motivações Primárias e Secundárias**\n2. **Triggers Comportamentais**\n3. **Barreiras e Objeções**\n4. **Gatilhos Emocionais**\n\nForneça insights sobre como usar essas motivações em estratégias...",
    category: "Psicologia",
    color: "text-green-500"
  },
  {
    icon: TrendingUp,
    title: "Predição de Comportamento",
    description: "Preveja comportamentos futuros baseado em padrões históricos",
    prompt: "Com base nos padrões históricos dos dados, faça predições sobre:\n\n1. **Tendências de Comportamento**\n2. **Probabilidade de Conversão**\n3. **Momentos Ideais de Engajamento**\n4. **Riscos de Churn**\n\nBase suas predições em evidências dos dados fornecidos...",
    category: "Predição",
    color: "text-orange-500"
  }
];

const Templates = () => {
  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // toast would be added here
  };

  return (
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Templates de Prompts para Personas Sintéticas
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Prompts especializados para gerar personas sintéticas precisas baseadas em dados reais
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
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