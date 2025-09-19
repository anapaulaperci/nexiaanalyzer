import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Copy, Search, MessageSquare, Target, Users, TrendingUp, Heart, Star, Rocket, Brain, Crown, Bot } from "lucide-react";
import { useState, useEffect } from "react";

// Import das ilustrações
import sentimentAnalysisImg from "@/assets/sentiment-analysis.png";
import audienceSegmentationImg from "@/assets/audience-segmentation.png";
import campaignGenerationImg from "@/assets/campaign-generation.png";
import customerJourneyImg from "@/assets/customer-journey.png";
import competitiveAnalysisImg from "@/assets/competitive-analysis.png";
import hiddenInsightsImg from "@/assets/hidden-insights.png";
import brandArchetypeImg from "@/assets/brand-archetype.png";

// Import das ilustrações realistas dos frameworks de copy
import aiAidaImg from "@/assets/ai-aida-realistic.png";
import aiPasImg from "@/assets/ai-pas-realistic.png";
import aiBabImg from "@/assets/ai-bab-realistic.png";
import aiFabImg from "@/assets/ai-fab-realistic.png";
import ai4usImg from "@/assets/ai-4us-realistic.png";
import aiQuestImg from "@/assets/ai-quest-realistic.png";
import aiOathImg from "@/assets/ai-oath-realistic.png";
import aiStorybrandImg from "@/assets/ai-storybrand-realistic.png";
import aiDashboardImg from "@/assets/ai-dashboard-realistic.png";

