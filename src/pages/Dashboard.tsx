import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Brain, ArrowRight, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

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

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
          Personas Sintéticas
        </h2>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            <strong className="text-foreground">Personas sintéticas</strong> são perfis de usuários/clientes gerados automaticamente por Inteligência Artificial através da análise massiva de dados reais do seu negócio, em vez de serem criadas manualmente através de pesquisas tradicionais.
          </p>
        </div>
      </div>

      {/* Concept Explanation */}
      <Card className="bg-gradient-to-r from-primary/5 to-primary-glow/5 border border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                Por que Personas Sintéticas?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tradicional</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Pesquisas manuais demoradas</li>
                    <li>• Dados limitados e subjetivos</li>
                    <li>• Alto custo de implementação</li>
                    <li>• Personas baseadas em suposições</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Com IA</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Análise massiva de dados reais</li>
                    <li>• Insights precisos e objetivos</li>
                    <li>• Processo rápido e escalável</li>
                    <li>• Personas baseadas em comportamentos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* How to Create Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Como Montar a Sua
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforme dados brutos em personas sintéticas precisas em 3 passos simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
                
                <h4 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h4>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Detailed Steps */}
      <div className="space-y-6">
        <Card className="bg-card/50 border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-blue-500" />
              Explicação Base do Negócio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Crie uma descrição completa do seu negócio incluindo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Produtos/Serviços:</strong> O que você oferece</li>
                <li>• <strong>Mercado:</strong> Em que setor você atua</li>
                <li>• <strong>Diferenciais:</strong> O que te torna único</li>
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>Objetivos:</strong> Metas do seu negócio</li>
                <li>• <strong>Público atual:</strong> Quem são seus clientes</li>
                <li>• <strong>Desafios:</strong> Principais dificuldades</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Upload className="w-6 h-6 text-purple-500" />
              Upload da Pesquisa
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Baixe sua pesquisa de persona existente e faça o upload junto com a explicação base em uma IA como Claude ou ChatGPT. 
              Aceita formatos: CSV, Excel, PDF, ou texto estruturado.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Brain className="w-6 h-6 text-green-500" />
              Análise com Prompts Especializados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Use nossos prompts otimizados para gerar personas sintéticas baseadas em dados reais comportamentais.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA Section */}
      <div className="text-center py-8">
        <Card className="bg-gradient-to-r from-primary/10 to-primary-glow/10 border border-primary/20 p-8 inline-block hover-scale">
          <h3 className="text-2xl font-semibold mb-4 text-foreground">
            Pronto para começar?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md">
            Acesse nossa biblioteca de prompts especializados para análise de personas sintéticas
          </p>
          <Button 
            variant="hero" 
            size="lg" 
            className="text-lg px-8 py-6 h-auto animate-scale-in"
            onClick={() => navigate('/dashboard/prompts')}
          >
            Ver Prompts de Análise
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;