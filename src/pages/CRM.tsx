import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Contact, Database, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const CRM = () => {
  const pipelineSteps = [
    { number: "1️⃣", title: "Entrada de Leads", description: "Porta de entrada de todos os potenciais clientes", insight: "Base inicial ampla para qualificação" },
    { number: "2️⃣", title: "Lead Confirmado", description: "Leads que confirmaram interesse genuíno", insight: "Separar curiosos de interessados reais" },
    { number: "3️⃣", title: "Recebeu Invite", description: "Leads convidados para conhecer a solução", insight: "Oportunidade de reengajar leads anteriores" },
    { number: "4️⃣", title: "Respondeu Flow", description: "Interação ativa com automações", insight: "Otimizar mensagens e timing" },
    { number: "5️⃣", title: "Interesse Grupo", description: "Demonstram interesse em participar de apresentações", insight: "Momento de qualificação profunda" },
    { number: "6️⃣", title: "Confirmou Presença", description: "Compromisso firmado para participação", insight: "Compromisso público gera ação" },
    { number: "7️⃣", title: "Assistiu Live", description: "Participação efetiva em apresentação", insight: "Formato que mais converte" },
    { number: "8️⃣", title: "Interesse Compra", description: "Manifestação clara de intenção de compra", insight: "Acompanhamento personalizado essencial" },
    { number: "9️⃣", title: "Trial Ativado", description: "Período de teste do produto/serviço", insight: "Avaliar se agrega ou atrasa conversão" },
    { number: "🔟", title: "Compra Aprovada", description: "Conversão final em cliente", insight: "Início do pós-venda" }
  ];

  const strategicInsights = [
    {
      title: "Funil Não-Linear",
      description: "O pipeline mostra que nem todos seguem a ordem esperada. Pessoas podem pular etapas e ainda converter.",
      lesson: "Flexibilidade no processo aumenta conversões"
    },
    {
      title: "O Poder do Trial",
      description: "Questione se o trial é necessário. Muitas vezes clientes estão prontos para comprar.",
      lesson: "Testar conversão direta quando valor está claro"
    },
    {
      title: "Lives como Motor de Conversão",
      description: "Lives geram maior engajamento e presença. Estratégia vencedora como principal ferramenta.",
      lesson: "Investir em qualidade e frequência"
    },
    {
      title: "Taxa de Conversão como Diferencial",
      description: "Pipelines bem estruturados superam médias de mercado. Processo automatizado e personalizado.",
      lesson: "Qualidade sobre quantidade"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Pipeline de CRM Inteligente: Da Entrada ao Sucesso
        </h1>
        <p className="text-xl text-muted-foreground">
          Material para Palestra sobre Otimização de Vendas
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            📊 Visão Geral do Pipeline
          </CardTitle>
          <CardDescription>
            Um pipeline bem estruturado representa uma jornada estratégica de conversão, com etapas fundamentais que transformam leads em clientes aprovados.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎯 As Etapas Essenciais de um Pipeline de Sucesso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            {pipelineSteps.map((step, index) => (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{step.number}</span>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    <p className="text-sm text-primary font-medium">💡 {step.insight}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Insights Estratégicos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {strategicInsights.map((insight, index) => (
              <div key={index} className="p-4 border rounded-lg space-y-3">
                <h3 className="font-semibold text-lg text-primary">{insight.title}</h3>
                <p className="text-sm text-muted-foreground">{insight.description}</p>
                <div className="p-2 bg-primary/5 rounded border-l-4 border-primary">
                  <p className="text-sm font-medium">✨ {insight.lesson}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CRM;