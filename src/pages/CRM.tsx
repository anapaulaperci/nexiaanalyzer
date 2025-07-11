import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Target, Lightbulb, Users, BarChart3, CheckCircle, ArrowRight, Gift, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const CRM = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const crmImages = [
    {
      src: "/lovable-uploads/fb881f1e-6a6d-491e-aa93-2f6ab7a68767.png",
      title: "Primeiras Etapas do Pipeline",
      description: "Entrada de Leads até Interesse Grupo - mostrando como organizar e acompanhar os primeiros contatos"
    },
    {
      src: "/lovable-uploads/aee8e670-f625-445a-9b52-34606ea3c2a1.png", 
      title: "Etapas Finais de Conversão",
      description: "Confirmou Presença até Compra Aprovada - as etapas decisivas para fechamento de vendas"
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % crmImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + crmImages.length) % crmImages.length);
  };
  const pipelineSteps = [
    { 
      number: "1️⃣", 
      title: "Entrada de Leads", 
      description: "Porta de entrada de todos os potenciais clientes", 
      insight: "Base inicial ampla para qualificação",
      status: "active"
    },
    { 
      number: "2️⃣", 
      title: "Lead Confirmado", 
      description: "Leads que confirmaram interesse genuíno", 
      insight: "Separar curiosos de interessados reais",
      status: "process"
    },
    { 
      number: "3️⃣", 
      title: "Recebeu Invite", 
      description: "Leads convidados para conhecer a solução", 
      insight: "Oportunidade de reengajar leads anteriores",
      status: "process"
    },
    { 
      number: "4️⃣", 
      title: "Respondeu Flow", 
      description: "Interação ativa com automações", 
      insight: "Otimizar mensagens e timing",
      status: "process"
    },
    { 
      number: "5️⃣", 
      title: "Interesse Grupo", 
      description: "Demonstram interesse em participar de apresentações", 
      insight: "Momento de qualificação profunda",
      status: "critical"
    },
    { 
      number: "6️⃣", 
      title: "Confirmou Presença", 
      description: "Compromisso firmado para participação", 
      insight: "Compromisso público gera ação",
      status: "critical"
    },
    { 
      number: "7️⃣", 
      title: "Assistiu Live", 
      description: "Participação efetiva em apresentação", 
      insight: "Formato que mais converte",
      status: "hot"
    },
    { 
      number: "8️⃣", 
      title: "Interesse Compra", 
      description: "Manifestação clara de intenção de compra", 
      insight: "Acompanhamento personalizado essencial",
      status: "hot"
    },
    { 
      number: "9️⃣", 
      title: "Trial Ativado", 
      description: "Período de teste do produto/serviço", 
      insight: "Avaliar se agrega ou atrasa conversão",
      status: "review"
    },
    { 
      number: "🔟", 
      title: "Compra Aprovada", 
      description: "Conversão final em cliente", 
      insight: "Início do pós-venda",
      status: "success"
    }
  ];

  const strategicInsights = [
    {
      icon: TrendingUp,
      title: "Funil Não-Linear",
      description: "O pipeline mostra que nem todos seguem a ordem esperada. Pessoas podem pular etapas e ainda converter.",
      lesson: "Flexibilidade no processo aumenta conversões",
      color: "bg-gradient-to-br from-nexia-600 to-nexia-800"
    },
    {
      icon: Target,
      title: "O Poder do Trial",
      description: "Questione se o trial é necessário. Muitas vezes clientes estão prontos para comprar.",
      lesson: "Testar conversão direta quando valor está claro",
      color: "bg-gradient-to-br from-nexia-accent-500 to-nexia-accent-600"
    },
    {
      icon: Users,
      title: "Lives como Motor de Conversão",
      description: "Lives geram maior engajamento e presença. Estratégia vencedora como principal ferramenta.",
      lesson: "Investir em qualidade e frequência",
      color: "bg-gradient-to-br from-primary to-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Taxa de Conversão como Diferencial",
      description: "Pipelines bem estruturados superam médias de mercado. Processo automatizado e personalizado.",
      lesson: "Qualidade sobre quantidade",
      color: "bg-gradient-to-br from-nexia-700 to-nexia-900"
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      active: { label: "Ativo", className: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" },
      process: { label: "Processo", className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" },
      critical: { label: "Crítico", className: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300" },
      hot: { label: "Quente", className: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" },
      review: { label: "Revisar", className: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300" },
      success: { label: "Sucesso", className: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" }
    };
    
    const variant = variants[status as keyof typeof variants] || variants.active;
    return <Badge className={variant.className}>{variant.label}</Badge>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-6 py-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
            <Lightbulb className="w-4 h-4" />
            Treinamento Especializado
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
            Pipeline de CRM Inteligente
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/80">
            Da Entrada ao Sucesso
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Material para Palestra sobre Otimização de Vendas
          </p>
        </div>

        {/* CRM Images Carousel Section */}
        <Card className="overflow-hidden bg-gradient-to-br from-card to-card/90 border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              {crmImages[currentImageIndex].title}
            </CardTitle>
            <CardDescription className="text-lg">
              {crmImages[currentImageIndex].description}
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={crmImages[currentImageIndex].src}
                alt={crmImages[currentImageIndex].title}
                className="w-full h-auto object-contain max-h-[600px] mx-auto block"
              />
              
              {/* Navigation Controls */}
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevImage}
                  className="ml-4 bg-white/90 hover:bg-white shadow-lg"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextImage}
                  className="mr-4 bg-white/90 hover:bg-white shadow-lg"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {crmImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex 
                        ? 'bg-primary' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Image Counter */}
            <div className="text-center mt-4 text-sm text-muted-foreground">
              {currentImageIndex + 1} de {crmImages.length}
            </div>
          </CardContent>
        </Card>

        {/* Overview Card */}
        <Card className="bg-gradient-to-r from-card to-card/80 border-0 shadow-glow">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <BarChart3 className="w-6 h-6 text-primary" />
              </div>
              Visão Geral do Pipeline
            </CardTitle>
            <CardDescription className="text-lg leading-relaxed">
              Um pipeline bem estruturado representa uma jornada estratégica de conversão, com etapas fundamentais que transformam leads em clientes aprovados.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Pipeline Steps */}
        <Card className="overflow-hidden bg-gradient-to-br from-card to-card/90 border-0 shadow-card">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              As Etapas Essenciais de um Pipeline de Sucesso
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6">
              {pipelineSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="group relative p-6 bg-gradient-to-r from-background to-muted/20 rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {step.number}
                    </div>
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        {getStatusBadge(step.status)}
                      </div>
                      <p className="text-muted-foreground text-base leading-relaxed">
                        {step.description}
                      </p>
                      <div className="flex items-start gap-2 p-3 bg-primary/5 rounded-lg border-l-4 border-primary">
                        <Lightbulb className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <p className="text-sm font-medium text-primary">
                          {step.insight}
                        </p>
                      </div>
                    </div>
                    {index < pipelineSteps.length - 1 && (
                      <ArrowRight className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Insights */}
        <Card className="overflow-hidden bg-gradient-to-br from-card to-card/90 border-0 shadow-card">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-transparent">
            <CardTitle className="flex items-center gap-3 text-2xl">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              Insights Estratégicos
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {strategicInsights.map((insight, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-xl animate-scale-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`absolute inset-0 opacity-5 ${insight.color}`} />
                  <div className="relative p-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 ${insight.color} rounded-lg shadow-lg`}>
                        <insight.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {insight.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {insight.description}
                    </p>
                    <div className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="font-semibold text-primary">
                        {insight.lesson}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Unnichat CTA Section */}
        <Card className="overflow-hidden bg-gradient-to-br from-white to-gray-50 border-2 border-nexia-accent-200 shadow-xl">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1 text-center lg:text-left space-y-4">
                <div className="flex items-center justify-center lg:justify-start gap-4 mb-4">
                  <div className="w-16 h-12 bg-white rounded-lg shadow-md flex items-center justify-center p-2">
                    <img 
                      src="/lovable-uploads/ef148617-5e1e-485c-9f00-2f49d7d2e8a4.png" 
                      alt="Unnichat Logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <Gift className="w-8 h-8 text-nexia-accent-600" />
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                      Teste o Unnichat por 30 dias de
                    </h2>
                  </div>
                </div>
                <div className="text-5xl md:text-6xl font-black text-nexia-accent-600 mb-6">
                  GRAÇA
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 text-lg">
                  <Clock className="w-5 h-5" />
                  <span>Acesso completo • Sem compromisso • Suporte incluído</span>
                </div>
                <Button 
                  size="lg" 
                  className="bg-nexia-accent-600 text-white hover:bg-nexia-accent-700 font-bold text-lg px-8 py-4 mt-6 shadow-lg"
                >
                  Começar Teste Gratuito
                </Button>
              </div>
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-nexia-accent-100 rounded-full flex items-center justify-center p-6 shadow-lg">
                  <img 
                    src="/lovable-uploads/ef148617-5e1e-485c-9f00-2f49d7d2e8a4.png" 
                    alt="Unnichat Logo"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CRM;