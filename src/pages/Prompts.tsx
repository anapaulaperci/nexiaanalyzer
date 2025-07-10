import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Search, MessageSquare, Target, Users, TrendingUp, Heart, Star, Rocket, Brain, Crown } from "lucide-react";
import { useState } from "react";

// Import das ilustrações
import sentimentAnalysisImg from "@/assets/sentiment-analysis.png";
import audienceSegmentationImg from "@/assets/audience-segmentation.png";
import campaignGenerationImg from "@/assets/campaign-generation.png";
import customerJourneyImg from "@/assets/customer-journey.png";
import competitiveAnalysisImg from "@/assets/competitive-analysis.png";
import hiddenInsightsImg from "@/assets/hidden-insights.png";
import brandArchetypeImg from "@/assets/brand-archetype.png";

const Prompts = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const prompts = [
    {
      id: 1,
      title: "1. Análise competitiva e posicionamento",
      description: "Identifica vantagens competitivas e oportunidades de posicionamento no mercado",
      category: "estratégia",
      difficulty: "avançado",
      rating: 4.6,
      illustration: competitiveAnalysisImg,
      prompt: `Analise o posicionamento competitivo baseado nesta pesquisa:

1. **análise da concorrência**:
   - principais competidores mencionados
   - pontos fortes de cada concorrente
   - gaps identificados no mercado

2. **posicionamento atual**:
   - como a marca é percebida
   - atributos associados à marca
   - diferenciação percebida pelo mercado

3. **oportunidades de reposicionamento**:
   - espaços de mercado descobertos
   - atributos subexplorados
   - nichos de alto potencial

4. **estratégia de diferenciação**:
   - proposta de valor única
   - vantagens competitivas sustentáveis
   - mensagens de posicionamento

5. **plano de ação**:
   - iniciativas de curto prazo
   - investimentos necessários
   - métricas de acompanhamento

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: TrendingUp,
      color: "text-orange-400"
    },
    {
      id: 2,
      title: "2. Análise de sentimento completa",
      description: "Identifica emoções, sentimentos e pontos de dor dos respondentes com alta precisão",
      category: "análise",
      difficulty: "iniciante",
      rating: 4.9,
      illustration: sentimentAnalysisImg,
      prompt: `Analise o sentimento desta pesquisa de satisfação do cliente e forneça:

1. **distribuição de sentimentos**:
   - percentual de respostas positivas, neutras e negativas
   - principais emoções identificadas

2. **pontos de dor principais**:
   - top 3 problemas mais mencionados
   - impacto de cada problema na satisfação geral

3. **pontos fortes**:
   - aspectos mais elogiados pelos clientes
   - oportunidades de potencializar pontos positivos

4. **insights acionáveis**:
   - recomendações específicas para melhorias
   - priorização baseada no impacto

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Heart,
      color: "text-red-400"
    },
    {
      id: 3,
      title: "3. Como extrair insights não óbvios da sua pesquisa",
      description: "Descobre padrões ocultos e contradições que revelam oportunidades de negócio inexploradas",
      category: "análise",
      difficulty: "avançado",
      rating: 4.9,
      illustration: hiddenInsightsImg,
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
    },
    {
      id: 4,
      title: "4. Como identificar o arquétipo a partir da pesquisa da persona",
      description: "Descobre o arquétipo de marca mais ressonante baseado na psicologia arquetípica e branding emocional",
      category: "estratégia",
      difficulty: "avançado",
      rating: 4.8,
      illustration: brandArchetypeImg,
      prompt: `Você é um estrategista de marca especializado em psicologia arquetípica e branding emocional. Analise profundamente os dados de persona fornecidos para identificar o arquétipo de marca mais ressonante e suas variações.

## DADOS DA PERSONA:
[Cole aqui todos os dados da pesquisa de persona]

## CONTEXTO DA MARCA:
- Setor: [Seu mercado]
- Valores atuais: [Se existirem]
- Concorrentes diretos: [Principais]
- Desafio de marca: [O que precisa resolver]

## ANÁLISE ARQUETÍPICA PROFUNDA:

### 1. 🧠 MAPEAMENTO PSICOLÓGICO
Extraia dos dados:
- **motivações profundas**: O que realmente move essa persona?
- **medos fundamentais**: O que ela teme perder ou não conseguir?
- **desejos não-declarados**: O que ela quer mas não admite?
- **valores centrais**: Que princípios são inegociáveis?
- **histórias pessoais**: Que narrativas ela conta sobre si?

### 2. 🎯 IDENTIFICAÇÃO DO ARQUÉTIPO PRIMÁRIO
Com base nos 12 arquétipos de Jung/Mark & Pearson, determine:

**OS 12 ARQUÉTIPOS PARA REFERÊNCIA:**
1. **o inocente** - otimismo, pureza, confiança
2. **o explorador** - liberdade, descoberta, autenticidade  
3. **o sábio** - conhecimento, verdade, compreensão
4. **o herói** - coragem, determinação, superação
5. **o fora da lei** - revolução, quebra de regras, mudança
6. **o mago** - transformação, visão, poder de mudança
7. **o cara comum** - pertencimento, realismo, empatia
8. **o amante** - paixão, compromisso, intimidade
9. **o bobo da corte** - alegria, diversão, espontaneidade
10. **o cuidador** - proteção, generosidade, compaixão
11. **o criador** - inovação, imaginação, expressão
12. **o governante** - controle, responsabilidade, liderança

Para cada arquétipo candidato, avalie:
- % de alinhamento com a persona (0-100%)
- evidências específicas dos dados
- pontos de ressonância emocional
- potenciais conflitos

### 3. 🔄 ARQUÉTIPO SOMBRA
Identifique o arquétipo que a persona REJEITA ou teme:
- qual arquétipo ela definitivamente NÃO quer ser?
- por que essa rejeição existe?
- como isso informa o posicionamento?

### 4. 🎨 BLEND ARQUETÍPICO
Raramente uma marca é um arquétipo puro. Identifique:
- **arquétipo dominante** (60-70%)
- **arquétipo de suporte** (20-30%)
- **arquétipo aspiracional** (10-20%)

Exemplo: Nike = herói (70%) + fora da lei (20%) + mago (10%)

### 5. 📊 MANIFESTAÇÃO DO ARQUÉTIPO

**nível superficial (o que se vê)**
- visual: cores, formas, estética
- verbal: tom de voz, vocabulário
- comportamental: ações da marca

**nível profundo (o que se sente)**
- emoções evocadas
- valores transmitidos
- promessa implícita

**nível arquetípico (o que transforma)**
- jornada oferecida
- transformação prometida
- papel na vida da persona

### 6. 🗣️ VOZ ARQUETÍPICA
Desenvolva diretrizes específicas:

**tom de voz**:
- 3 adjetivos principais
- 3 coisas que NUNCA diríamos
- formalidade (1-10)
- humor (1-10)
- autoridade (1-10)

**vocabulário arquetípico**:
- 10 palavras-poder alinhadas
- 5 frases-assinatura
- metáforas recorrentes

**storytelling framework**:
- estrutura narrativa típica
- conflitos abordados
- resoluções oferecidas

### 7. 🎭 EXPRESSÕES CULTURAIS
Como o arquétipo se manifesta em:
- **rituais**: que experiências criar?
- **símbolos**: que elementos visuais usar?
- **mitos**: que histórias contar?
- **heróis**: que figuras celebrar?

### 8. 🚫 ANTI-PADRÕES
O que definitivamente NÃO fazer:
- comportamentos que traem o arquétipo
- mensagens conflitantes
- estéticas dissonantes
- parcerias perigosas

## ENTREGÁVEIS ESPECÍFICOS:

### 1. DECLARAÇÃO ARQUETÍPICA
"Somos uma marca [ARQUÉTIPO PRINCIPAL] que acredita em [VALOR CENTRAL].
Existimos para [MISSÃO ARQUETÍPICA] através de [MÉTODO ÚNICO].
Para pessoas que [DESCRIÇÃO DA PERSONA], oferecemos [TRANSFORMAÇÃO]."

### 2. MATRIZ DE DECISÃO
Crie uma matriz 3x3:
- sempre fazer | às vezes fazer | nunca fazer
- para: comunicação, produto, experiência

### 3. MOOD BOARD CONCEITUAL
Descreva em palavras:
- paleta emocional
- texturas sensoriais
- ritmo e movimento
- temperatura da marca

### 4. BENCHMARKS ARQUETÍPICOS
- 3 marcas globais com mesmo arquétipo
- 2 marcas brasileiras alinhadas
- 1 marca de outro setor para inspiração

### 5. ROTEIRO DE ATIVAÇÃO
Como ativar o arquétipo em:
- nome/naming
- logo/identidade visual
- campanhas
- produto/serviço
- atendimento
- cultura interna

### 6. MÉTRICAS DE ALINHAMENTO
KPIs para medir aderência arquetípica:
- percepção de marca
- engajamento emocional
- advocacia espontânea
- fit cultural

## ANÁLISE DE CENÁRIOS:

**cenário otimista**: 
Se o arquétipo ressoar perfeitamente, o que acontece em 2 anos?

**cenário realista**: 
Considerando limitações, como adaptar?

**cenário de pivô**: 
Se precisar mudar, qual o próximo arquétipo?

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Crown,
      color: "text-purple-400"
    },
    {
      id: 5,
      title: "5. Geração de campanha de conversão",
      description: "Desenvolve campanhas de marketing focadas em resultados e alta performance",
      category: "marketing",
      difficulty: "avançado",
      rating: 4.9,
      illustration: campaignGenerationImg,
      prompt: `Baseado nos insights desta pesquisa, crie uma campanha de marketing completa:

1. **estratégia da campanha**:
   - objetivo principal e KPIs
   - público-alvo prioritário
   - proposta de valor única

2. **messaging framework**:
   - headline principal
   - subheadlines para diferentes segmentos
   - call-to-actions otimizados
   - pontos de objeção e respostas

3. **mix de canais**:
   - canais digitais recomendados
   - distribuição de orçamento por canal
   - cronograma de execução

4. **criativos e conteúdo**:
   - conceitos creativos principais
   - formatos de conteúdo por canal
   - elementos visuais sugeridos

5. **métricas de sucesso**:
   - KPIs por canal
   - metas de conversão
   - sistema de acompanhamento

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Rocket,
      color: "text-green-400"
    },
    {
      id: 6,
      title: "6. Mapeamento de jornada do cliente",
      description: "Mapeia toda a experiência do cliente identificando oportunidades de otimização",
      category: "experiência",
      difficulty: "intermediário",
      rating: 4.7,
      illustration: customerJourneyImg,
      prompt: `Mapeie a jornada completa do cliente baseada nos insights desta pesquisa:

1. **estágios da jornada**:
   - conscientização: como descobrem o problema/necessidade
   - consideração: processo de avaliação de soluções
   - decisão: fatores decisivos na escolha
   - pós-compra: experiência de uso e fidelização

2. **touchpoints críticos**:
   - pontos de contato em cada estágio
   - canais de interação preferidos
   - momentos de verdade identificados

3. **pain points e friction**:
   - obstáculos em cada etapa
   - pontos de abandono mais comuns
   - frustrações relatadas pelos clientes

4. **oportunidades de melhoria**:
   - quick wins para cada estágio
   - melhorias de médio e longo prazo
   - impacto esperado de cada otimização

5. **personalização**:
   - pontos onde personalizar a experiência
   - dados necessários para personalização
   - tecnologias recomendadas

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Target,
      color: "text-blue-400"
    },
    {
      id: 7,
      title: "7. Segmentação avançada de público",
      description: "Cria personas detalhadas e segmentos de mercado baseados nos dados coletados",
      category: "segmentação",
      difficulty: "intermediário",
      rating: 4.8,
      illustration: audienceSegmentationImg,
      prompt: `Com base nos dados desta pesquisa, crie uma segmentação completa do público:

1. **personas principais** (3-4 personas):
   - demografia detalhada
   - comportamentos e preferências
   - motivações e objetivos
   - canais de comunicação preferidos

2. **matriz de segmentação**:
   - critérios de segmentação utilizados
   - tamanho estimado de cada segmento
   - potencial de valor de cada grupo

3. **características comportamentais**:
   - padrões de compra identificados
   - sensibilidade a preço
   - fatores de decisão mais importantes

4. **estratégias de targeting**:
   - abordagem específica para cada segmento
   - mensagens-chave personalizadas
   - canais de comunicação recomendados

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Users,
      color: "text-purple-400"
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
      case "iniciante": return "bg-green-500/20 text-green-400";
      case "intermediário": return "bg-yellow-500/20 text-yellow-400";
      case "avançado": return "bg-red-500/20 text-red-400";
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
              {/* Illustration */}
              <div className="absolute -top-6 right-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200/50">
                  <img 
                    src={prompt.illustration} 
                    alt={prompt.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex items-start justify-between pr-24">
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