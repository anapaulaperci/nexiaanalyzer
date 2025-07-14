import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Brain, ArrowRight, Users, Target, TrendingUp, Building2, CheckCircle2, Globe, CreditCard, MessageSquare, Smartphone, UserCheck, BarChart, Clock, DollarSign, Zap, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import smallDataCover from '@/assets/small-data-book-cover.jpg';
import logicaConsumoCover from '@/assets/logica-consumo-book-cover.jpg';

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
        </div>
      </div>

      {/* Enhanced Concept Explanation */}
      <div className="relative py-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-orange-500/5 to-amber-500/5 rounded-3xl"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-xl">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-600 via-red-600 to-amber-600 bg-clip-text text-transparent">
              Por que Personas Sintéticas?
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Compare os métodos tradicionais com a revolução da Inteligência Artificial
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Método Tradicional */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <Card className="relative h-full bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950/50 dark:to-red-900/50 border-2 border-red-200 dark:border-red-800 hover:border-red-400 dark:hover:border-red-600 transition-all duration-500">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-red-700 dark:text-red-300 flex items-center gap-2 justify-center">
                    <X className="w-6 h-6" />
                    Método Tradicional
                  </CardTitle>
                  <p className="text-red-600 dark:text-red-400">Processo manual e demorado</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: Clock, title: "Pesquisas manuais demoradas", desc: "Semanas ou meses para completar", severity: "high" },
                    { icon: Target, title: "Dados limitados e subjetivos", desc: "Baseado em pequenas amostras", severity: "high" },
                    { icon: DollarSign, title: "Alto custo de implementação", desc: "Recursos humanos caros", severity: "medium" },
                    { icon: Brain, title: "Personas baseadas em suposições", desc: "Sem validação comportamental", severity: "high" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/80 dark:bg-red-950/30 p-4 rounded-xl border border-red-200 dark:border-red-700 hover:bg-white dark:hover:bg-red-900/40 transition-all duration-300 transform hover:scale-102">
                      <div className="flex items-start gap-4">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center shadow-lg ${
                          item.severity === 'high' 
                            ? 'bg-gradient-to-br from-red-500 to-red-600' 
                            : 'bg-gradient-to-br from-orange-500 to-red-500'
                        }`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-red-800 dark:text-red-200 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-red-600 dark:text-red-400">{item.desc}</p>
                        </div>
                        <div className={`w-2 h-2 rounded-full ${
                          item.severity === 'high' ? 'bg-red-500' : 'bg-orange-500'
                        }`}></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Stats tradicional */}
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 p-6 rounded-xl border border-red-200 dark:border-red-700">
                    <h5 className="font-bold text-red-800 dark:text-red-200 mb-3 text-center">📊 Estatísticas Típicas</h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-red-600">2-6 meses</div>
                        <div className="text-xs text-red-500">Tempo médio</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-red-600">30-70%</div>
                        <div className="text-xs text-red-500">Taxa de erro</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Método com IA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
              <Card className="relative h-full bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/50 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all duration-500">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-lg animate-pulse">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-300 flex items-center gap-2 justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                    Com Inteligência Artificial
                  </CardTitle>
                  <p className="text-green-600 dark:text-green-400">Processo inteligente e automatizado</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { icon: BarChart, title: "Análise massiva de dados reais", desc: "Milhões de pontos de dados processados", highlight: true },
                    { icon: Target, title: "Insights precisos e objetivos", desc: "Baseado em comportamentos reais", highlight: true },
                    { icon: Zap, title: "Processo rápido e escalável", desc: "Resultados em minutos", highlight: true },
                    { icon: Brain, title: "Personas baseadas em comportamentos", desc: "Validação científica contínua", highlight: true }
                  ].map((item, index) => (
                    <div key={index} className="bg-white/90 dark:bg-green-950/30 p-4 rounded-xl border border-green-200 dark:border-green-700 hover:bg-white dark:hover:bg-green-900/40 transition-all duration-300 transform hover:scale-102 hover:shadow-lg">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-green-600 dark:text-green-400">{item.desc}</p>
                        </div>
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                  
                  {/* Stats IA */}
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 p-6 rounded-xl border border-green-200 dark:border-green-700">
                    <h5 className="font-bold text-green-800 dark:text-green-200 mb-3 text-center">🚀 Performance IA</h5>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">5-15 min</div>
                        <div className="text-xs text-green-500">Tempo médio</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-green-600">87-95%</div>
                        <div className="text-xs text-green-500">Precisão</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Comparison Arrow */}
          <div className="flex justify-center mt-8">
            <div className="bg-gradient-to-r from-red-500 to-green-500 p-4 rounded-full shadow-xl">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Big Data to Insights Flow - Enhanced Visual */}
      <div className="relative space-y-12 py-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-green-500/5 rounded-3xl"></div>
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Transformando Big Data em Insights Acionáveis
            </h3>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Veja como nossa Inteligência Artificial processa milhões de dados para criar personas sintéticas ultra-precisas que revolucionam sua estratégia de negócio
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto relative">
            
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-24 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 animate-pulse"></div>
            <div className="hidden lg:block absolute top-24 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-400 to-green-400 animate-pulse"></div>
            
            {/* Fontes de Dados */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <Card className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500 transform hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                    <BarChart className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-blue-700 dark:text-blue-300">
                    📊 Fontes de Dados
                  </CardTitle>
                  <p className="text-blue-600 dark:text-blue-400">Coleta massiva e inteligente</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Globe, title: "Comportamento Web", desc: "Cliques, páginas, tempo, scroll", color: "from-blue-500 to-cyan-500" },
                    { icon: CreditCard, title: "Transações", desc: "Compras, valores, frequência", color: "from-green-500 to-emerald-500" },
                    { icon: MessageSquare, title: "Interações", desc: "Chat, email, tickets, NPS", color: "from-purple-500 to-violet-500" },
                    { icon: Smartphone, title: "App/Mobile", desc: "Features usadas, sessões", color: "from-orange-500 to-red-500" },
                    { icon: UserCheck, title: "Social/CRM", desc: "Perfil, engajamento, leads", color: "from-pink-500 to-rose-500" }
                  ].map((item, index) => (
                    <div key={index} className="group/item bg-white/70 dark:bg-blue-950/30 p-4 rounded-xl border border-blue-200 dark:border-blue-700 hover:bg-white dark:hover:bg-blue-900/50 transition-all duration-300 hover:shadow-lg transform hover:scale-102">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-blue-800 dark:text-blue-200 group-hover/item:text-blue-900 dark:group-hover/item:text-blue-100">
                            {item.title}
                          </h4>
                          <p className="text-sm text-blue-600 dark:text-blue-400">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Processamento IA */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <Card className="relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-500 transform hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-xl animate-pulse">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-purple-700 dark:text-purple-300">
                    🧠 Processamento IA
                  </CardTitle>
                  <p className="text-purple-600 dark:text-purple-400">Machine Learning avançado</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    { step: "1", title: "Limpeza e Normalização", desc: "Padronização de dados", progress: 100 },
                    { step: "2", title: "Machine Learning", desc: "Clustering, NLP, Deep Learning", progress: 87 },
                    { step: "3", title: "Identificação de Padrões", desc: "Descoberta de comportamentos ocultos", progress: 92 },
                    { step: "4", title: "Validação e Scoring", desc: "Confiança: 87%", progress: 87 }
                  ].map((item, index) => (
                    <div key={index} className="relative">
                      <div className="flex items-start gap-4 mb-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                          {item.step}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">{item.title}</h4>
                          <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">{item.desc}</p>
                          <div className="w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ width: `${item.progress}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      {index < 3 && <div className="w-px h-6 bg-purple-300 dark:bg-purple-700 ml-5"></div>}
                    </div>
                  ))}
                  
                  {/* ML Tags */}
                  <div className="flex flex-wrap gap-2 justify-center pt-4">
                    {["Clustering", "NLP", "Deep Learning", "Neural Networks"].map((tag) => (
                      <span key={tag} className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg hover:shadow-xl transition-shadow">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Personas Geradas */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <Card className="relative bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all duration-500 transform hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 shadow-xl">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-300">
                    👥 Personas Geradas
                  </CardTitle>
                  <p className="text-green-600 dark:text-green-400">Perfis ultra-precisos</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      name: "Premium Explorer",
                      desc: "Alto valor, early adopter, mobile-first",
                      avatar: "from-blue-500 to-purple-500",
                      icon: Users,
                      metrics: [
                        { label: "LTV", value: "R$ 4.200", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" },
                        { label: "Conversão", value: "34%", color: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300" },
                        { label: "Churn", value: "6%", color: "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300" }
                      ]
                    },
                    {
                      name: "Barganha Consciente",
                      desc: "Sensível à preço, pesquisa muito",
                      avatar: "from-amber-500 to-orange-500",
                      icon: Target,
                      metrics: [
                        { label: "Ticket", value: "R$ 150", color: "bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-300" },
                        { label: "Cupons", value: "89%", color: "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300" },
                        { label: "Retenção", value: "45%", color: "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300" }
                      ]
                    }
                  ].map((persona, index) => (
                    <div key={index} className="bg-white/80 dark:bg-green-950/30 p-5 rounded-xl border border-green-200 dark:border-green-700 hover:bg-white dark:hover:bg-green-900/50 transition-all duration-300 hover:shadow-xl transform hover:scale-102">
                      <div className="flex items-start gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${persona.avatar} flex items-center justify-center shadow-lg`}>
                          <persona.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-green-800 dark:text-green-200 text-lg">{persona.name}</h4>
                          <p className="text-sm text-green-600 dark:text-green-400 mb-3">{persona.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {persona.metrics.map((metric, idx) => (
                              <span key={idx} className={`px-3 py-1 rounded-full text-xs font-medium ${metric.color}`}>
                                {metric.label}: {metric.value}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Enhanced Flow Indicators */}
          <div className="hidden lg:flex justify-center items-center gap-8 mt-12 text-muted-foreground">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-pulse">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Processamento</span>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-green-500 flex items-center justify-center animate-pulse">
                <ArrowRight className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Geração</span>
            </div>
          </div>
        </div>
      </div>

      {/* How to Create Section - Enhanced */}
      <div className="relative py-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl"></div>
        <div className="absolute top-0 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Como Montar a Sua
            </h3>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforme dados brutos em personas sintéticas precisas em 3 passos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className={`absolute -inset-1 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300 ${
                  index === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-400' :
                  index === 1 ? 'bg-gradient-to-r from-purple-600 to-purple-400' :
                  'bg-gradient-to-r from-green-600 to-green-400'
                }`}></div>
                <Card className={`relative bg-gradient-to-br border-2 transition-all duration-500 transform hover:scale-105 ${
                  index === 0 ? 'from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600' :
                  index === 1 ? 'from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600' :
                  'from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600'
                }`}>
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 relative">
                      <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl ${
                        index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                        index === 1 ? 'bg-gradient-to-br from-purple-500 to-purple-600' :
                        'bg-gradient-to-br from-green-500 to-green-600'
                      }`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 animate-pulse"></div>
                      )}
                    </div>
                    
                    <h4 className={`text-xl font-semibold mb-4 ${
                      index === 0 ? 'text-blue-800 dark:text-blue-200' :
                      index === 1 ? 'text-purple-800 dark:text-purple-200' :
                      'text-green-800 dark:text-green-200'
                    }`}>
                      {step.title}
                    </h4>
                    
                    <p className={`leading-relaxed ${
                      index === 0 ? 'text-blue-600 dark:text-blue-400' :
                      index === 1 ? 'text-purple-600 dark:text-purple-400' :
                      'text-green-600 dark:text-green-400'
                    }`}>
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Steps - Enhanced */}
      <div className="relative py-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-teal-500/5 to-emerald-500/5 rounded-3xl"></div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-48 h-48 bg-teal-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <Card className="relative bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/50 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                    <Building2 className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl text-blue-800 dark:text-blue-200">Como criar uma boa pesquisa de persona</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 dark:bg-blue-950/20 p-6 rounded-lg mb-6 border border-blue-200 dark:border-blue-800">
                  <p className="text-foreground font-medium mb-4">
                    📋 <strong>Metodologia Martin Lindstrom:</strong>
                  </p>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Use nosso prompt especializado baseado na metodologia de Martin Lindstrom para criar pesquisas que revelam motivações ocultas e dores profundas do seu público-alvo.
                  </p>
                  <div className="text-center">
                    <Button 
                      variant="default" 
                      size="lg" 
                      className="text-lg px-8 py-6 h-auto bg-primary hover:bg-primary/90"
                      onClick={() => navigate('/dashboard/prompts#17')}
                    >
                      Prompt - Criador de pesquisas
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </div>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-lg border border-amber-200 dark:border-amber-800">
                  <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    💡 Pergunta fundamental:
                  </h4>
                  <p className="text-amber-700 dark:text-amber-300 font-medium italic text-lg">
                    "O que tira o sono do meu lead à noite?"
                  </p>
                </div>
                
                {/* Book References */}
                <div className="mt-6 space-y-4">
                  <h4 className="text-xl font-semibold text-foreground">📚 Leituras Recomendadas</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <a 
                      href="https://www.amazon.com.br/l%C3%B3gica-consumo-Verdades-mentiras-compramos/dp/8595082669" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 flex items-center gap-4"
                    >
                      <img 
                        src={logicaConsumoCover} 
                        alt="A Lógica do Consumo - Martin Lindstrom" 
                        className="w-16 h-24 object-cover rounded-lg shadow-md"
                      />
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300">A Lógica do Consumo</h5>
                        <p className="text-sm text-muted-foreground mt-1">Verdades e mentiras sobre por que compramos</p>
                      </div>
                    </a>
                    <a 
                      href="https://www.amazon.com.br/Small-Data-Indicam-Grandes-Tend%C3%AAncias/dp/8569809719" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-600 flex items-center gap-4"
                    >
                      <img 
                        src={smallDataCover} 
                        alt="Small Data - Martin Lindstrom" 
                        className="w-16 h-24 object-cover rounded-lg shadow-md"
                      />
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-300">Small Data</h5>
                        <p className="text-sm text-muted-foreground mt-1">As pequenas pistas que indicam grandes tendências</p>
                      </div>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-purple-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <Card className="relative bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/50 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg">
                    <Upload className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl text-purple-800 dark:text-purple-200">Upload da Pesquisa</span>
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
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <Card className="relative bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/50 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 transition-all duration-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-2xl text-green-800 dark:text-green-200">Análise com Prompts Especializados</span>
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
        </div>
      </div>

      {/* CTA Section - Enhanced */}
      <div className="relative py-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-purple-500/5 to-indigo-500/5 rounded-3xl"></div>
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 text-center">
          <div className="relative group inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <Card className="relative bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-violet-950/50 dark:to-indigo-900/50 border-2 border-violet-200 dark:border-violet-800 hover:border-violet-400 dark:hover:border-violet-600 transition-all duration-500 p-12 inline-block transform hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Pronto para começar?
              </h3>
              <p className="text-violet-600 dark:text-violet-400 mb-8 max-w-md mx-auto text-lg">
                Acesse nossa biblioteca de prompts especializados para análise de personas sintéticas
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => navigate('/prompts')}
              >
                Ver Prompts de Análise
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;