const Prompts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Scroll automático para o prompt específico quando vem de um hash
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, []);

  const prompts = [
    {
      id: 1,
      title: "01. Análise de Insights Ocultos",
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
      id: 2,
      title: "02. Análise Competitiva",
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
      id: 3,
      title: "03. Análise de Sentimento",
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
      id: 4,
      title: "04. Arquétipo de Marca",
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
      title: "05. Geração de Campanhas",
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
      title: "06. Jornada do Cliente",
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
      title: "07. Segmentação de Audiência",
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
    },
    {
      id: 8,
      title: "8. Especialista em Criação de Hooks Psicológicos",
      description: "Cria hooks irresistíveis que capturam atenção instantaneamente usando neurociência cognitiva e gatilhos psicológicos",
      category: "copywriting",
      difficulty: "avançado",
      rating: 4.9,
      illustration: competitiveAnalysisImg, // Usando uma imagem existente temporariamente
      prompt: `PROMPT: Especialista em Criação de Hooks Psicológicos

Você é um especialista em psicologia aplicada ao marketing e copywriting, com 15 anos de experiência criando hooks que capturam atenção instantaneamente. Sua expertise combina neurociência cognitiva, análise comportamental e storytelling persuasivo. Você domina os gatilhos psicológicos que fazem o cérebro humano parar, prestar atenção e desejar saber mais.

SEUS CONHECIMENTOS FUNDAMENTAIS
Você domina os 7 Princípios Psicológicos dos Hooks Matadores:

1. Novidade e Efeito Bizarro: O cérebro é programado para notar o que é diferente. Hooks com elementos inesperados ativam o sistema de recompensa dopaminérgico.
2. Credibilidade Numérica: Números específicos criam ancoragem cognitiva. Ex: "87% dos freelancers aumentaram sua renda em 2023".
3. Lacunas de Curiosidade: Criar loops abertos que o cérebro precisa fechar. Revelar parcialmente informações gera desconforto cognitivo.
4. FOMO (Fear of Missing Out): Explorar o medo de exclusão e perda. Urgência e exclusividade ativam o sistema límbico.
5. Conexão Emocional: Histórias pessoais ativam neurônios-espelho, criando empatia instantânea.
6. Pensamento Contrário: Desafiar crenças estabelecidas posiciona como autoridade.
7. Promessas de Transformação: O cérebro se atrai por possibilidades de melhoria.

SUA TAREFA
Quando eu fornecer dados de pesquisa sobre um público-alvo, você deve:

1. ANALISAR OS DADOS
- Extrair informações demográficas e psicográficas
- Identificar as 3 principais dores/problemas
- Mapear os 3 maiores desejos/objetivos
- Detectar gatilhos emocionais recorrentes
- Identificar linguagem e contexto de consumo

2. CRIAR HOOKS ESTRATÉGICOS
Para cada hook, você deve:
- Selecionar 2-3 gatilhos psicológicos apropriados
- Adaptar o tom à plataforma (LinkedIn, Instagram, Email, etc.)
- Garantir que pare o scroll em 1-3 segundos
- Criar curiosidade irresistível
- Prometer valor claro e específico

3. ENTREGAR 10 HOOKS VARIADOS
Organize sua resposta assim:

ANÁLISE DOS DADOS:
[Resumo dos insights principais da pesquisa]

HOOKS CRIADOS:
Hook 1: [Tipo de Gatilho]
"[O hook em si]"
Psicologia aplicada: [Explicação breve de por que funciona]

Hook 2: [Tipo de Gatilho]
"[O hook em si]"
Psicologia aplicada: [Explicação breve de por que funciona]

[Continue até 10 hooks]

RECOMENDAÇÕES DE USO:
[Sugestões de qual hook usar em qual situação/plataforma]

EXEMPLOS DE TEMPLATES QUE VOCÊ PODE ADAPTAR

Curiosity Gap:
- "A técnica que [resultado] em [tempo] (o #3 vai te surpreender)"
- "Por que [grupo] está [ação inesperada]?"

Estatística Chocante:
- "[Número]% das pessoas que [ação] cometem este erro"
- "Dados revelam: [estatística] sobre [tópico]"

FOMO/Urgência:
- "Apenas [número] pessoas sabem este segredo sobre [tópico]"
- "[Tempo] para descobrir o que separa [sucesso] de [fracasso]"

História Pessoal:
- "O dia que [evento] me ensinou [lição valiosa]"
- "Perdi [algo valioso] até descobrir [insight]"

Contrarian:
- "Pare de [conselho comum]. Faça isto instead"
- "[Crença popular] é mentira. A verdade é..."

IMPORTANTE
- SEMPRE baseie os hooks nos dados fornecidos
- NUNCA crie clickbait vazio
- ADAPTE linguagem e tom ao público identificado
- EXPLIQUE a psicologia por trás de cada escolha
- VARIE os gatilhos psicológicos usados

Agora, forneça os dados da pesquisa para eu analisar e criar seus hooks psicológicos personalizados.

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Brain,
      color: "text-pink-400"
    },
    // PROMPTS DE ESTRUTURAS DE COPY
    {
      id: "aida",
      title: "08. AIDA - Atenção, Interesse, Desejo, Ação",
      description: "Framework clássico do copywriting que guia o leitor desde o primeiro contato até a ação final",
      category: "copy",
      difficulty: "iniciante", 
      rating: 4.9,
      illustration: aiAidaImg,
      prompt: `Crie um anúncio usando AIDA para [produto/serviço]:

ATENÇÃO (3 segundos para parar o scroll):
- Use poder words, números específicos ou perguntas provocativas
- Foque em uma dor urgente ou desejo intenso
- Máximo 40 caracteres para headlines

INTERESSE (mantenha-os lendo):
- Conecte com uma história ou estatística surpreendente
- Use o princípio do "open loop" (curiosidade)
- Fale diretamente com o momento de vida deles

DESEJO (faça-os querer):
- Pinte o futuro transformado após usar seu produto
- Use benefícios emocionais, não apenas funcionais
- Inclua prova social sutil

AÇÃO (remova todas as fricções):
- CTA ultra-específica (não apenas 'saiba mais')
- Adicione urgência real (não falsa escassez)
- Ofereça garantia de risco zero

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Target,
      color: "text-blue-600"
    },
    {
      id: "pas",
      title: "09. PAS - Problema, Agitação, Solução", 
      description: "Framework altamente efetivo para produtos que resolvem dores específicas",
      category: "copy",
      difficulty: "intermediário",
      rating: 4.8,
      illustration: aiPasImg,
      prompt: `Crie copy PAS para [produto] focado em [problema específico]:

PROBLEMA (identifique a ferida):
- Descreva um momento específico de frustração
- Use linguagem sensorial (o que veem/sentem/ouvem)
- Seja ultra-específico, não genérico

AGITAÇÃO (adicione sal na ferida):
- Mostre as consequências de não resolver
- Liste os custos ocultos (tempo, dinheiro, oportunidades)
- Use o "efeito dominó" - como piora com o tempo
- Inclua custos emocionais e sociais

SOLUÇÃO (seja o herói):
- Apresente como a única saída lógica
- Mostre rapidez e facilidade
- Inclua transformação, não apenas resolução
- Feche com CTA de alívio imediato

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Heart,
      color: "text-red-600"
    },
    {
      id: "bab",
      title: "10. BAB - Before-After-Bridge",
      description: "Framework que mostra a transformação que seu produto proporciona",
      category: "copy", 
      difficulty: "intermediário",
      rating: 4.7,
      illustration: aiBabImg,
      prompt: `Crie copy BAB para [produto] com foco em transformação:

BEFORE (pinte o presente doloroso):
- Dia típico COM o problema
- Sentimentos e frustrações específicas
- Limitações que enfrentam agora
- Use detalhes sensoriais vívidos

AFTER (pinte o futuro desejado):
- Dia típico SEM o problema
- Novos sentimentos e capacidades
- Portas que se abrem
- Contraste máximo com o 'before'

BRIDGE (seu produto como a ponte):
- Como especificamente leva do before ao after
- Simplicidade do processo
- Velocidade da transformação
- Garantias e segurança
- CTA como 'primeiro passo da ponte'

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      id: "fab",
      title: "11. FAB - Features, Advantages, Benefits",
      description: "Framework que traduz características técnicas em valor real para o cliente",
      category: "copy",
      difficulty: "iniciante",
      rating: 4.6,
      illustration: aiFabImg,
      prompt: `Transforme features em benefits usando FAB para [produto]:

FEATURES (o que é):
- Liste 3 características únicas
- Seja técnico e específico
- Inclua números/especificações

ADVANTAGES (como funciona melhor):
- Para cada feature, explique a vantagem competitiva
- Compare com alternativas do mercado
- Use "isso significa que..."

BENEFITS (o que EU ganho):
- Traduza cada advantage em ganho pessoal
- Use "para que você possa..."
- Foque em economia de tempo/dinheiro
- Inclua benefícios emocionais e sociais
- Termine com o benefício mais transformador

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Users,
      color: "text-orange-600"
    },
    {
      id: "4us",
      title: "12. 4 U's - Urgent, Unique, Useful, Ultra-specific",
      description: "Framework desenvolvido por Michael Masterson, poderoso para headlines e subject lines",
      category: "copy",
      difficulty: "avançado",
      rating: 4.8,
      illustration: ai4usImg,
      prompt: `Crie 5 headlines usando os 4 U's para [produto/serviço]:

URGENT (crie pressão temporal):
- Use deadlines reais
- Mostre o custo de esperar
- "Antes que..." / "Últimas X vagas"

UNIQUE (destaque o diferencial):
- O que APENAS você oferece
- Contradiga expectativas comuns
- Use ângulos contraintuitivos

USEFUL (prometa valor claro):
- Benefício principal em 5 palavras
- Resultado mensurável
- Solução para dor específica

ULTRA-SPECIFIC (seja preciso):
- Números exatos, não arredondados
- Timeframes específicos
- Detalhes que geram credibilidade
- Evite vagueza a todo custo

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Rocket,
      color: "text-cyan-600"
    },
    {
      id: "quest",
      title: "13. QUEST - Qualify, Understand, Educate, Stimulate, Transition",
      description: "Framework de 5 passos que guia através de uma jornada psicológica completa",
      category: "copy",
      difficulty: "avançado", 
      rating: 4.7,
      illustration: aiQuestImg,
      prompt: `Crie copy longo usando QUEST para [produto complexo]:

QUALIFY (filtre os certos):
- Pergunta ou declaração que identifica o público ideal
- "Se você..." / "Para profissionais que..."
- Exclua quem NÃO é ideal

UNDERSTAND (mostre empatia profunda):
- Descreva exatamente como se sentem
- Use as palavras que eles usariam
- "Eu sei como é frustrante quando..."
- Valide suas preocupações

EDUCATE (ensine a solução):
- Explique POR QUE seu método funciona
- Use analogias simples
- Quebre mitos comuns
- Apresente como "descoberta", não venda

STIMULATE (crie desejo ardente):
- Casos de sucesso vívidos
- Visualização do futuro
- Escassez/urgência real
- Bônus irresistíveis

TRANSITION (torne a ação inevitável):
- Resuma a oferta completa
- Garantias poderosas
- CTA como próximo passo lógico
- P.S. com benefício extra surpresa

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Brain,
      color: "text-indigo-600"
    },
    {
      id: "oath",
      title: "14. OATH - Oblivious, Apathetic, Thinking, Hurting",
      description: "Framework que segmenta audiência baseado no nível de consciência do problema",
      category: "copy",
      difficulty: "avançado",
      rating: 4.9,
      illustration: aiOathImg,
      prompt: `Crie 4 versões de copy para [produto], uma para cada nível OATH:

OBLIVIOUS (não sabem que têm problema):
- Eduque sobre o problema oculto
- Use "Você sabia que..."
- Estatísticas reveladoras
- Crie consciência, não venda ainda

APATHETIC (sabem mas não se importam):
- Mostre o custo de não agir
- "Enquanto você ignora isso..."
- Casos de quem esperou demais
- Crie urgência emocional

THINKING (considerando opções):
- Compare com alternativas
- Mostre por que você é superior
- Depoimentos de quem escolheu você
- Remova objeções comuns

HURTING (desesperados por solução):
- Vá direto ao ponto
- Solução rápida e garantida
- Comece com a oferta
- CTA imediata e clara

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Target,
      color: "text-emerald-600"
    },
    {
      id: "storybrand",
      title: "15. StoryBrand - Framework Narrativo Expandido",
      description: "Transforma sua marca em um guia sábio na jornada do herói (seu cliente)",
      category: "copy",
      difficulty: "avançado",
      rating: 4.8,
      illustration: aiStorybrandImg,
      prompt: `Crie uma narrativa completa usando StoryBrand para [marca]:

HERÓI (seu cliente):
- Nome e situação específica
- Desejo profundo (externo e interno)
- O que o impede de dormir à noite

PROBLEMA (3 níveis):
- Externo: Problema prático/visível
- Interno: Como se sente sobre isso
- Filosófico: Por que é injusto/errado

MENTOR (sua marca):
- Demonstre empatia ("Eu entendo...")
- Mostre autoridade (sem arrogância)
- Sua experiência relevante

PLANO (simples e claro):
- 3 passos máximo
- Nomeie cada passo
- Torne ridiculamente fácil

CONVITE À AÇÃO:
- CTA direta: O que fazer AGORA
- CTA transitória: Opção mais suave

FRACASSO (o que evitar):
- 3 consequências de não agir
- Pinte o cenário sombrio
- Use medo de perda

SUCESSO (a terra prometida):
- Visão específica do futuro
- Como a vida será diferente
- Status, realização, transformação
- Final feliz garantido

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: Crown,
      color: "text-pink-600"
    },
    {
      id: 16,
      title: "16. Dashboard - Versão Otimizada",
      description: "Cria dashboards modernos e interativos com especificações técnicas detalhadas de design e funcionalidade",
      category: "dashboard",
      difficulty: "avançado",
      rating: 4.9,
      illustration: aiDashboardImg,
      prompt: `Crie um dashboard moderno e interativo baseado nos dados de persona fornecidos.

### ESTRUTURA OBRIGATÓRIA:

**Menu superior horizontal com navegação entre seções:**
- Home/Visão Geral
- Métricas
- Relatórios
- Configurações
- Navegação breadcrumb
- Avatar do usuário e notificações

**Cards de métricas principais (4-6 indicadores):**
- KPIs principais do negócio
- Comparação com período anterior
- Indicadores de crescimento
- Alertas de performance
- Métricas de conversão
- ROI e receita

**Gráficos de evolução temporal e distribuição:**
- Gráfico de linha para tendências
- Gráfico de barras para comparações
- Gráfico de pizza para distribuições
- Heatmap para padrões
- Gráfico de área para volumes
- Indicadores de performance em tempo real

**Tabela resumida com dados relevantes:**
- Top performers
- Últimas atividades
- Dados de conversão
- Segmentação de usuários
- Paginação e filtros
- Ações rápidas

### ESPECIFICAÇÕES DE DESIGN:

**Cores Obrigatórias:**
- Primária: #3B82F6 (Blue 500)
- Sucesso: #10B981 (Emerald 500)
- Erro: #EF4444 (Red 500)
- Warning: #F59E0B (Amber 500)
- Background: #F8FAFC (Slate 50)
- Cards: #FFFFFF com sombra suave

**Layout Responsivo:**
- Grid system flexível (CSS Grid + Flexbox)
- Breakpoints: mobile (320px), tablet (768px), desktop (1024px+)
- Cards empilháveis em mobile
- Sidebar colapsível em tablets
- Máximo 12 colunas no desktop

**Interações Obrigatórias:**
- Hover effects em todos os elementos clicáveis
- Tooltips informativos com dados detalhados
- Transições suaves (0.3s ease-in-out)
- Loading states para carregamento
- Estados de erro e feedback visual
- Micro-animações para ações

**Tipografia Sistema:**
- Font-family: system-ui, -apple-system, sans-serif
- Hierarquia clara: H1 (32px), H2 (24px), H3 (20px), Body (16px), Small (14px)
- Line-height: 1.5 para legibilidade
- Font-weight: Regular (400), Medium (500), Bold (700)

**Espaçamento Consistente:**
- Padding interno dos cards: 20-24px
- Margin entre elementos: 16px
- Grid gaps: 20px
- Padding do container principal: 32px
- Spacing scale: 4px, 8px, 16px, 20px, 24px, 32px

**Cards com Características Específicas:**
- Border-radius: 12px
- Box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)
- Border: 1px solid #E2E8F0
- Background: #FFFFFF
- Hover: transform: translateY(-2px) + shadow intensificada

### FUNCIONALIDADES ESPECÍFICAS:

**Filtros e Controles:**
- Seletor de período (7d, 30d, 90d, custom)
- Filtros por categoria/segmento
- Busca em tempo real
- Export de dados (CSV, PDF)
- Configurações de visualização
- Modo escuro/claro

**Responsividade Dashboard:**
- Mobile: Stack vertical, cards full-width
- Tablet: 2 colunas, navegação colapsível
- Desktop: 4 colunas, sidebar fixa
- Menu hambúrguer para mobile
- Gestos de swipe para navegação móvel

**Estados e Feedback:**
- Loading skeletons para carregamento
- Empty states com ilustrações
- Error states com ações de retry
- Success notifications
- Progress indicators
- Confirmações de ações destrutivas

### DADOS A INCLUIR:

**Métricas Baseadas na Persona:**
- Utilizar informações analisadas no chat
- Popular gráficos com dados coerentes
- Criar segmentações relevantes
- Incluir benchmarks do mercado
- Mostrar tendências históricas
- Adicionar previsões baseadas em IA

**Estrutura de Dados Sugerida:**
- Performance mensal/trimestral
- Segmentação demográfica
- Funil de conversão
- Análise de cohorts
- NPS e satisfação
- Receita e custos

### ENTREGÁVEIS:

1. **Wireframe Detalhado** com todas as seções
2. **Style Guide** com cores, tipografia e componentes
3. **Especificações Técnicas** para desenvolvimento
4. **Dados de Exemplo** populados com base na persona
5. **Guia de Responsividade** para todos os breakpoints
6. **Lista de Componentes Reutilizáveis** 

dados da pesquisa: [INSERIR DADOS AQUI]`,
      icon: TrendingUp,
      color: "text-purple-600"
    },
    {
      id: 17,
      title: "17. Criador de pesquisas",
      description: "Especialista em criar pesquisas baseadas na metodologia de Martin Lindstrom para revelar insights profundos e motivações ocultas",
      category: "pesquisa",
      difficulty: "avançado",
      rating: 4.9,
      illustration: audienceSegmentationImg,
      prompt: `Você é um especialista em pesquisa de mercado e psicologia do consumidor, treinado nas metodologias de Martin Lindstrom (autor de "A Lógica do Consumo" e especialista em Small Data). Você aprendeu que as melhores insights vêm não de big data, mas de observações íntimas e perguntas que revelam as emoções não-ditas dos consumidores. Sua missão é criar uma pesquisa de audiência estratégica que revele as dores profundas, desejos ocultos e motivações inconscientes do público-alvo, permitindo criar produtos e mensagens de venda irresistíveis.

CONTEXTO
Vou te fornecer informações sobre meu negócio/produto e você criará uma pesquisa completa e personalizada seguindo a estrutura abaixo.

INFORMAÇÕES QUE PRECISO DE VOCÊ:

Nicho/área de atuação: [INSERIR]
Produto/serviço que pretende vender: [INSERIR]
Público-alvo principal: [INSERIR]
Problema principal que resolve: [INSERIR]
Resultado/transformação que promete: [INSERIR]

ESTRUTURA DA PESQUISA QUE VOCÊ DEVE CRIAR:

1. DADOS DEMOGRÁFICOS (2-3 perguntas)
• Nome (cria conexão pessoal)
• Idade (em faixas: 18-25, 25-30, 31-44, 45-54, 55-64, +64)
• Profissão (pergunta aberta)

2. QUALIFICAÇÃO FINANCEIRA INDIRETA (3-4 perguntas)
Você pode perguntar diretamente da renda ou pergunte usando abordagens como: 
• "Você já investiu em [tipo de solução] antes?"
• Se sim: "Qual foi o valor do investimento?" (em faixas)
• Se não: "O que te impediu?" (revelar objeções)
• "Quanto estaria disposto a investir para [resultado específico]?"
• "Nos próximos 3 meses, você planeja investir em [área]?"
• "O que já tentou?" (com opções de gratuito até premium)

3. SONHOS E ASPIRAÇÕES (2-3 perguntas abertas)
• Maior sonho relacionado ao tema
• Como seria a vida após resolver o problema
• O que deseja alcançar em 12 meses

4. MEDOS E FRUSTRAÇÕES (3 perguntas)
• Maior medo sobre [área]
• Área da vida que mais frustra (múltipla escolha)
• Principal dificuldade atual

5. HISTÓRICO DE TENTATIVAS (2-3 perguntas)
• Como tem lidado com o problema
• Por que soluções anteriores falharam
• O que impede de alcançar o objetivo

6. TRANSFORMAÇÃO DESEJADA (2 perguntas)
• O que precisaria mudar para se sentir [estado positivo]
• Como gostaria de estar ao final da jornada

7. PERGUNTA ESPECÍFICA DO NICHO (1-2 perguntas)
Personalize com base no contexto fornecido

8. GERAÇÃO DE CONTEÚDO (2 perguntas)
• "Se pudesse me fazer UMA pergunta, qual seria?"
• "Se a gente fosse tomar um café, que pergunta você me faria?"

DIRETRIZES PARA CRIAR AS PERGUNTAS:

Linguagem: Use o vocabulário do público-alvo, evite jargões
Tom: Conversacional e empático, como um amigo interessado
Tamanho: Máximo 15 perguntas totais (5-8 min para responder)
Formato: Mix de abertas (insights) e fechadas (análise)
Progressão: Comece com fáceis, aprofunde gradualmente
Emoção: Foque em sentimentos, não apenas fatos

EXTRAS QUE VOCÊ DEVE INCLUIR:

Introdução da Pesquisa:
Crie um texto de 3-4 linhas que:
• Explique o propósito
• Mostre o benefício para quem responde
• Mencione o incentivo (se houver)

`,
      icon: TrendingUp,
      color: "text-amber-700"
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

  const openChatGPT = () => {
    const link = document.createElement('a');
    link.href = 'https://chatgpt.com/g/g-68710a8784dc8191b5086d574f8309b7-nexia-analyzer';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
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
            id={prompt.id.toString()}
            className={`${prompt.id === 16 ? 'bg-amber-50/80 border-amber-200/50' : 'bg-card/50 border-border/50'} backdrop-blur-sm hover:border-primary/50 transition-all duration-300 hover:shadow-glow group scroll-mt-8`}
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Botão Use o nosso GPP - Centralizado e Maior */}
      <div className="flex justify-center items-center py-8">
        <Button 
          size="lg"
          className="bg-nexia-accent-500 hover:bg-nexia-accent-600 text-black font-bold text-xl px-12 py-6 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-4 rounded-2xl"
          onClick={openChatGPT}
        >
          <Bot className="w-8 h-8" />
          Use o nosso GPT
        </Button>
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