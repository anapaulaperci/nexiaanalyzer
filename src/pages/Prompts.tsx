import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Search, MessageSquare, Target, Users, TrendingUp, Heart, Star, Rocket, Brain } from "lucide-react";
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
    },
    {
      id: 6,
      title: "Como Extrair Insights Não Óbvios da Sua Pesquisa",
      description: "Descobre padrões ocultos e contradições que revelam oportunidades de negócio inexploradas",
      category: "Análise",
      difficulty: "Avançado",
      rating: 4.9,
      prompt: `Analise profundamente esta pesquisa para extrair insights não-óbvios:

### 1. 🔄 ANÁLISE DE CONTRADIÇÕES
Identifique onde o que as pessoas DIZEM contradiz o que FAZEM:
- Declarações vs Comportamentos reais
- Intenções vs Ações efetivas
- Valores declarados vs Escolhas práticas
→ O que essas contradições revelam sobre motivações ocultas?

### 2. 🕳️ MAPEAMENTO DE VÁCUOS
Encontre o que NÃO foi dito, mas deveria:
- Tópicos consistentemente evitados
- Perguntas não respondidas completamente
- Áreas de desconforto ou silêncio
→ Por que esses vácuos existem? O que escondem?

### 3. 🧩 CONEXÕES INESPERADAS
Correlacione dados que aparentemente não têm relação:
- Combine respostas de perguntas distantes
- Cruze dados demográficos com comportamentais inesperados
- Identifique padrões em combinações improváveis
→ Qual a história por trás dessas conexões?

### 4. 😤 ANÁLISE DE MICROFRUSTAÇÕES
Procure por pequenos incômodos que revelam grandes oportunidades:
- Palavras que indicam irritação sutil
- Processos descritos como "chatos mas necessários"
- Adaptações que pessoas fazem para contornar problemas
→ Como transformar essas friction points em vantagem competitiva?

### 5. ⏰ PADRÕES TEMPORAIS OCULTOS
Analise QUANDO comportamentos acontecem:
- Horários incomuns de atividade
- Sazonalidades não-óbvias
- Ciclos de comportamento (diário, semanal, mensal)
→ Que gatilhos temporais estão sendo ignorados?

### 6. 🎭 PERSONAS SOMBRA
Identifique os "alter egos" não declarados:
- Quem a pessoa quer ser vs quem ela é
- Comportamentos "guilty pleasure"
- Decisões tomadas quando ninguém está vendo
→ Como atender o "eu secreto" dessa persona?

### 7. 💬 ANÁLISE LINGUÍSTICA PROFUNDA
Examine o COMO foi dito, não só O QUE:
- Palavras emocionais recorrentes
- Metáforas e analogias usadas
- Tom (defensivo, entusiasmado, resignado)
- Comprimento e complexidade das respostas
→ O que a linguagem revela sobre estado mental e valores?

### 8. 🌐 ECOSSISTEMA DE INFLUÊNCIAS
Mapeie influências indiretas não mencionadas:
- Quem influencia os influenciadores dessa persona
- Pressões sociais não admitidas
- Referências culturais subliminares
→ Quais forças invisíveis moldam decisões?

### 9. 🔀 JORNADAS ALTERNATIVAS
Identifique caminhos não-lineares:
- Pessoas que chegam ao mesmo resultado por rotas diferentes
- Regressões e loops na jornada
- Atalhos criados pelos usuários
→ Que jornadas não-mapeadas existem?

### 10. 💰 ECONOMIA COMPORTAMENTAL OCULTA
Descubra as "moedas" não-monetárias:
- O que as pessoas realmente "pagam" (tempo, energia, status)
- Trocas implícitas sendo feitas
- Custos emocionais vs benefícios percebidos
→ Qual é a verdadeira equação de valor?

### 11. 🚫 ANÁLISE DE EXTREMOS E OUTLIERS
Foque nos casos extremos:
- Os 5% que amam e os 5% que odeiam
- Comportamentos estatisticamente raros mas significativos
- Casos de sucesso e fracasso extremos
→ O que os extremos ensinam sobre o meio?

### 12. 🔮 SINAIS FRACOS DO FUTURO
Identifique indicadores precoces de mudança:
- Comportamentos emergentes minoritários
- Insatisfações crescentes mas ainda pequenas
- Adaptações criativas que podem virar tendência
→ Que mudanças estão nascendo agora?

## ENTREGÁVEIS ESPECÍFICOS:

### 1. TOP 10 INSIGHTS NÃO-ÓBVIOS
Liste em ordem de impacto potencial no negócio:
- Formato: "Descobrimos que [insight], o que significa [implicação]"
- Inclua % de personas afetadas
- Indique nível de confiança (alta/média/baixa)

### 2. OPORTUNIDADES OCULTAS
5 oportunidades de negócio baseadas nos insights:
- Tamanho potencial do mercado
- Facilidade de implementação (1-10)
- Vantagem competitiva esperada

### 3. HIPÓTESES PARA TESTE
7 hipóteses contra-intuitivas para validar:
- Hipótese específica
- Como testar
- O que significaria se verdadeira

### 4. PERSONA INVISÍVEL
Descreva uma sub-persona que ninguém está vendo:
- Características únicas
- Por que está sendo ignorada
- Como alcançá-la

### 5. ALERTAS ESTRATÉGICOS
3 riscos ou ameaças descobertos nos dados:
- Tendências preocupantes
- Mudanças de comportamento
- Disruptores potenciais

## FORMATO DE OUTPUT:
- Use bullets e formatação clara
- Destaque insights com 🎯
- Indique nível de certeza: ⭐⭐⭐ (alto) ⭐⭐ (médio) ⭐ (baixo)
- Priorize praticidade sobre teoria
- Inclua exemplos específicos dos dados

## MINDSET PARA ANÁLISE:
Pense como:
- Detetive procurando pistas
- Antropólogo estudando uma tribo
- Psicólogo analisando o inconsciente
- Estrategista procurando vantagens
- Futurista identificando tendências

Dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Brain,
      color: "text-indigo-400"
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