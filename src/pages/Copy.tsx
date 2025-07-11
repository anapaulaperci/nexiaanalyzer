import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Sparkles, BookOpen, Copy as CopyIcon, Target, Zap, TrendingUp, Users, BarChart3, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Copy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ✍️ Núcleo de Copy
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme seus anúncios em máquinas de conversão com frameworks comprovados e IA avançada
          </p>
        </div>

        {/* AI Copy Framework Guide */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <PenTool className="w-6 h-6 text-primary" />
              Como Usar IA para Criar Anúncios de Alta Conversão com Frameworks de Copy
            </CardTitle>
            <p className="text-muted-foreground">
              Os principais frameworks de copy para IA com prompts avançados e otimizados
            </p>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="introducao">
                <AccordionTrigger className="text-lg font-semibold">
                  Introdução: Por que Combinar IA com Frameworks de Copy?
                </AccordionTrigger>
                <AccordionContent className="space-y-4">
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
                </AccordionContent>
              </AccordionItem>

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
                      <div className="bg-muted/50 rounded-lg p-4 text-foreground font-mono text-sm border">
                        <p className="mb-4">"Crie um anúncio usando AIDA para [produto/serviço]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-primary font-bold mb-2">ATENÇÃO (3 segundos para parar o scroll):</p>
                            <p>- Use poder words, números específicos ou perguntas provocativas</p>
                            <p>- Foque em uma dor urgente ou desejo intenso</p>
                            <p>- Máximo 40 caracteres para headlines</p>
                          </div>
                          
                          <div>
                            <p className="text-primary font-bold mb-2">INTERESSE (mantenha-os lendo):</p>
                            <p>- Conecte com uma história ou estatística surpreendente</p>
                            <p>- Use o princípio do "open loop" (curiosidade)</p>
                            <p>- Fale diretamente com o momento de vida deles</p>
                          </div>
                          
                          <div>
                            <p className="text-primary font-bold mb-2">DESEJO (faça-os querer):</p>
                            <p>- Pinte o futuro transformado após usar seu produto</p>
                            <p>- Use benefícios emocionais, não apenas funcionais</p>
                            <p>- Inclua prova social sutil</p>
                          </div>
                          
                          <div>
                            <p className="text-primary font-bold mb-2">AÇÃO (remova todas as fricções):</p>
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
                      <div className="bg-muted/50 rounded-lg p-4 text-foreground font-mono text-sm border">
                        <p className="mb-4">"Crie copy PAS para [produto] focado em [problema específico]:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-primary font-bold mb-2">PROBLEMA (identifique a ferida):</p>
                            <p>- Descreva um momento específico de frustração</p>
                            <p>- Use linguagem sensorial (o que veem/sentem/ouvem)</p>
                            <p>- Seja ultra-específico, não genérico</p>
                          </div>
                          
                          <div>
                            <p className="text-primary font-bold mb-2">AGITAÇÃO (adicione sal na ferida):</p>
                            <p>- Mostre as consequências de não resolver</p>
                            <p>- Liste os custos ocultos (tempo, dinheiro, oportunidades)</p>
                            <p>- Use o "efeito dominó" - como piora com o tempo</p>
                            <p>- Inclua custos emocionais e sociais</p>
                          </div>
                          
                          <div>
                            <p className="text-primary font-bold mb-2">SOLUÇÃO (seja o herói):</p>
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
                  
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border-l-4 border-purple-500 rounded-lg p-6 shadow-sm">
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
                      <div className="bg-muted/50 rounded-lg p-4 text-foreground font-mono text-sm border">
                        <p className="mb-4">"Crie copy BAB para [produto] com foco em transformação:</p>
                        
                        <div className="space-y-4">
                          <div>
                            <p className="text-primary font-bold mb-2">BEFORE (pinte o presente doloroso):</p>
                            <p>- Dia típico COM o problema</p>
                            <p>- Sentimentos e frustrações específicas</p>
                            <p>- Limitações que enfrentam agora</p>
                            <p>- Use detalhes sensoriais vívidos</p>
                          </div>
                          
                          <div>
                            <p className="text-primary font-bold mb-2">AFTER (pinte o futuro desejado):</p>
                            <p>- Dia típico SEM o problema</p>
                            <p>- Novos sentimentos e capacidades</p>
                            <p>- Portas que se abrem</p>
                            <p>- Contraste máximo com o 'before'</p>
                          </div>
                          
                          <div>
                            <p className="text-primary font-bold mb-2">BRIDGE (seu produto como a ponte):</p>
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
                    <div><strong>Status:</strong> ✅ Ativa</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Copy Tools Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Copy Tools Recomendadas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold">ChatGPT/Claude</h4>
                  <p className="text-sm text-muted-foreground">IA avançada para copy criativa</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold">Copy.ai</h4>
                  <p className="text-sm text-muted-foreground">Templates especializados</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                  <h4 className="font-semibold">Jasper</h4>
                  <p className="text-sm text-muted-foreground">Copy para marketing</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Métricas de Copy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium">CTR (Click-Through Rate)</span>
                  <span className="text-primary font-bold">5.2%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium">Taxa de Conversão</span>
                  <span className="text-primary font-bold">2.8%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium">CPM Médio</span>
                  <span className="text-primary font-bold">R$ 12,50</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Copy;