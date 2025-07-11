import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, Sparkles, Target, TrendingUp, Brain, Bot } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const CampaignPlanning = () => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const prompt = `Você é um estrategista de marketing e vendas experiente. Com base nos dados da persona sintética fornecida, crie um plano de campanha de vendas completo e detalhado.

## DADOS DA PERSONA SINTÉTICA:
[Cole aqui os dados da sua persona sintética]

## CONTEXTO DO NEGÓCIO:
- Produto/Serviço: [Descreva seu produto/serviço]
- Ticket Médio: [Valor]
- Ciclo de Vendas Atual: [Tempo médio]
- Meta de Vendas: [Objetivo específico]
- Orçamento Disponível: [Valor para a campanha]
- Período da Campanha: [Duração]

## CRIE UM PLANO DETALHADO INCLUINDO:

### 1. ANÁLISE ESTRATÉGICA
- Identifique os 3 principais pain points desta persona
- Liste 5 gatilhos de compra específicos
- Defina a proposta de valor única para esta persona
- Mapeie as objeções prováveis e como superá-las

### 2. MENSAGEM E POSICIONAMENTO
- Crie 3 headlines principais que ressoem com esta persona
- Desenvolva o storytelling da campanha (problema → solução → transformação)
- Defina o tom de voz ideal (formal/casual, técnico/emocional, etc.)
- Liste 10 power words específicas para esta persona

### 3. ESTRATÉGIA DE CANAIS
Para cada canal, especifique:
- Por que este canal (baseado nos dados da persona)
- Formato de conteúdo ideal
- Frequência de comunicação
- Horários ótimos de publicação
- Budget allocation (%)

Canais a considerar:
□ Email Marketing
□ LinkedIn/Social Selling
□ Google Ads
□ Facebook/Instagram Ads
□ WhatsApp Business
□ Outbound Calls
□ Webinars
□ Conteúdo SEO
□ Remarketing
□ Outros: _____

### 4. JORNADA DE CONVERSÃO
Desenhe um funil específico com:
- TOPO: Como atrair atenção
- MEIO: Como nutrir interesse
- FUNDO: Como converter
- PÓS-VENDA: Como fidelizar

Para cada etapa, inclua:
- Conteúdos específicos
- CTAs apropriados
- Tempo estimado
- Gatilhos de passagem para próxima etapa

### 5. SEQUÊNCIA DE VENDAS DETALHADA
Crie uma cadência de 21 dias incluindo:
- Dia 1-3: [Primeira interação]
- Dia 4-7: [Nutrição]
- Dia 8-14: [Educação e valor]
- Dia 15-21: [Conversão]

Para cada touchpoint especifique:
- Canal
- Mensagem
- Objetivo
- Call-to-action

### 6. SCRIPTS E TEMPLATES
Desenvolva:
- Script de cold call (30 segundos)
- Template de email de abertura
- Mensagem de LinkedIn
- Copy para anúncio principal
- FAQ para objeções

### 7. OFERTAS E INCENTIVOS
Baseado na persona, crie:
- Oferta principal irresistível
- 2 ofertas alternativas
- Bônus/urgência específicos
- Garantias que reduzam risco percebido

### 8. MÉTRICAS E KPIs
Defina metas específicas:
- Taxa de abertura esperada: _%
- Taxa de clique: _%
- Taxa de conversão por canal: _%
- CAC máximo aceitável: R$
- ROI mínimo esperado: %
- LTV projetado: R$

### 9. TESTES A/B PRIORITÁRIOS
Liste 5 testes essenciais:
1. [Elemento] vs [Elemento]
2. [Timing] vs [Timing]
3. [Mensagem] vs [Mensagem]
4. [Oferta] vs [Oferta]
5. [Canal] vs [Canal]

### 10. CRONOGRAMA DE EXECUÇÃO
Semana 1: [Atividades]
Semana 2: [Atividades]
Semana 3: [Atividades]
Semana 4: [Atividades]

### 11. RECURSOS NECESSÁRIOS
- Equipe: [Perfis e horas necessárias]
- Ferramentas: [Softwares e plataformas]
- Conteúdo: [Peças a criar]
- Budget detalhado: [Distribuição por item]

### 12. CONTINGÊNCIAS
- Se conversão < esperado: [Ação]
- Se CAC > planejado: [Ação]
- Se concorrência reagir: [Ação]

## FORMATO DE ENTREGA:
Apresente o plano de forma executiva, com bullets claros, números específicos e ações práticas. Use emojis para facilitar a leitura. Priorize o que é mais importante para esta persona específica.

## EXEMPLO DE OUTPUT ESPERADO:
"Para a persona 'Executivo Tech Early Adopter', a campanha focará em..."`;

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      toast({
        title: "Prompt copiado!",
        description: "O prompt foi copiado para sua área de transferência.",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o prompt. Tente selecionar e copiar manualmente.",
        variant: "destructive",
      });
    }
  };

  const benefits = [
    {
      icon: Target,
      title: "Estratégia Focada",
      description: "Plano baseado na persona específica"
    },
    {
      icon: TrendingUp,
      title: "ROI Otimizado",
      description: "Máximo retorno com mínimo investimento"
    },
    {
      icon: Brain,
      title: "IA Especializada",
      description: "Insights avançados de marketing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto p-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Planejamento de Campanha com IA
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Aprenda os conceitos fundamentais e crie campanhas de vendas vencedoras
            </p>
          </div>
        </div>

        {/* Educational Section - Campaign Basics */}
        <Card className="bg-gradient-to-br from-card via-card/95 to-card/80 backdrop-blur-sm border-primary/20 shadow-elegant">
          <CardHeader className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
            <div className="relative">
              <CardTitle className="text-3xl flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Antes de Começar: O Que Você Precisa Definir
                </span>
              </CardTitle>
              <p className="text-lg text-muted-foreground">
                Para criar uma campanha eficaz, primeiro você deve fornecer estas informações essenciais:
              </p>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-400/5 to-transparent rounded-2xl group-hover:from-blue-500/20 transition-all duration-500" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-blue-700">🎯 Objetivo da Campanha</h3>
                      <p className="text-sm text-blue-600/80">Defina sua meta principal</p>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Gerar leads qualificados
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Aumentar vendas
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Reconhecimento de marca
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        Retenção de clientes
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-green-400/5 to-transparent rounded-2xl group-hover:from-green-500/20 transition-all duration-500" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-green-700">📱 Plataformas de Ads</h3>
                      <p className="text-sm text-green-600/80">Escolha seus canais</p>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Facebook/Instagram Ads
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        Google Ads
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        LinkedIn Ads
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        TikTok Ads
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-purple-400/5 to-transparent rounded-2xl group-hover:from-purple-500/20 transition-all duration-500" />
                <div className="relative p-6 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-purple-700">👤 Dados da Persona</h3>
                      <p className="text-sm text-purple-600/80">Conheça seu público</p>
                    </div>
                  </div>
                  <div className="bg-white/50 rounded-xl p-4">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        Demografia e comportamento
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        Dores e necessidades
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        Canais preferidos
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full" />
                        Jornada de compra
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Prompt Card */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Brain className="w-6 h-6 text-primary" />
                  Prompt para Planejamento de Campanha
                </CardTitle>
                <p className="text-muted-foreground">
                  Use este prompt especializado para criar campanhas de vendas baseadas em personas sintéticas
                </p>
              </div>
              <Button
                onClick={copyToClipboard}
                variant="outline"
                className="flex items-center gap-2 hover-scale"
              >
                <Copy className="w-4 h-4" />
                {copied ? "Copiado!" : "Copiar"}
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Label htmlFor="prompt-textarea">Prompt Completo</Label>
              <Textarea
                id="prompt-textarea"
                value={prompt}
                readOnly
                className="min-h-[500px] font-mono text-sm bg-muted/30 border-border/50"
              />
              
              <div className="flex justify-between items-center pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  💡 Copie este prompt e cole em ChatGPT, Claude ou outro modelo de IA
                </p>
                <Button
                  onClick={copyToClipboard}
                  className="shadow-glow"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Prompt
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Instructions Card */}
        <Card className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-blue-200/50">
          <CardContent className="p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-blue-900">Como Usar</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Copie o Prompt</h4>
                      <p className="text-blue-700 text-sm">Use o botão acima para copiar o prompt completo</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Preencha os Dados</h4>
                      <p className="text-blue-700 text-sm">Substitua os campos entre [ ] com seus dados reais</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Cole na IA</h4>
                      <p className="text-blue-700 text-sm">Use em ChatGPT, Claude ou sua IA preferida</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold text-blue-900">Execute o Plano</h4>
                      <p className="text-blue-700 text-sm">Implemente as estratégias geradas pela IA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Use our GPT Button */}
        <div className="flex justify-center items-center py-8">
          <Button 
            size="lg" 
            className="bg-nexia-accent-500 hover:bg-nexia-accent-600 text-black font-bold text-xl px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 rounded-2xl"
            onClick={() => window.open('https://chatgpt.com/g/g-6871263cd7288191a98ca6e6cd4396eb-nexia-analyxer-campanha', '_blank')}
          >
            <Bot className="w-8 h-8" />
            Use o nosso GPT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CampaignPlanning;