import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, Video, FileVideo } from "lucide-react";

const Tutorial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto p-6 space-y-12">
        {/* Header */}
        <div className="text-center space-y-6 pt-8">
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
              <Video className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Tutorial em Vídeo
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Aprenda como criar personas sintéticas de forma prática e eficiente
            </p>
          </div>
        </div>

        {/* Video Upload Area */}
        <Card className="bg-card/80 backdrop-blur-sm border-dashed border-2 border-border/50 hover:border-primary/50 transition-all duration-300">
          <CardContent className="p-12">
            <div className="text-center space-y-8">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-muted/50 rounded-2xl flex items-center justify-center">
                  <FileVideo className="w-12 h-12 text-muted-foreground" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Vídeo Tutorial</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Em breve: Vídeo explicativo completo sobre como usar a plataforma para criar suas personas sintéticas
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="shadow-glow hover-scale"
                  disabled
                >
                  <Upload className="w-5 h-5 mr-2" />
                  Upload do Vídeo (Em Breve)
                </Button>
                
                <p className="text-sm text-muted-foreground">
                  Formatos suportados: MP4, MOV, AVI (Máximo 100MB)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Placeholder for future video */}
        <Card className="bg-muted/20 border-border/30">
          <CardContent className="p-8 text-center">
            <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <Video className="w-8 h-8 text-primary" />
                </div>
                <p className="text-muted-foreground">
                  Área reservada para o vídeo tutorial
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tutorial;