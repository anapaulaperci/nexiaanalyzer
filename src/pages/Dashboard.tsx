import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, Brain, Users, TrendingUp, Upload, FileText, MessageSquare } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
          Dashboard de Personas Sintéticas
        </h2>
        <p className="text-lg text-muted-foreground">
          Crie e gerencie personas sintéticas baseadas em dados reais com inteligência artificial
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-gradient-primary border-0 text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-primary-foreground/80 text-sm mb-1">Personas Criadas</p>
                <p className="text-3xl font-bold">43</p>
                <p className="text-sm text-primary-foreground/60 mt-1">+8 este mês</p>
              </div>
              <BarChart3 className="w-8 h-8 text-primary-foreground/80" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Análises Realizadas</p>
                <p className="text-3xl font-bold text-foreground">127</p>
                <p className="text-sm text-green-500 mt-1">+15 novas</p>
              </div>
              <Brain className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Precisão Média</p>
                <p className="text-3xl font-bold text-foreground">94.2%</p>
                <p className="text-sm text-green-500 mt-1">+2.3%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-muted-foreground text-sm mb-1">Dados Processados</p>
                <p className="text-3xl font-bold text-foreground">2.4M</p>
                <p className="text-sm text-blue-500 mt-1">+850K</p>
              </div>
              <Users className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Upload className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">Criar Persona</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Faça upload dos seus dados para gerar personas sintéticas
            </p>
            <Button variant="outline" className="w-full">
              Fazer Upload
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">Ver Personas</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Acesse e gerencie suas personas sintéticas criadas
            </p>
            <Button variant="outline" className="w-full">
              Ver Personas
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border border-border/50 backdrop-blur-sm hover:shadow-glow transition-all duration-300 group">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-xl">Usar Templates</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Explore templates de prompts para análises específicas
            </p>
            <Button variant="outline" className="w-full">
              Ver Templates
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-card/50 border border-border/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-foreground">Atividade Recente</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Persona "Jovem Profissional Tech" criada</p>
                <p className="text-sm text-muted-foreground">Há 2 horas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">Análise comportamental finalizada</p>
                <p className="text-sm text-muted-foreground">Há 4 horas</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">3 novas personas sintéticas geradas</p>
                <p className="text-sm text-muted-foreground">Ontem</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;