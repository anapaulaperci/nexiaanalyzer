import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Search, MessageSquare, Target, Users, TrendingUp, Heart, Star, Rocket } from "lucide-react";
import { useState } from "react";

const Prompts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const prompts = [
    {
      id: 1,
      title: "Análise de Sentimento Completa",
      description: "Identifica emoções, sentimentos e pontos de dor dos respondentes com alta precisão",
      category: "Análise",
      difficulty: "Iniciante",
      rating: 4.9,
      prompt: `Analise o sentimento desta pesquisa de satisfação do cliente e forneça:

1. **Distribuição de Sentimentos**:
   - Percentual de respostas positivas, neutras e negativas
   - Principais emoções identificadas

2. **Pontos de Dor Principais**:
   - Top 3 problemas mais mencionados
   - Impacto de cada problema na satisfação geral

3. **Pontos Fortes**:
   - Aspectos mais elogiados pelos clientes
   - Oportunidades de potencializar pontos positivos

4. **Insights Acionáveis**:
   - Recomendações específicas para melhorias
   - Priorização baseada no impacto

Dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Heart,
      color: "text-red-400"
    },
    {
      id: 2,
      title: "Segmentação Avançada de Público",
      description: "Cria personas detalhadas e segmentos de mercado baseados nos dados coletados",
      category: "Segmentação",
      difficulty: "Intermediário",
      rating: 4.8,
      prompt: `Com base nos dados desta pesquisa, crie uma segmentação completa do público:

1. **Personas Principais** (3-4 personas):
   - Demografia detalhada
   - Comportamentos e preferências
   - Motivações e objetivos
   - Canais de comunicação preferidos

2. **Matriz de Segmentação**:
   - Critérios de segmentação utilizados
   - Tamanho estimado de cada segmento
   - Potencial de valor de cada grupo

3. **Características Comportamentais**:
   - Padrões de compra identificados
   - Sensibilidade a preço
   - Fatores de decisão mais importantes

4. **Estratégias de Targeting**:
   - Abordagem específica para cada segmento
   - Mensagens-chave personalizadas
   - Canais de comunicação recomendados

Dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Users,
      color: "text-purple-400"
    },
    {
      id: 3,
      title: "Geração de Campanha de Conversão",
      description: "Desenvolve campanhas de marketing focadas em resultados e alta performance",
      category: "Marketing",
      difficulty: "Avançado",
      rating: 4.9,
      prompt: `Baseado nos insights desta pesquisa, crie uma campanha de marketing completa:

1. **Estratégia da Campanha**:
   - Objetivo principal e KPIs
   - Público-alvo prioritário
   - Proposta de valor única

2. **Messaging Framework**:
   - Headline principal
   - Subheadlines para diferentes segmentos
   - Call-to-actions otimizados
   - Pontos de objeção e respostas

3. **Mix de Canais**:
   - Canais digitais recomendados
   - Distribuição de orçamento por canal
   - Cronograma de execução

4. **Criativos e Conteúdo**:
   - Conceitos creativos principais
   - Formatos de conteúdo por canal
   - Elementos visuais sugeridos

5. **Métricas de Sucesso**:
   - KPIs por canal
   - Metas de conversão
   - Sistema de acompanhamento

Dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Rocket,
      color: "text-green-400"
    },
    {
      id: 4,
      title: "Mapeamento de Jornada do Cliente",
      description: "Mapeia toda a experiência do cliente identificando oportunidades de otimização",
      category: "Experiência",
      difficulty: "Intermediário",
      rating: 4.7,
      prompt: `Mapeie a jornada completa do cliente baseada nos insights desta pesquisa:

1. **Estágios da Jornada**:
   - Conscientização: Como descobrem o problema/necessidade
   - Consideração: Processo de avaliação de soluções
   - Decisão: Fatores decisivos na escolha
   - Pós-compra: Experiência de uso e fidelização

2. **Touchpoints Críticos**:
   - Pontos de contato em cada estágio
   - Canais de interação preferidos
   - Momentos de verdade identificados

3. **Pain Points e Friction**:
   - Obstáculos em cada etapa
   - Pontos de abandono mais comuns
   - Frustrações relatadas pelos clientes

4. **Oportunidades de Melhoria**:
   - Quick wins para cada estágio
   - Melhorias de médio e longo prazo
   - Impacto esperado de cada otimização

5. **Personalização**:
   - Pontos onde personalizar a experiência
   - Dados necessários para personalização
   - Tecnologias recomendadas

Dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Target,
      color: "text-blue-400"
    },
    {
      id: 5,
      title: "Análise Competitiva e Posicionamento",
      description: "Identifica vantagens competitivas e oportunidades de posicionamento no mercado",
      category: "Estratégia",
      difficulty: "Avançado",
      rating: 4.6,
      prompt: `Analise o posicionamento competitivo baseado nesta pesquisa:

1. **Análise da Concorrência**:
   - Principais competidores mencionados
   - Pontos fortes de cada concorrente
   - Gaps identificados no mercado

2. **Posicionamento Atual**:
   - Como a marca é percebida
   - Atributos associados à marca
   - Diferenciação percebida pelo mercado

3. **Oportunidades de Reposicionamento**:
   - Espaços de mercado descobertos
   - Atributos subexplorados
   - Nichos de alto potencial

4. **Estratégia de Diferenciação**:
   - Proposta de valor única
   - Vantagens competitivas sustentáveis
   - Mensagens de posicionamento

5. **Plano de Ação**:
   - Iniciativas de curto prazo
   - Investimentos necessários
   - Métricas de acompanhamento

Dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: TrendingUp,
      color: "text-orange-400"
    }
  ];

  const filteredPrompts = prompts.filter(prompt =>
    prompt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    prompt.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    // Toast notification would be added here
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Iniciante": return "bg-green-500/20 text-green-400";
      case "Intermediário": return "bg-yellow-500/20 text-yellow-400";
      case "Avançado": return "bg-red-500/20 text-red-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2 bg-gradient-hero bg-clip-text text-transparent">
          Biblioteca de Prompts
        </h2>
        <p className="text-lg text-muted-foreground">
          Prompts otimizados para extrair insights valiosos e gerar campanhas de alta performance
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Buscar prompts por categoria, dificuldade ou palavras-chave..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-card/50 border-border/50 backdrop-blur-sm"
        />
      </div>

      {/* Prompts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPrompts.map((prompt) => (
          <Card 
            key={prompt.id}
            className="bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
          >
            <CardHeader className="relative">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <prompt.icon className={`w-5 h-5 ${prompt.color}`} />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-foreground">
                      {prompt.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {prompt.category}
                      </Badge>
                      <Badge className={`text-xs ${getDifficultyColor(prompt.difficulty)}`}>
                        {prompt.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-sm font-medium">{prompt.rating}</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {prompt.description}
              </p>
              
              <div className="bg-secondary/50 p-4 rounded-lg mb-4 border border-border/30 max-h-40 overflow-y-auto">
                <pre className="text-xs text-foreground font-mono leading-relaxed whitespace-pre-wrap">
                  {prompt.prompt}
                </pre>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  onClick={() => copyPrompt(prompt.prompt)}
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copiar Prompt
                </Button>
                <Button variant="default" size="sm" className="shadow-glow">
                  Usar Agora
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredPrompts.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Nenhum prompt encontrado
          </h3>
          <p className="text-muted-foreground">
            Tente ajustar sua busca ou explore nossas categorias disponíveis
          </p>
        </div>
      )}
    </div>
  );
};

export default Prompts;