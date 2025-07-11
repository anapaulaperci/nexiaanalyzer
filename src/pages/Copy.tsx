import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Copy as CopyIcon, Sparkles, Bot } from "lucide-react";

const Copy = () => {
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
              <CopyIcon className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Copy & Criação de Anúncios
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Domine as técnicas de copy e criação de anúncios eficazes
            </p>
          </div>
        </div>

        {/* IA para Copy Section */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Bot className="w-6 h-6 text-primary" />
              🤖 Como Usar IA para Criar Anúncios de Alta Conversão com Frameworks de Copy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Introdução sempre visível */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Introdução: Por que Combinar IA com Frameworks de Copy?</h3>
              <p className="text-muted-foreground">
                A inteligência artificial revolucionou a criação de conteúdo, mas sem estrutura, pode gerar textos genéricos. Ao combinar IA com frameworks comprovados de copywriting, você consegue:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="font-medium">Velocidade:</span>
                    <span className="text-muted-foreground">Criar múltiplas versões em minutos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="font-medium">Consistência:</span>
                    <span className="text-muted-foreground">Manter a estrutura persuasiva em todos os anúncios</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="font-medium">Personalização:</span>
                    <span className="text-muted-foreground">Adaptar mensagens para diferentes públicos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span className="font-medium">Testes A/B:</span>
                    <span className="text-muted-foreground">Gerar variações para otimizar resultados</span>
                  </div>
                </div>
              </div>
            </div>

            <Accordion type="single" collapsible className="w-full">

              <AccordionItem value="aida">
                <AccordionTrigger className="text-lg font-semibold">
                  1. AIDA (Atenção, Interesse, Desejo, Ação)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    O framework mais clássico e amplamente usado do copywriting, que guia o leitor desde o primeiro contato até a ação final.
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-blue-800 font-medium">
                      AIDA cria uma jornada psicológica que leva o leitor de "nem sabia que existia" para "preciso disso agora".
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt Avançado:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt AIDA Completo:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Crie um anúncio usando AIDA para [produto/serviço]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-amber-700 font-bold mb-2">ATENÇÃO (3 segundos para parar o scroll):</p>
                            <p>- Use poder words, números específicos ou perguntas provocativas</p>
                            <p>- Foque em uma dor urgente ou desejo intenso</p>
                            <p>- Máximo 40 caracteres para headlines</p>
                          </div>
                          
                          <div>
                            <p className="text-blue-700 font-bold mb-2">INTERESSE (mantenha-os lendo):</p>
                            <p>- Conecte com uma história ou estatística surpreendente</p>
                            <p>- Use o princípio do "open loop" (curiosidade)</p>
                            <p>- Fale diretamente com o momento de vida deles</p>
                          </div>
                          
                          <div>
                            <p className="text-purple-700 font-bold mb-2">DESEJO (faça-os querer):</p>
                            <p>- Pinte o futuro transformado após usar seu produto</p>
                            <p>- Use benefícios emocionais, não apenas funcionais</p>
                            <p>- Inclua prova social sutil</p>
                          </div>
                          
                          <div>
                            <p className="text-red-700 font-bold mb-2">AÇÃO (remova todas as fricções):</p>
                            <p>- CTA ultra-específica (não apenas 'saiba mais')</p>
                            <p>- Adicione urgência real (não falsa escassez)</p>
                            <p>- Ofereça garantia de risco zero"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pas">
                <AccordionTrigger className="text-lg font-semibold">
                  2. PAS (Problema, Agitação, Solução)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Framework altamente efetivo para produtos que resolvem dores específicas. Cria uma narrativa emocional poderosa.
                  </p>
                  
                  <div className="bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-red-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-red-800 font-medium">
                      PAS faz as pessoas desejarem desesperadamente a solução ao amplificar a consciência do problema.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt Psicológico:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt PAS Emocional:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Crie copy PAS para [produto] focado em [problema específico]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-red-700 font-bold mb-2">PROBLEMA (identifique a ferida):</p>
                            <p>- Descreva um momento específico de frustração</p>
                            <p>- Use linguagem sensorial (o que veem/sentem/ouvem)</p>
                            <p>- Seja ultra-específico, não genérico</p>
                          </div>
                          
                          <div>
                            <p className="text-orange-700 font-bold mb-2">AGITAÇÃO (adicione sal na ferida):</p>
                            <p>- Mostre as consequências de não resolver</p>
                            <p>- Liste os custos ocultos (tempo, dinheiro, oportunidades)</p>
                            <p>- Use o "efeito dominó" - como piora com o tempo</p>
                            <p>- Inclua custos emocionais e sociais</p>
                          </div>
                          
                          <div>
                            <p className="text-green-700 font-bold mb-2">SOLUÇÃO (seja o herói):</p>
                            <p>- Apresente como a única saída lógica</p>
                            <p>- Mostre rapidez e facilidade</p>
                            <p>- Inclua transformação, não apenas resolução</p>
                            <p>- Feche com CTA de alívio imediato"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bab">
                <AccordionTrigger className="text-lg font-semibold">
                  3. BAB (Before-After-Bridge)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Framework que mostra a transformação que seu produto proporciona, criando um contraste poderoso.
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 border-l-4 border-purple-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-purple-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-purple-800 font-medium">
                      Pessoas compram transformações, não produtos. BAB torna a mudança tangível e desejável.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt Transformacional:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt BAB Visual:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Crie copy BAB para [produto] com foco em transformação:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-red-700 font-bold mb-2">BEFORE (pinte o presente doloroso):</p>
                            <p>- Dia típico COM o problema</p>
                            <p>- Sentimentos e frustrações específicas</p>
                            <p>- Limitações que enfrentam agora</p>
                            <p>- Use detalhes sensoriais vívidos</p>
                          </div>
                          
                          <div>
                            <p className="text-green-700 font-bold mb-2">AFTER (pinte o futuro desejado):</p>
                            <p>- Dia típico SEM o problema</p>
                            <p>- Novos sentimentos e capacidades</p>
                            <p>- Portas que se abrem</p>
                            <p>- Contraste máximo com o 'before'</p>
                          </div>
                          
                          <div>
                            <p className="text-blue-700 font-bold mb-2">BRIDGE (seu produto como a ponte):</p>
                            <p>- Como especificamente leva do before ao after</p>
                            <p>- Simplicidade do processo</p>
                            <p>- Velocidade da transformação</p>
                            <p>- Garantias e segurança</p>
                            <p>- CTA como 'primeiro passo da ponte'"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fab">
                <AccordionTrigger className="text-lg font-semibold">
                  4. FAB (Features, Advantages, Benefits)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Framework que traduz características técnicas em valor real para o cliente.
                  </p>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-orange-800 font-medium">
                      FAB conecta o "o que é" com "o que significa para MIM", criando relevância pessoal.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt de Tradução de Valor:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt FAB Estratégico:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Transforme features em benefits usando FAB para [produto]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-blue-700 font-bold mb-2">FEATURES (o que é):</p>
                            <p>- Liste 3 características únicas</p>
                            <p>- Seja técnico e específico</p>
                            <p>- Inclua números/especificações</p>
                          </div>
                          
                          <div>
                            <p className="text-amber-700 font-bold mb-2">ADVANTAGES (como funciona melhor):</p>
                            <p>- Para cada feature, explique a vantagem competitiva</p>
                            <p>- Compare com alternativas do mercado</p>
                            <p>- Use "isso significa que..."</p>
                          </div>
                          
                          <div>
                            <p className="text-green-700 font-bold mb-2">BENEFITS (o que EU ganho):</p>
                            <p>- Traduza cada advantage em ganho pessoal</p>
                            <p>- Use "para que você possa..."</p>
                            <p>- Foque em economia de tempo/dinheiro</p>
                            <p>- Inclua benefícios emocionais e sociais</p>
                            <p>- Termine com o benefício mais transformador"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="four-us">
                <AccordionTrigger className="text-lg font-semibold">
                  5. Os 4 U's (Urgent, Unique, Useful, Ultra-specific)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Desenvolvido por Michael Masterson, esse framework é especialmente poderoso para headlines e subject lines.
                  </p>
                  
                  <div className="bg-gradient-to-r from-cyan-50 to-teal-50 border-l-4 border-cyan-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-cyan-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-cyan-800 font-medium">
                      Combina gatilhos psicológicos múltiplos em uma única mensagem irresistível.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt para Headlines Matadoras:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt 4 U's Headlines:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Crie 5 headlines usando os 4 U's para [produto/serviço]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-red-700 font-bold mb-2">URGENT (crie pressão temporal):</p>
                            <p>- Use deadlines reais</p>
                            <p>- Mostre o custo de esperar</p>
                            <p>- "Antes que..." / "Últimas X vagas"</p>
                          </div>
                          
                          <div>
                            <p className="text-purple-700 font-bold mb-2">UNIQUE (destaque o diferencial):</p>
                            <p>- O que APENAS você oferece</p>
                            <p>- Contradiga expectativas comuns</p>
                            <p>- Use ângulos contraintuitivos</p>
                          </div>
                          
                          <div>
                            <p className="text-blue-700 font-bold mb-2">USEFUL (prometa valor claro):</p>
                            <p>- Benefício principal em 5 palavras</p>
                            <p>- Resultado mensurável</p>
                            <p>- Solução para dor específica</p>
                          </div>
                          
                          <div>
                            <p className="text-amber-700 font-bold mb-2">ULTRA-SPECIFIC (seja preciso):</p>
                            <p>- Números exatos, não arredondados</p>
                            <p>- Timeframes específicos</p>
                            <p>- Detalhes que geram credibilidade</p>
                            <p>- Evite vagueza a todo custo"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="quest">
                <AccordionTrigger className="text-lg font-semibold">
                  6. QUEST (Qualify, Understand, Educate, Stimulate, Transition)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Framework de 5 passos que guia o leitor através de uma jornada psicológica completa.
                  </p>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border-l-4 border-indigo-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-indigo-800 font-medium">
                      QUEST é especialmente eficaz quando há educação envolvida ou quando o prospect não está totalmente ciente do problema.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt de Jornada Completa:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt QUEST Persuasivo:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Crie copy longo usando QUEST para [produto complexo]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-blue-700 font-bold mb-2">QUALIFY (filtre os certos):</p>
                            <p>- Pergunta ou declaração que identifica o público ideal</p>
                            <p>- "Se você..." / "Para profissionais que..."</p>
                            <p>- Exclua quem NÃO é ideal</p>
                          </div>
                          
                          <div>
                            <p className="text-green-700 font-bold mb-2">UNDERSTAND (mostre empatia profunda):</p>
                            <p>- Descreva exatamente como se sentem</p>
                            <p>- Use as palavras que eles usariam</p>
                            <p>- "Eu sei como é frustrante quando..."</p>
                            <p>- Valide suas preocupações</p>
                          </div>
                          
                          <div>
                            <p className="text-amber-700 font-bold mb-2">EDUCATE (ensine a solução):</p>
                            <p>- Explique POR QUE seu método funciona</p>
                            <p>- Use analogias simples</p>
                            <p>- Quebre mitos comuns</p>
                            <p>- Apresente como "descoberta", não venda</p>
                          </div>
                          
                          <div>
                            <p className="text-red-700 font-bold mb-2">STIMULATE (crie desejo ardente):</p>
                            <p>- Casos de sucesso vívidos</p>
                            <p>- Visualização do futuro</p>
                            <p>- Escassez/urgência real</p>
                            <p>- Bônus irresistíveis</p>
                          </div>
                          
                          <div>
                            <p className="text-purple-700 font-bold mb-2">TRANSITION (torne a ação inevitável):</p>
                            <p>- Resuma a oferta completa</p>
                            <p>- Garantias poderosas</p>
                            <p>- CTA como próximo passo lógico</p>
                            <p>- P.S. com benefício extra surpresa"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="oath">
                <AccordionTrigger className="text-lg font-semibold">
                  7. OATH (Oblivious, Apathetic, Thinking, Hurting)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Framework que segmenta sua audiência baseado no nível de consciência do problema.
                  </p>
                  
                  <div className="bg-gradient-to-r from-emerald-50 to-green-50 border-l-4 border-emerald-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-emerald-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-emerald-800 font-medium">
                      Permite criar mensagens precisas para cada estágio de consciência, aumentando drasticamente a conversão.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt de Segmentação:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt OATH Segmentado:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Crie 4 versões de copy para [produto], uma para cada nível OATH:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-gray-700 font-bold mb-2">OBLIVIOUS (não sabem que têm problema):</p>
                            <p>- Eduque sobre o problema oculto</p>
                            <p>- Use "Você sabia que..."</p>
                            <p>- Estatísticas reveladoras</p>
                            <p>- Crie consciência, não venda ainda</p>
                          </div>
                          
                          <div>
                            <p className="text-orange-700 font-bold mb-2">APATHETIC (sabem mas não se importam):</p>
                            <p>- Mostre o custo de não agir</p>
                            <p>- "Enquanto você ignora isso..."</p>
                            <p>- Casos de quem esperou demais</p>
                            <p>- Crie urgência emocional</p>
                          </div>
                          
                          <div>
                            <p className="text-blue-700 font-bold mb-2">THINKING (considerando opções):</p>
                            <p>- Compare com alternativas</p>
                            <p>- Mostre por que você é superior</p>
                            <p>- Depoimentos de quem escolheu você</p>
                            <p>- Remova objeções comuns</p>
                          </div>
                          
                          <div>
                            <p className="text-red-700 font-bold mb-2">HURTING (desesperados por solução):</p>
                            <p>- Vá direto ao ponto</p>
                            <p>- Solução rápida e garantida</p>
                            <p>- Comece com a oferta</p>
                            <p>- CTA imediata e clara"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="storybrand">
                <AccordionTrigger className="text-lg font-semibold">
                  8. StoryBrand (Framework Narrativo Expandido)
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Transforma sua marca em um guia sábio na jornada do herói (seu cliente).
                  </p>
                  
                  <div className="bg-gradient-to-r from-pink-50 to-rose-50 border-l-4 border-pink-500 rounded-lg p-6 shadow-sm">
                    <h4 className="font-bold text-pink-900 mb-3 flex items-center gap-2">
                      <span className="text-xl">💡</span>
                      Por que funciona:
                    </h4>
                    <p className="text-pink-800 font-medium">
                      Humanos são programados para prestar atenção em histórias. StoryBrand usa essa programação a seu favor.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Como usar com IA - Prompt Narrativo Completo:</h4>
                    
                    <div className="bg-muted/30 rounded-lg p-6 border">
                      <h5 className="font-bold mb-4 text-primary">Prompt StoryBrand Épico:</h5>
                      <div className="bg-muted/20 border rounded-lg p-4 text-foreground font-mono text-sm">
                        <p className="mb-4">"Crie uma narrativa completa usando StoryBrand para [marca]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-blue-700 font-bold mb-2">HERÓI (seu cliente):</p>
                            <p>- Nome e situação específica</p>
                            <p>- Desejo profundo (externo e interno)</p>
                            <p>- O que o impede de dormir à noite</p>
                          </div>
                          
                          <div>
                            <p className="text-red-700 font-bold mb-2">PROBLEMA (3 níveis):</p>
                            <p>- Externo: Problema prático/visível</p>
                            <p>- Interno: Como se sente sobre isso</p>
                            <p>- Filosófico: Por que é injusto/errado</p>
                          </div>
                          
                          <div>
                            <p className="text-purple-700 font-bold mb-2">MENTOR (sua marca):</p>
                            <p>- Demonstre empatia ("Eu entendo...")</p>
                            <p>- Mostre autoridade (sem arrogância)</p>
                            <p>- Sua experiência relevante</p>
                          </div>
                          
                          <div>
                            <p className="text-amber-700 font-bold mb-2">PLANO (simples e claro):</p>
                            <p>- 3 passos máximo</p>
                            <p>- Nomeie cada passo</p>
                            <p>- Torne ridiculamente fácil</p>
                          </div>
                          
                          <div>
                            <p className="text-green-700 font-bold mb-2">CONVITE À AÇÃO:</p>
                            <p>- CTA direta: O que fazer AGORA</p>
                            <p>- CTA transitória: Opção mais suave</p>
                          </div>
                          
                          <div>
                            <p className="text-orange-700 font-bold mb-2">FRACASSO (o que evitar):</p>
                            <p>- 3 consequências de não agir</p>
                            <p>- Pinte o cenário sombrio</p>
                            <p>- Use medo de perda</p>
                          </div>
                          
                          <div>
                            <p className="text-cyan-700 font-bold mb-2">SUCESSO (a terra prometida):</p>
                            <p>- Visão específica do futuro</p>
                            <p>- Como a vida será diferente</p>
                            <p>- Status, realização, transformação</p>
                            <p>- Final feliz garantido"</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Copy Bank Section */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <CopyIcon className="w-6 h-6 text-primary" />
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
      </div>
    </div>
  );
};

export default Copy;