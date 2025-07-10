import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Copy, Sparkles, Target, TrendingUp, Brain } from "lucide-react";
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

        {/* Copy Bank Section */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Copy className="w-6 h-6 text-primary" />
              🎨 Como Criar Seu Copy Bank
            </CardTitle>
            <p className="text-muted-foreground">
              Organize e reutilize suas melhores copies para maximizar resultados
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Steps */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="font-bold text-xl text-orange-700">PASSO 1: Auditoria</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>1. Colete todas as copies já usadas</li>
                  <li>2. Identifique as de melhor performance</li>
                  <li>3. Analise métricas (CTR, conversão, etc.)</li>
                  <li>4. Marque as "vencedoras"</li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="font-bold text-xl text-blue-700">PASSO 2: Categorização</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-sm mb-1">Por Persona:</p>
                    <ul className="text-xs text-muted-foreground">
                      <li>• Decisor Técnico</li>
                      <li>• Comprador Econômico</li>
                      <li>• Usuário Final</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Por Estágio do Funil:</p>
                    <ul className="text-xs text-muted-foreground">
                      <li>• Topo (Awareness)</li>
                      <li>• Meio (Consideração)</li>
                      <li>• Fundo (Decisão)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">Por Emoção:</p>
                    <ul className="text-xs text-muted-foreground">
                      <li>• Medo (FOMO) • Desejo</li>
                      <li>• Urgência • Confiança</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="font-bold text-xl text-green-700">PASSO 3: Documentação</h3>
                <div className="bg-muted/50 rounded-lg p-4 border">
                  <div className="font-mono text-xs space-y-1">
                    <div className="text-green-600">## COPY ID: HL-001</div>
                    <div><strong>Texto:</strong> "Pare de perder vendas por follow-up mal feito"</div>
                    <div><strong>Categoria:</strong> Headline / Pain Point</div>
                    <div><strong>Persona:</strong> Gestor de Vendas</div>
                    <div><strong>Performance:</strong> CTR 7.3% | Conv 3.2%</div>
                    <div><strong>Usado em:</strong> Facebook Ads Q3/2024</div>
                    <div><strong>Variações testadas:</strong> 5</div>
                    <div><strong>Status:</strong> ✅ Ativa</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chunks Concept Section */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              🧩 O Que São Chunks de Anúncios?
            </CardTitle>
            <p className="text-muted-foreground">
              Chunks de anúncios são pequenos blocos modulares de conteúdo que podem ser combinados, reorganizados e testados para criar anúncios mais eficazes.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Concept */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">📊 Conceito Principal:</h3>
              <p className="text-muted-foreground mb-4">
                Em vez de criar um anúncio único e estático, você cria módulos independentes que podem ser:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-blue-600">🔄</span>
                  </div>
                  <p className="text-sm font-medium">Recombinados</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-green-600">🧪</span>
                  </div>
                  <p className="text-sm font-medium">Testados isoladamente</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-purple-600">📈</span>
                  </div>
                  <p className="text-sm font-medium">Otimizados por performance</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl mx-auto mb-2 flex items-center justify-center">
                    <span className="text-orange-600">🎯</span>
                  </div>
                  <p className="text-sm font-medium">Personalizados por audiência</p>
                </div>
              </div>
            </div>

            {/* Types of Chunks */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50/50 rounded-lg p-6 border border-blue-200/50">
                <h4 className="font-semibold text-lg mb-4 text-blue-900">🎨 Chunks de Copy (Texto)</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-sm text-blue-800 mb-2">Headlines:</p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• "Economize 50% hoje"</li>
                      <li>• "Última chance"</li>
                      <li>• "Oferta exclusiva"</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-blue-800 mb-2">Body:</p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• "10.000+ clientes satisfeitos"</li>
                      <li>• "Garantia de 30 dias"</li>
                      <li>• "Entrega grátis"</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-blue-800 mb-2">CTAs:</p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• "Compre agora"</li>
                      <li>• "Saiba mais"</li>
                      <li>• "Teste grátis"</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-green-50/50 rounded-lg p-6 border border-green-200/50">
                <h4 className="font-semibold text-lg mb-4 text-green-900">🖼️ Chunks Visuais</h4>
                <ul className="text-sm text-green-700 space-y-2">
                  <li>🖼️ Imagens de produto</li>
                  <li>👥 Fotos de pessoas/testemunhos</li>
                  <li>📊 Gráficos de benefícios</li>
                  <li>🎥 Vídeos curtos (3-5 segundos)</li>
                </ul>
              </div>

              <div className="bg-purple-50/50 rounded-lg p-6 border border-purple-200/50">
                <h4 className="font-semibold text-lg mb-4 text-purple-900">💰 Chunks de Oferta</h4>
                <ul className="text-sm text-purple-700 space-y-2">
                  <li>💰 Desconto percentual</li>
                  <li>🎁 Brinde</li>
                  <li>📦 Frete grátis</li>
                  <li>⏰ Urgência temporal</li>
                </ul>
              </div>
            </div>

            {/* Practical Example */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">💡 Exemplo Prático:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50/50 rounded-lg p-4 border border-red-200/50">
                  <h4 className="font-medium text-red-900 mb-2">❌ Anúncio Tradicional:</h4>
                  <p className="text-sm text-red-700 italic">
                    "Compre nosso software de gestão com 30% de desconto. 
                    Mais de 5.000 empresas confiam em nós. Teste grátis por 14 dias."
                  </p>
                </div>
                <div className="bg-green-50/50 rounded-lg p-4 border border-green-200/50">
                  <h4 className="font-medium text-green-900 mb-2">✅ Com Chunks:</h4>
                  <div className="text-sm text-green-700 space-y-2">
                    <div>
                      <strong>Headlines:</strong> "Software 30% OFF" | "Automatize sua empresa" | "Pare de usar planilhas"
                    </div>
                    <div>
                      <strong>Prova Social:</strong> "5.000+ empresas" | "Nota 4.8" | "Líder há 10 anos"
                    </div>
                    <div>
                      <strong>CTAs:</strong> "Teste grátis 14 dias" | "Sem cartão" | "Demo 2 min"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🚀</span>
                </div>
                <h4 className="font-semibold mb-2">Testing Escalável</h4>
                <p className="text-sm text-muted-foreground">
                  Teste cada elemento isoladamente e identifique o que funciona melhor
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold mb-2">Personalização Dinâmica</h4>
                <p className="text-sm text-muted-foreground">
                  Diferentes chunks para diferentes personas e contextos
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl">⚡</span>
                </div>
                <h4 className="font-semibold mb-2">Produção Eficiente</h4>
                <p className="text-sm text-muted-foreground">
                  Reaproveite chunks de sucesso e crie bibliotecas de elementos
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Red Flags Section */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="text-red-500">🚫</span>
              RED FLAGS - O Que Evitar nas Suas Campanhas
            </CardTitle>
            <p className="text-muted-foreground">
              Identifique e evite elementos que criam resistência psicológica ou afastam sua persona
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Copy Red Flags */}
            <div className="space-y-6">
              <div className="bg-red-50/50 rounded-lg p-6 border border-red-200/50">
                <h3 className="font-semibold text-xl mb-4 text-red-900 flex items-center gap-2">
                  🚫 RED FLAGS - COPY (Texto)
                </h3>
                <p className="text-red-700 mb-4">
                  Palavras, frases ou abordagens no texto que criam distanciamento emocional ou resistência psicológica.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-red-800">1. Linguagem Intimidadora/Inatingível</h4>
                    <div className="space-y-3">
                      <div className="bg-red-100/50 p-3 rounded border border-red-200">
                        <p className="text-xs text-red-600 mb-1">❌ ERRADO:</p>
                        <p className="text-sm text-red-800 italic">"Busque a santidade perfeita"</p>
                      </div>
                      <div className="bg-green-100/50 p-3 rounded border border-green-200">
                        <p className="text-xs text-green-600 mb-1">✅ CERTO:</p>
                        <p className="text-sm text-green-800 italic">"Dê pequenos passos na sua jornada de fé"</p>
                      </div>
                      <p className="text-xs text-red-600">Por quê? A persona se sente inadequada, não à altura</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-red-800">2. Culpabilização e Shame</h4>
                    <div className="space-y-3">
                      <div className="bg-red-100/50 p-3 rounded border border-red-200">
                        <p className="text-xs text-red-600 mb-1">❌ ERRADO:</p>
                        <p className="text-sm text-red-800 italic">"Por que você nunca termina o que começa?"</p>
                      </div>
                      <div className="bg-green-100/50 p-3 rounded border border-green-200">
                        <p className="text-xs text-green-600 mb-1">✅ CERTO:</p>
                        <p className="text-sm text-green-800 italic">"Sabemos como é difícil manter a consistência"</p>
                      </div>
                      <p className="text-xs text-red-600">Por quê? Gera vergonha e afasta emocionalmente</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-red-800">3. Generalização Excludente</h4>
                    <div className="space-y-3">
                      <div className="bg-red-100/50 p-3 rounded border border-red-200">
                        <p className="text-xs text-red-600 mb-1">❌ ERRADO:</p>
                        <p className="text-sm text-red-800 italic">"Todo empresário de sucesso acorda às 5h"</p>
                      </div>
                      <div className="bg-green-100/50 p-3 rounded border border-green-200">
                        <p className="text-xs text-green-600 mb-1">✅ CERTO:</p>
                        <p className="text-sm text-green-800 italic">"Encontre o horário que funciona para você"</p>
                      </div>
                      <p className="text-xs text-red-600">Por quê? Exclui quem não se encaixa no padrão</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Red Flags */}
              <div className="bg-orange-50/50 rounded-lg p-6 border border-orange-200/50">
                <h3 className="font-semibold text-xl mb-4 text-orange-900 flex items-center gap-2">
                  ⚠️ RED FLAGS - VISUAL
                </h3>
                <p className="text-orange-700 mb-4">
                  Elementos visuais que criam desconexão ou desconforto com a realidade da persona.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-medium text-orange-800">1. Perfeição Irreal</h4>
                    <div className="space-y-3">
                      <div className="bg-red-100/50 p-3 rounded border border-red-200">
                        <p className="text-xs text-red-600 mb-1">❌ ERRADO:</p>
                        <p className="text-sm text-red-800">Família modelo de banco de imagens sorrindo</p>
                      </div>
                      <div className="bg-green-100/50 p-3 rounded border border-green-200">
                        <p className="text-xs text-green-600 mb-1">✅ CERTO:</p>
                        <p className="text-sm text-green-800">Pessoas reais em situações autênticas</p>
                      </div>
                      <p className="text-xs text-orange-600">Por quê? "Isso não é minha realidade"</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-medium text-orange-800">🎨 Outros Red Flags Visuais:</h4>
                    <ul className="text-sm text-orange-700 space-y-2">
                      <li>• Cores agressivas em excesso (vermelho total)</li>
                      <li>• Fontes ilegíveis (muito decorativas)</li>
                      <li>• Imagens datadas (parecem de 2010)</li>
                      <li>• Excesso de elementos (poluição visual)</li>
                      <li>• Falta de diversidade (só um tipo de pessoa)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Specific Categories */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50/50 rounded-lg p-6 border border-purple-200/50">
                  <h4 className="font-semibold text-lg mb-4 text-purple-900">🎨 5. ELEMENTOS GRÁFICOS</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-purple-800 mb-2">❌ Cores Agressivas/Gatilho</p>
                      <p className="text-xs text-purple-600 mb-1">RED FLAG: Vermelho sangue em app de meditação</p>
                      <p className="text-xs text-purple-600 mb-2">PROBLEMA: Contradiz a mensagem, gera ansiedade</p>
                      <p className="text-xs text-green-600">✅ MELHOR: Cores que apoiam a mensagem</p>
                    </div>

                    <div>
                      <p className="font-medium text-purple-800 mb-2">❌ Excesso de Urgência Visual</p>
                      <p className="text-xs text-purple-600 mb-1">RED FLAG: 10 setas piscando, timers em todo lugar</p>
                      <p className="text-xs text-purple-600 mb-2">PROBLEMA: Desespero visual, parece spam</p>
                      <p className="text-xs text-green-600">✅ MELHOR: Um elemento de urgência bem colocado</p>
                    </div>

                    <div>
                      <p className="font-medium text-purple-800 mb-2">❌ Stock Photos Óbvias</p>
                      <p className="text-xs text-purple-600 mb-1">RED FLAG: "Empresários" apertando mãos no vazio</p>
                      <p className="text-xs text-purple-600 mb-2">PROBLEMA: Todo mundo reconhece, perde credibilidade</p>
                      <p className="text-xs text-green-600">✅ MELHOR: Fotos reais ou stocks premium menos óbvias</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50/50 rounded-lg p-6 border border-yellow-200/50">
                  <h4 className="font-semibold text-lg mb-4 text-yellow-900">🍔 6. ALIMENTAÇÃO</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-yellow-800 mb-2">❌ Comida Plastificada</p>
                      <p className="text-xs text-yellow-600 mb-1">RED FLAG: Hambúrguer perfeito que parece de plástico</p>
                      <p className="text-xs text-yellow-600 mb-2">PROBLEMA: Não parece comestível, gera desconfiança</p>
                      <p className="text-xs text-green-600">✅ MELHOR: Food styling natural, "perfeitamente imperfeito"</p>
                    </div>

                    <div>
                      <p className="font-medium text-yellow-800 mb-2">❌ Porções Irreais</p>
                      <p className="text-xs text-yellow-600 mb-1">RED FLAG: Salada gigante que ninguém come ou mini porção fancy</p>
                      <p className="text-xs text-yellow-600 mb-2">PROBLEMA: Desconexão com hábitos reais</p>
                      <p className="text-xs text-green-600">✅ MELHOR: Porções realistas e apetitosas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Benefits Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover-scale bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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
      </div>
    </div>
  );
};

export default CampaignPlanning;