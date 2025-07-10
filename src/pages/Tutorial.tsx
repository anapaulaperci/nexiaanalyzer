import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, PlayCircle, FileText, Brain, Rocket, Clock, Star, Target, Lightbulb, Zap, TrendingUp, Users } from "lucide-react";

const Tutorial = () => {
  const steps = [
    {
      id: 1,
      title: "Preparação dos Dados",
      description: "Aprenda como preparar seus dados de pesquisa para análise",
      duration: "5 min",
      completed: true,
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgIcon: "bg-blue-500/20",
      textColor: "text-blue-600"
    },
    {
      id: 2,
      title: "Configuração da IA",
      description: "Configure Claude/ChatGPT para análises otimizadas",
      duration: "8 min",
      completed: true,
      icon: Brain,
      color: "from-purple-500 to-purple-600",
      bgIcon: "bg-purple-500/20",
      textColor: "text-purple-600"
    },
    {
      id: 3,
      title: "Prompts Eficazes",
      description: "Domine a arte de criar prompts que geram insights valiosos",
      duration: "12 min",
      completed: false,
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
      bgIcon: "bg-yellow-500/20",
      textColor: "text-yellow-600"
    },
    {
      id: 4,
      title: "Análise de Sentimento",
      description: "Identifique emoções e sentimentos dos respondentes",
      duration: "10 min",
      completed: false,
      icon: Target,
      color: "from-green-500 to-emerald-500",
      bgIcon: "bg-green-500/20",
      textColor: "text-green-600"
    },
    {
      id: 5,
      title: "Geração de Personas",
      description: "Transforme insights em personas sintéticas precisas",
      duration: "15 min",
      completed: false,
      icon: Users,
      color: "from-pink-500 to-rose-500",
      bgIcon: "bg-pink-500/20",
      textColor: "text-pink-600"
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Rapidez",
      description: "Crie personas em minutos, não semanas",
      color: "text-yellow-500"
    },
    {
      icon: TrendingUp,
      title: "Precisão",
      description: "94% de precisão com dados reais",
      color: "text-green-500"
    },
    {
      icon: Star,
      title: "Qualidade",
      description: "Insights profundos e acionáveis",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="relative space-y-8">
      {/* Floating elements */}
      <div className="fixed top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-bounce-slow z-0"></div>
      <div className="fixed top-40 right-20 w-3 h-3 bg-purple-400/30 rounded-full animate-bounce-slow z-0" style={{ animationDelay: '1s' }}></div>
      <div className="fixed bottom-40 left-20 w-5 h-5 bg-blue-400/20 rounded-full animate-bounce-slow z-0" style={{ animationDelay: '2s' }}></div>
      
      {/* Header com elementos decorativos */}
      <div className="relative mb-12">
        {/* Background decorativo */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-3xl"></div>
        <div className="absolute top-4 right-8 w-20 h-20 bg-gradient-primary opacity-10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 left-8 w-16 h-16 bg-primary-glow/20 rounded-full blur-lg"></div>
        
        <div className="relative p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-glow">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Tutorial Completo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda passo a passo como transformar pesquisas em personas sintéticas vencedoras
          </p>
        </div>
      </div>

      {/* Progress Overview melhorado */}
      <Card className="relative overflow-hidden bg-gradient-to-r from-primary to-primary-glow border-0 text-primary-foreground">
        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
        
        <CardContent className="relative p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Seu Progresso</h3>
                <p className="text-primary-foreground/80">Continue aprendendo!</p>
              </div>
            </div>
            <div className="text-right">
              <span className="text-4xl font-bold">40%</span>
              <p className="text-sm text-primary-foreground/80">Concluído</p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full bg-primary-foreground/20 rounded-full h-4">
              <div className="bg-white h-4 rounded-full w-2/5 transition-all duration-500 ease-out shadow-lg"></div>
            </div>
            <div className="absolute top-1/2 left-2/5 transform -translate-y-1/2 w-6 h-6 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          <div className="flex justify-between mt-4 text-sm text-primary-foreground/80">
            <span>2 de 5 módulos concluídos</span>
            <span>3 módulos restantes</span>
          </div>
        </CardContent>
      </Card>

      {/* Benefits Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="bg-card/50 border border-border/50 hover:shadow-glow transition-all duration-300 group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <benefit.icon className={`w-6 h-6 text-white`} />
              </div>
              <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tutorial Steps melhorados */}
      <div className="space-y-6">
        {steps.map((step, index) => (
          <Card 
            key={step.id} 
            className={`relative overflow-hidden transition-all duration-300 hover:shadow-glow border animate-slide-up ${
              step.completed 
                ? 'border-primary/50 bg-primary/5' 
                : 'border-border/50 hover:border-primary/50'
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Background decorativo */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${step.color} opacity-5 rounded-full -translate-y-16 translate-x-16`}></div>
            
            <CardContent className="relative p-8">
              <div className="flex items-center gap-6">
                {/* Step indicator melhorado */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    step.completed 
                      ? 'bg-primary text-primary-foreground shadow-glow' 
                      : `bg-gradient-to-br ${step.color} text-white`
                  }`}>
                    {step.completed ? (
                      <CheckCircle className="w-8 h-8" />
                    ) : (
                      <step.icon className="w-8 h-8" />
                    )}
                  </div>
                  
                  {/* Connector line */}
                  {index < steps.length - 1 && (
                    <div className={`w-0.5 h-16 ${step.completed ? 'bg-primary' : 'bg-border'} transition-colors duration-300`}></div>
                  )}
                </div>

                {/* Content melhorado */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2 flex items-center gap-3">
                        {step.title}
                        {step.completed && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Concluído
                          </span>
                        )}
                      </h3>
                      <p className="text-muted-foreground mb-3 text-lg">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm">
                        <span className="flex items-center gap-2 text-primary font-medium">
                          <Clock className="w-4 h-4" />
                          {step.duration}
                        </span>
                        {step.completed && (
                          <span className="flex items-center gap-2 text-green-600">
                            <CheckCircle className="w-4 h-4" />
                            Concluído
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button melhorado */}
                    <Button 
                      variant={step.completed ? "outline" : "default"}
                      size="lg"
                      className={`px-8 ${!step.completed ? 'shadow-glow hover:scale-105' : ''} transition-all duration-300`}
                    >
                      {step.completed ? (
                        <>
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Revisar
                        </>
                      ) : (
                        <>
                          <PlayCircle className="w-4 h-4 mr-2" />
                          Iniciar
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources melhorado */}
      <Card className="bg-card/50 border border-border/50 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <CardTitle className="text-2xl text-foreground">Recursos Adicionais</CardTitle>
              <p className="text-muted-foreground">Materiais complementares para acelerar seu aprendizado</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-150 transition-all duration-300 border border-blue-200 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-blue-900 text-lg">Guia de Referência</h4>
              </div>
              <p className="text-blue-700 leading-relaxed">
                Documentação completa com exemplos práticos e templates prontos para usar
              </p>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-150 transition-all duration-300 border border-purple-200 group cursor-pointer">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <PlayCircle className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-purple-900 text-lg">Vídeos Tutoriais</h4>
              </div>
              <p className="text-purple-700 leading-relaxed">
                Aulas em vídeo demonstrando cada funcionalidade passo a passo
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tutorial;