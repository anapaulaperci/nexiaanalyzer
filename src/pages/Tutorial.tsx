import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Video, FileVideo, Youtube } from "lucide-react";
import { useState } from "react";

const Tutorial = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [embedUrl, setEmbedUrl] = useState("");

  const handleYoutubeUrl = (url: string) => {
    setYoutubeUrl(url);
    
    // Convert YouTube URL to embed format
    let videoId = "";
    if (url.includes("youtube.com/watch?v=")) {
      videoId = url.split("v=")[1]?.split("&")[0];
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1]?.split("?")[0];
    }
    
    if (videoId) {
      setEmbedUrl(`https://www.youtube.com/embed/${videoId}`);
    }
  };
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

        {/* Meeting Information */}
        <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">Reunião de Treinamento</h3>
              <div className="space-y-2 max-w-2xl mx-auto">
                <p className="text-lg font-medium">
                  📅 Próxima Terça-feira às 15:00
                </p>
                <p className="text-muted-foreground">
                  Vou me reunir com os copys dos participantes e ensinar como usar a plataforma de personas sintéticas. 
                  Esta será uma sessão prática onde aprenderemos juntos como maximizar o potencial da ferramenta.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* YouTube Embed Section */}
        <Card className="bg-card/80 backdrop-blur-sm border border-border/50">
          <CardContent className="p-8">
            <div className="space-y-6">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Youtube className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-2xl font-semibold">Tutorial em Vídeo</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Cole o link do YouTube abaixo para incorporar o vídeo tutorial
                </p>
              </div>

              <div className="space-y-4 max-w-md mx-auto">
                <div className="space-y-2">
                  <Label htmlFor="youtube-url">URL do YouTube</Label>
                  <Input
                    id="youtube-url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={youtubeUrl}
                    onChange={(e) => handleYoutubeUrl(e.target.value)}
                  />
                </div>
                
                <Button 
                  onClick={() => handleYoutubeUrl(youtubeUrl)}
                  className="w-full"
                  disabled={!youtubeUrl}
                >
                  <Youtube className="w-4 h-4 mr-2" />
                  Incorporar Vídeo
                </Button>
              </div>

              {embedUrl && (
                <div className="mt-8">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted/50">
                    <iframe
                      src={embedUrl}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Tutorial Video"
                    />
                  </div>
                </div>
              )}

              {!embedUrl && (
                <div className="aspect-video bg-muted/50 rounded-lg flex items-center justify-center mt-8">
                  <div className="text-center space-y-3">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <Video className="w-8 h-8 text-primary" />
                    </div>
                    <p className="text-muted-foreground">
                      Cole uma URL do YouTube para visualizar o vídeo aqui
                    </p>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tutorial;