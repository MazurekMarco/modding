import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle, Download, Gamepad, Settings, Archive, Github, ExternalLink } from "lucide-react";

export default function Prerequisites() {
  const scrollToGuide = () => {
    const element = document.getElementById("guide");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="prerequisites" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Prerequisiti
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Prima di iniziare, assicurati di avere tutti i file necessari scaricati e pronti per l'installazione.
          </p>
        </div>

        {/* Warning Section */}
        <Alert className="bg-red-900/30 border-red-500/50 mb-12">
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-red-200">
            <h3 className="text-xl font-semibold text-red-300 mb-2">⚠️ ATTENZIONE - Passaggio Importante</h3>
            <p className="mb-3">
              Prima di procedere con l'installazione delle mod, è <strong>essenziale eliminare la cartella "Larian Studios"</strong> dagli AppData.
            </p>
            <div className="bg-red-900/40 rounded-lg p-4 border border-red-500/30">
              <p className="text-red-100 font-mono text-sm">
                <strong>Procedura:</strong><br />
                1. Premi <kbd className="bg-red-800 px-2 py-1 rounded text-xs">Win + R</kbd><br />
                2. Digita <code className="bg-red-800 px-2 py-1 rounded">%appdata%</code> e premi Invio<br />
                3. Cerca tra le tre cartelle una cartella chiamata "Larian Studios" o simile<br />
                4. Eliminala completamente
              </p>
            </div>
          </AlertDescription>
        </Alert>

        {/* Download Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Game */}
          <Card className="glass-effect card-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 rounded-lg p-3 mr-4">
                  <Gamepad className="text-primary h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Baldur's Gate 3</CardTitle>
                  <p className="text-gray-400">Patch 8 - Versione FitGirl</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Il gioco base richiesto per l'installazione delle mod. Assicurati di avere la Patch 8.
              </p>
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-3">
                <p className="text-yellow-200 text-sm flex items-center">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Scarica dal torrent ufficiale di FitGirl
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Mod Manager */}
          <Card className="glass-effect card-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="bg-green-500/20 rounded-lg p-3 mr-4">
                  <Settings className="text-green-400 h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Mod Manager</CardTitle>
                  <p className="text-gray-400">Versione 1.0.12.9</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Tool essenziale per gestire e installare le mod per Baldur's Gate 3.
              </p>
              <Button asChild className="bg-green-600 hover:bg-green-700">
                <a
                  href="https://github.com/LaughingLeader/BG3ModManager/releases/download/1.0.12.9/BG3ModManager_Latest.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Scarica da GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Script Extender */}
          <Card className="glass-effect card-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="bg-purple-500/20 rounded-lg p-3 mr-4">
                  <Settings className="text-purple-400 h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Script Extender</CardTitle>
                  <p className="text-gray-400">BG3SE - 20240430</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Estende le funzionalità del gioco per supportare mod più avanzate.
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a
                  href="https://github.com/Norbyte/bg3se/releases/download/updater-20240430/BG3SE-Updater-20240430.zip"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Scarica da GitHub
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Modpack */}
          <Card className="glass-effect card-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="bg-primary/20 rounded-lg p-3 mr-4">
                  <Archive className="text-primary h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Modpack Completo</CardTitle>
                  <p className="text-gray-400">Raccolta di mod</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                Pacchetto completo contenente tutte le mod necessarie per l'esperienza ottimale.
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a
                  href="https://drive.google.com/file/d/1coZargB7ufnoAq5jyB_JKLeoZfrsTGBG/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Scarica da Drive
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* ModOrder */}
          <Card className="glass-effect card-hover transition-all duration-300 md:col-span-2">
            <CardHeader>
              <div className="flex items-center mb-4">
                <div className="bg-indigo-500/20 rounded-lg p-3 mr-4">
                  <Archive className="text-indigo-400 h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">ModOrder File</CardTitle>
                  <p className="text-gray-400">Ordine di caricamento delle mod</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">
                File che definisce l'ordine corretto di caricamento delle mod per evitare conflitti.
              </p>
              <Button asChild className="bg-indigo-600 hover:bg-indigo-700">
                <a
                  href="https://discord.com/channels/1130536078688919604/1301660914478616637/1378690709258895442"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Vai al messaggio Discord
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            className="gaming-gradient text-white text-lg font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={scrollToGuide}
          >
            Procedi alla Guida →
          </Button>
        </div>
      </div>
    </section>
  );
}
