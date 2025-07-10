import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy as CopyIcon, Sparkles } from "lucide-react";

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