import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Brain, Users, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardPreview = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Dashboard Inteligente
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gerencie suas análises e campanhas em uma interface intuitiva e poderosa
          </p>
        </div>

        <div className="relative">
          {/* Mock Dashboard */}
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-card">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              {/* Stats Cards */}
              <Card className="bg-gradient-primary p-4 border-0">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-primary-foreground/80 text-sm">Pesquisas Analisadas</p>
                      <p className="text-2xl font-bold text-primary-foreground">247</p>
                    </div>
                    <BarChart3 className="w-8 h-8 text-primary-foreground/80" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Campanhas Ativas</p>
                      <p className="text-2xl font-bold text-foreground">12</p>
                    </div>
                    <Brain className="w-8 h-8 text-primary" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Taxa de Conversão</p>
                      <p className="text-2xl font-bold text-foreground">18.4%</p>
                    </div>
                    <TrendingUp className="w-8 h-8 text-green-400" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/50 border border-border/50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-muted-foreground text-sm">Público Alcançado</p>
                      <p className="text-2xl font-bold text-foreground">45.2K</p>
                    </div>
                    <Users className="w-8 h-8 text-blue-400" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Chart Area Mockup */}
            <Card className="bg-card/50 border border-border/50">
              <CardHeader>
                <CardTitle className="text-foreground">Performance das Campanhas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Gráficos e métricas em tempo real</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Overlay */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4 text-foreground">
                Acesse o Dashboard Completo
              </h3>
              <p className="text-lg text-muted-foreground mb-8 max-w-md">
                Explore todas as funcionalidades e comece a transformar suas pesquisas em campanhas vencedoras
              </p>
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 h-auto"
                onClick={() => navigate('/dashboard')}
              >
                Acessar Dashboard
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;