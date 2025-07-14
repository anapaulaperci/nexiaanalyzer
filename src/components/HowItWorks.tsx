import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Brain, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: FileText,
    title: "1. Como criar uma boa pesquisa de persona",
    description: "Use nosso prompt especializado baseado na metodologia de Martin Lindstrom para criar pesquisas que revelam motivações ocultas",
    color: "text-blue-500"
  },
  {
    icon: Upload,
    title: "2. Faça Upload da Pesquisa",
    description: "Baixe a pesquisa de persona que você tem e faça o upload dela em uma inteligência artificial junto com a explicação base",
    color: "text-purple-500"
  },
  {
    icon: Brain,
    title: "3. Use os Prompts da Plataforma",
    description: "Peça uma análise com os modelos de prompts que nós fornecemos aqui na plataforma para gerar personas sintéticas precisas",
    color: "text-green-500"
  }
];

const HowItWorks = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-6 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Como Montar a Sua
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transforme dados brutos em personas sintéticas precisas em 3 passos simples
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card 
              key={index} 
              className="relative bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <step.icon className={`w-10 h-10 text-white`} />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>

                {index === 0 && (
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-sm"
                      onClick={() => navigate('/dashboard/prompts#17')}
                    >
                      Usar Prompt 17
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Frase de destaque */}
        <div className="text-center mb-12">
          <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/50 p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              💡 A pergunta que toda pesquisa precisa responder é:
            </h3>
            <p className="text-xl text-amber-700 font-semibold italic">
              "O que tira o sono do meu lead à noite?"
            </p>
          </Card>
        </div>

        {/* Recomendações de livros */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            📚 Livros Recomendados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  A Lógica do Consumo
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Martin Lindstrom revela as verdades e mentiras sobre por que compramos
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                >
                  <a 
                    href="https://www.amazon.com.br/l%C3%B3gica-consumo-Verdades-mentiras-compramos/dp/8595082669/ref=sr_1_1?crid=2O4K17G1B8V56&dib=eyJ2IjoiMSJ9.rUO6oBxAOZX6RLqAO4PWtUK4DfZ2Z-Co2yHFxS2vLLjh6Rx_8LQm2Bq-o2kuN0dUBWGPczL-JTvGJaT0QznBJsIIphFg0jtoxKt_PB0dhv4BwT089MDSR_S06_oQLJ32355I3IttKyT32lZlhdXuWrejsidmWWniboIaHffS_TDabEKPWiA-Ue1PaTMl-d1v697mm-AVuyC8eFKyojmDfoUnPaxVViTGLD0bTemIj8-bOzJ27ZvJeKevz5pXysVt7FgmkYUhmNjpXRM1NLbWu1LULKOVbvYFhm1-6ua4i3M.9UXrN1i3yUXljltz4Um91uure5P3ooIvE_Xq9xqaG3s&dib_tag=se&keywords=a+logica+do+consumo&qid=1752526348&sprefix=a+logica+do+consu%2Caps%2C231&sr=8-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver na Amazon
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold mb-3 text-foreground">
                  Small Data
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Pequenos Indicam que Grandes Tendências por Martin Lindstrom
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="w-full"
                >
                  <a 
                    href="https://www.amazon.com.br/Small-Data-Indicam-Grandes-Tend%C3%AAncias/dp/8569809719/ref=sr_1_1?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=138NU3ZAN0GE2&dib=eyJ2IjoiMSJ9.hwwE-7SZBQbtYkdWdJVWRDtSn1s-dDdj3CQqH9rdt1Twz0IMixLLdAkHEDPaczR0_8v7BjAokyYoyWC-ffAYD-dw6UC6Ip2Bx6l8X6YXjpLX48yHwNE5OpymP0l1C0ixbC2YW9joFcpzEM-bP3lx6_irW0ydEvpVJPqFfy2v0NsjYslEkyOqFrCCOCEwLFm3lGB9DVoNTLk3flc40uvVVc10TBEtFSRHfaIGnPalQOCCn2JS6s0qGEQqjQ0tqAy6qBn1CDEyn6hfdlV07FhVv2JxzgA8knk96oiI0-W6bSY.tojrSfFyjlV5ZK8Z43hU0CVyO6lKA0uMzV46ZawWV_I&dib_tag=se&keywords=small+data&qid=1752526378&sprefix=small+data%2Caps%2C230&sr=8-1&ufe=app_do%3Aamzn1.fos.6d798eae-cadf-45de-946a-f477d47705b9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver na Amazon
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA para prompts */}
        <div className="text-center">
          <Card className="bg-card/70 backdrop-blur-sm border border-primary/20 p-8 inline-block">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              Pronto para começar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Acesse nossa biblioteca de prompts especializados para análise de personas sintéticas
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-8 py-6 h-auto"
              onClick={() => navigate('/dashboard/prompts')}
            >
              Ver Prompts de Análise
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;