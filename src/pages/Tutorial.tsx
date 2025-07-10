import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, PlayCircle, FileText, Brain, Rocket } from "lucide-react";

const Tutorial = () => {
  const steps = [
    {
      id: 1,
      title: "Preparação dos Dados",
      description: "Aprenda como preparar seus dados de pesquisa para análise",
      duration: "5 min",
      completed: true,
      icon: FileText,
    },
    {
      id: 2,
      title: "Configuração da IA",
      description: "Configure Claude/ChatGPT para análises otimizadas",
      duration: "8 min",
      completed: true,
      icon: Brain,
    },
    {
      id: 3,
      title: "Prompts Eficazes",
      description: "Domine a arte de criar prompts que geram insights valiosos",
      duration: "12 min",
      completed: false,
      icon: PlayCircle,
    },
    {
      id: 4,
      title: "Análise de Sentimento",
      description: "Identifique emoções e sentimentos dos respondentes",
      duration: "10 min",
      completed: false,
      icon: Brain,
    },
    {
      id: 5,
      title: "Geração de Campanhas",
      description: "Transforme insights em campanhas de marketing eficazes",
      duration: "15 min",
      completed: false,
      icon: Rocket,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
          Tutorial Completo
        </h2>
        <p className="text-lg text-muted-foreground">
          Aprenda passo a passo como transformar pesquisas em campanhas de marketing vencedoras
        </p>
      </div>

      {/* Progress Overview */}
      <Card className="bg-gradient-primary border-0 text-primary-foreground">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Seu Progresso</h3>
            <span className="text-2xl font-bold">40%</span>
          </div>
          <div className="w-full bg-primary-foreground/20 rounded-full h-3">
            <div className="bg-primary-foreground h-3 rounded-full w-2/5"></div>
          </div>
          <p className="text-sm text-primary-foreground/80 mt-2">
            2 de 5 módulos concluídos
          </p>
        </CardContent>
      </Card>

      {/* Tutorial Steps */}
      <div className="space-y-4">
        {steps.map((step, index) => (
          <Card 
            key={step.id} 
            className={`bg-card/50 border transition-all duration-300 hover:shadow-glow ${
              step.completed 
                ? 'border-primary/50 bg-primary/5' 
                : 'border-border/50 hover:border-primary/50'
            }`}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                {/* Step Number/Status */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step.completed 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-secondary text-secondary-foreground'
                }`}>
                  {step.completed ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-bold">{step.id}</span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-2">
                        {step.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-primary font-medium">
                          {step.duration}
                        </span>
                        {step.completed && (
                          <span className="text-green-400 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Concluído
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    <Button 
                      variant={step.completed ? "outline" : "default"}
                      className={step.completed ? "" : "shadow-glow"}
                    >
                      {step.completed ? "Revisar" : "Iniciar"}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Additional Resources */}
      <Card className="bg-card/50 border border-border/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Recursos Adicionais</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <FileText className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Guia de Referência</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Documentação completa com exemplos práticos
              </p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <PlayCircle className="w-5 h-5 text-primary" />
                <h4 className="font-semibold text-foreground">Vídeos Tutoriais</h4>
              </div>
              <p className="text-sm text-muted-foreground">
                Aulas em vídeo demonstrando cada funcionalidade
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Tutorial;