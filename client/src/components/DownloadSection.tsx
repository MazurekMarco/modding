import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Download, Github, ExternalLink, Settings, Archive, Gamepad, Lightbulb, Shield, FileText } from "lucide-react";

export default function DownloadSection() {
  const scrollToGuide = () => {
    const element = document.getElementById("guide");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloads = [
    {
      title: "Mod Manager",
      version: "v1.0.12.9",
      description: "Strumento principale per gestire le mod di Baldur's Gate 3.",
      icon: Settings,
      color: "text-green-400",
      bgColor: "bg-green-500/20",
      buttonColor: "bg-green-600 hover:bg-green-700",
      url: "https://github.com/LaughingLeader/BG3ModManager/releases/download/1.0.12.9/BG3ModManager_Latest.zip",
      type: "GitHub"
    },
    {
      title: "Script Extender",
      version: "BG3SE 20240430",
      description: "Estende le funzionalità del gioco per mod avanzate.",
      icon: FileText,
      color: "text-purple-400",
      bgColor: "bg-purple-500/20",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
      url: "https://github.com/Norbyte/bg3se/releases/download/updater-20240430/BG3SE-Updater-20240430.zip",
      type: "GitHub"
    },
    {
      title: "Modpack Completo",
      version: "Raccolta mod",
      description: "Pacchetto completo di mod testate e compatibili.",
      icon: Archive,
      color: "text-blue-400",
      bgColor: "bg-blue-500/20",
      buttonColor: "bg-blue-600 hover:bg-blue-700",
      url: "https://drive.google.com/file/d/1coZargB7ufnoAq5jyB_JKLeoZfrsTGBG/view?usp=drive_link",
      type: "Drive"
    },
    {
      title: "ModOrder File",
      version: "Ordine caricamento",
      description: "File per l'ordine corretto delle mod.",
      icon: Archive,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/20",
      buttonColor: "bg-indigo-600 hover:bg-indigo-700",
      url: "https://discord.com/channels/1130536078688919604/1301660914478616637/1378690709258895442",
      type: "Discord"
    },
    {
      title: "ReShade",
      version: "Miglioramento grafico",
      description: "Migliora la grafica del gioco (opzionale).",
      icon: Gamepad,
      color: "text-pink-400",
      bgColor: "bg-pink-500/20",
      buttonColor: "bg-pink-600 hover:bg-pink-700",
      url: "https://reshade.me/",
      type: "Website"
    },
    {
      title: ".NET 8.0",
      version: "Runtime necessario",
      description: "Richiesto per il funzionamento del Mod Manager.",
      icon: Download,
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      buttonColor: "bg-orange-600 hover:bg-orange-700",
      url: "https://dotnet.microsoft.com/download/dotnet/8.0",
      type: "Microsoft"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "GitHub":
        return <Github className="mr-2 h-4 w-4" />;
      case "Drive":
        return <Download className="mr-2 h-4 w-4" />;
      case "Discord":
        return <ExternalLink className="mr-2 h-4 w-4" />;
      case "Website":
        return <ExternalLink className="mr-2 h-4 w-4" />;
      case "Microsoft":
        return <Download className="mr-2 h-4 w-4" />;
      default:
        return <Download className="mr-2 h-4 w-4" />;
    }
  };

  return (
    <section id="downloads" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Download Utili
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tutti i link di download organizzati in un unico posto per la tua comodità.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {downloads.map((download, index) => {
            const IconComponent = download.icon;
            return (
              <Card key={index} className="glass-effect card-hover transition-all duration-300">
                <CardHeader className="text-center">
                  <div className={`${download.bgColor} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-3`}>
                    <IconComponent className={`${download.color} h-8 w-8`} />
                  </div>
                  <CardTitle className="text-xl">{download.title}</CardTitle>
                  <p className="text-gray-400 text-sm">{download.version}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    {download.description}
                  </p>
                  <Button asChild className={`w-full ${download.buttonColor} transition-colors duration-300`}>
                    <a href={download.url} target="_blank" rel="noopener noreferrer">
                      {getIcon(download.type)}
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-12 glass-effect">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary">
              <Lightbulb className="inline mr-2 h-6 w-6" />
              Note Importanti
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <Alert className="bg-yellow-900/30 border-yellow-500/50">
                <Shield className="h-4 w-4 text-yellow-400" />
                <AlertDescription>
                  <h3 className="font-semibold text-yellow-200 mb-2">Backup</h3>
                  <p className="text-yellow-100 text-sm">
                    Crea sempre un backup dei tuoi salvataggi prima di installare le mod.
                  </p>
                </AlertDescription>
              </Alert>
              <Alert className="bg-blue-900/30 border-blue-500/50">
                <Shield className="h-4 w-4 text-blue-400" />
                <AlertDescription>
                  <h3 className="font-semibold text-blue-200 mb-2">Antivirus</h3>
                  <p className="text-blue-100 text-sm">
                    Alcuni antivirus potrebbero segnalare falsi positivi sui file delle mod.
                  </p>
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={scrollToGuide}
            className="gaming-gradient text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            ← Torna alla Guida
          </Button>
        </div>
      </div>
    </section>
  );
}
