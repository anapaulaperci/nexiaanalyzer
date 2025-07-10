import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Brain, ArrowRight, Users, Target, TrendingUp, Building2, CheckCircle2, Globe, CreditCard, MessageSquare, Smartphone, UserCheck, BarChart, Search, Eye, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import aiAnalysisRealistic from "@/assets/ai-analysis-realistic.png";

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
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow animate-pulse">
            <Users className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Personas Sintéticas
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
            <strong className="text-foreground">Personas sintéticas</strong> são perfis de usuários/clientes gerados automaticamente por Inteligência Artificial através da análise massiva de dados reais do seu negócio, em vez de serem criadas manualmente através de pesquisas tradicionais.
          </p>
          
          {/* Diagram Section */}
          <div className="w-full max-w-5xl mx-auto mb-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary-glow/5 border border-primary/20 p-4">
              <img 
                src="/lovable-uploads/0a58e08c-f8c5-4632-968d-9a5a784a64ec.png"
                alt="Transformando Big Data em Insights Acionáveis com Inteligência Artificial"
                className="w-full h-auto rounded-lg"
              />
            </div>
      </div>

      {/* Big Data to Insights Flow */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Transformando Big Data em Insights Acionáveis
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Como a Inteligência Artificial processa seus dados para gerar personas sintéticas precisas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Fontes de Dados */}
          <Card className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-600">
                <BarChart className="w-6 h-6" />
                <span>Fontes de Dados</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-foreground">Comportamento Web</span>
                </div>
                <p className="text-sm text-muted-foreground">Cliques, páginas, tempo, scroll</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-foreground">Transações</span>
                </div>
                <p className="text-sm text-muted-foreground">Compras, valores, frequência</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-foreground">Interações</span>
                </div>
                <p className="text-sm text-muted-foreground">Chat, email, tickets, NPS</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <Smartphone className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-foreground">App/Mobile</span>
                </div>
                <p className="text-sm text-muted-foreground">Features usadas, sessões</p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-3 mb-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-foreground">Social/CRM</span>
                </div>
                <p className="text-sm text-muted-foreground">Perfil, engajamento, leads</p>
              </div>
            </CardContent>
          </Card>

          {/* Processamento IA */}
          <Card className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-600">
                <Brain className="w-6 h-6" />
                <span>Processamento IA</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Limpeza e Normalização</h4>
                    <p className="text-sm text-muted-foreground">Padronização de dados</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-purple-300 dark:bg-purple-700 ml-4"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Machine Learning</h4>
                    <div className="flex gap-2 mt-1">
                      <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">Clustering</span>
                      <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">NLP</span>
                      <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-2 py-1 rounded text-xs">Deep Learning</span>
                    </div>
                  </div>
                </div>
                <div className="w-px h-8 bg-purple-300 dark:bg-purple-700 ml-4"></div>
              </div>
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-foreground">Identificação de Padrões</h4>
                    <p className="text-sm text-muted-foreground">Descoberta de comportamentos ocultos</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-purple-300 dark:bg-purple-700 ml-4"></div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">4</div>
                <div>
                  <h4 className="font-semibold text-foreground">Validação e Scoring</h4>
                  <p className="text-sm text-muted-foreground">Confiança: <span className="text-purple-600 font-medium">87%</span></p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personas Geradas */}
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-600">
                <Users className="w-6 h-6" />
                <span>Personas Geradas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Premium Explorer</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Alto valor, early adopter, mobile-first</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">LTV: R$ 4.200</span>
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Conversão: 34%</span>
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Churn: 6%</span>
                </div>
              </div>
              
              <div className="bg-green-50 dark:bg-green-950/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                    <Target className="w-4 h-4 text-white" />
                  </div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300">Barganha Consciente</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-3">Sensível à preço, pesquisa muito</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Ticket: R$ 150</span>
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Cupons: 89%</span>
                  <span className="bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 px-2 py-1 rounded text-xs">Retenção: 45%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Flow Arrows */}
        <div className="hidden lg:flex justify-center items-center gap-8 text-muted-foreground">
          <ArrowRight className="w-8 h-8" />
          <ArrowRight className="w-8 h-8" />
        </div>
      </div>
          
          {/* Video Section */}
          <div className="w-full max-w-4xl mx-auto mb-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl bg-gradient-to-br from-primary/5 to-primary-glow/5 border border-primary/20">
              <iframe 
                className="w-full aspect-video"
                src="https://www.canva.com/design/DAGszQZEbhs/G569eHDSrwNx3nxU6Bu_8A/watch?embed&autoplay=1"
                allowFullScreen
                title="Personas Sintéticas - Vídeo Explicativo"
              />
            </div>
          </div>
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

      {/* Benefits Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-primary/10 to-primary-glow/5 p-6 rounded-lg border border-primary/20 animate-fade-in">
          <TrendingUp className="w-8 h-8 text-primary mb-3 mx-auto" />
          <h4 className="font-semibold text-foreground mb-2">Mais Precisão</h4>
          <p className="text-sm text-muted-foreground">Dados comportamentais reais em vez de suposições</p>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-primary-glow/5 p-6 rounded-lg border border-primary/20 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Target className="w-8 h-8 text-primary mb-3 mx-auto" />
          <h4 className="font-semibold text-foreground mb-2">Segmentação Avançada</h4>
          <p className="text-sm text-muted-foreground">Identifica padrões invisíveis ao olho humano</p>
        </div>
        <div className="bg-gradient-to-br from-primary/10 to-primary-glow/5 p-6 rounded-lg border border-primary/20 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <CheckCircle2 className="w-8 h-8 text-primary mb-3 mx-auto" />
          <h4 className="font-semibold text-foreground mb-2">Rápido & Escalável</h4>
          <p className="text-sm text-muted-foreground">Resultados em minutos, não semanas</p>
        </div>
      </div>

      {/* How to Create Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Como Montar a Sua
          </h3>
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
        <Card className="bg-gradient-to-r from-blue-500/5 to-blue-600/5 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">Explicação Base do Negócio</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-800">
              <p className="text-foreground font-medium mb-4">
                📋 <strong>Informações Essenciais para Fornecer:</strong>
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Para criar personas sintéticas precisas, detalhe completamente o seu negócio. Quanto mais específico você for, melhor será o resultado da análise de IA.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <Target className="w-4 h-4 text-blue-500" />
                  Sobre o Negócio
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Produtos/Serviços:</strong> O que exatamente você vende, preços, categorias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Mercado:</strong> Setor, nicho, localização geográfica</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Diferenciais:</strong> O que te destaca da concorrência</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Modelo de negócio:</strong> B2B, B2C, marketplace, SaaS, etc.</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  Estratégia & Clientes
                </h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Objetivos:</strong> Metas de vendas, crescimento, expansão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Público atual:</strong> Demografia, comportamento, necessidades</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Desafios:</strong> Dificuldades em vendas, marketing, retenção</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Canais:</strong> Como você vende e se comunica com clientes</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500/5 to-purple-600/5 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                <Upload className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">Upload da Pesquisa</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-purple-50 dark:bg-purple-950/20 p-6 rounded-lg mb-6 border border-purple-200 dark:border-purple-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">📤 Instruções de Upload</h4>
                  <p className="text-sm text-muted-foreground">Prepare seus dados para análise de IA</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Baixe sua pesquisa de persona existente e faça o upload junto com a explicação base em uma IA como <strong className="text-foreground">Claude</strong> ou <strong className="text-foreground">ChatGPT</strong>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card/50 p-4 rounded-lg border border-border/50">
                  <h5 className="font-medium text-foreground mb-2">✅ Formatos Aceitos</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• CSV (dados estruturados)</li>
                    <li>• Excel (planilhas)</li>
                    <li>• PDF (relatórios)</li>
                    <li>• Texto estruturado</li>
                  </ul>
                </div>
                
                <div className="bg-card/50 p-4 rounded-lg border border-border/50">
                  <h5 className="font-medium text-foreground mb-2">💡 Dica Importante</h5>
                  <p className="text-sm text-muted-foreground">
                    Combine sempre os dados da pesquisa com a explicação detalhada do seu negócio para resultados mais precisos.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500/5 to-emerald-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl">Análise com Prompts Especializados</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <div className="bg-green-50 dark:bg-green-950/20 p-6 rounded-lg mb-6 border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                    <Brain className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">🎯 Prompts Inteligentes</h4>
                    <p className="text-sm text-muted-foreground">Análise comportamental avançada</p>
                  </div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Use nossos prompts otimizados para gerar personas sintéticas baseadas em dados reais comportamentais. Nossa biblioteca contém modelos especializados para diferentes tipos de análise.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Análise de sentimentos dos clientes</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Segmentação de audiência comportamental</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Jornada do cliente detalhada</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-muted-foreground">Insights ocultos e padrões</span>
                </div>
              </div>
            </div>
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