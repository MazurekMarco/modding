import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronDown, ChevronUp, AlertTriangle, Info, CheckCircle, Trophy, Lightbulb, Clock, TriangleAlert } from "lucide-react";
import screenshot1 from "@assets/screenshot 2.png";
import screenshot2 from "@assets/screenshot 3.png";
import screenshot3 from "@assets/screenshot 4.png";
import screenshot4 from "@assets/screenshot 5.png";
import screenshot5 from "@assets/screenshot 6.png";
import screenshot6 from "@assets/screenshot7.png";

export default function StepByStepGuide() {
  const [openSteps, setOpenSteps] = useState<number[]>([]);

  const toggleStep = (stepNumber: number) => {
    setOpenSteps(prev =>
      prev.includes(stepNumber)
        ? prev.filter(n => n !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: 1,
      title: "Trovare la cartella di installazione",
      content: "Fai clic destro sull'icona di Baldur's Gate 3 e seleziona \"Apri percorso file\" fino a raggiungere la cartella principale del gioco.",
      screenshot: null,
      note: "La cartella dovrebbe contenere file come Launcher.exe, bin, Data, ecc.",
      noteType: "info" as const
    },
    {
      number: 2,
      title: "Estrarre lo Script Extender",
      content: "Estrai il file \"DWrite.dll\" dallo Script Extender nella cartella \"bin\" del gioco.",
      screenshot: screenshot1,
      note: "Assicurati che il file DWrite.dll sia nella cartella bin del gioco, non in sottocartelle.",
      noteType: "warning" as const
    },
    {
      number: 3,
      title: "Attivare l'Online Fix",
      content: "Vai nella cartella NoDVD > Online Fix, copia la cartella \"bin\" e incollala nella cartella principale del gioco. Quando richiesto, sostituisci i file esistenti.",
      screenshot: screenshot2,
      note: "Conferma la sostituzione quando il sistema te lo chiede.",
      noteType: "success" as const
    },
    {
      number: 4,
      title: "Primo avvio del gioco",
      content: "Avvia il gioco, arriva alla schermata principale del menu e poi chiudilo. Questo passaggio è importante per creare i file di configurazione necessari.",
      screenshot: null,
      note: "Non è necessario creare un personaggio, basta raggiungere il menu principale.",
      noteType: "info" as const
    },
    {
      number: 5,
      title: "Estrarre il Mod Manager",
      content: "Estrai il Mod Manager in una cartella separata sul tuo computer.",
      screenshot: screenshot3,
      note: null,
      noteType: "info" as const
    },
    {
      number: 6,
      title: "Aprire il Mod Manager",
      content: "Avvia \"BG3ModManager.exe\". Se richiesto, scarica .NET 8.0 cliccando OK e riavvia il Mod Manager.",
      screenshot: null,
      note: "Se appare un messaggio per scaricare .NET 8.0, clicca OK e installalo prima di procedere.",
      noteType: "warning" as const
    },
    {
      number: 7,
      title: "Configurare il percorso del gioco",
      content: "Il Mod Manager ti chiederà dove è installato il gioco. Normalmente si trova in \"C:\\games\\Baldur's Gate 3\". Naviga fino alla cartella corretta e clicca \"Utilizza cartella\".",
      screenshot: screenshot4,
      note: "Vai su Windows (C:) > games > Baldur's Gate 3 e clicca \"Utilizza cartella\"",
      noteType: "info" as const
    },
    {
      number: 8,
      title: "Configurare DirectX 11",
      content: "Nel Mod Manager, premi CTRL+P per aprire le preferenze, attiva la spunta \"DirectX 11\", salva in alto a sinistra e chiudi la finestra delle preferenze.",
      screenshot: screenshot5,
      note: "Questa impostazione è fondamentale per il corretto funzionamento delle mod.",
      noteType: "error" as const
    },
    {
      number: 9,
      title: "Importare il Modpack",
      content: "Vai su File > Import Mod e seleziona il file ZIP del modpack completo. L'importazione richiederà alcuni minuti.",
      screenshot: null,
      note: "Il processo di importazione può richiedere diversi minuti a seconda delle dimensioni del modpack.",
      noteType: "info" as const
    },
    {
      number: 10,
      title: "Importare l'ordine delle mod",
      content: "Vai su File > Import Order from File e seleziona il file ModOrder scaricato da Discord.",
      screenshot: null,
      note: "L'ordine corretto delle mod è essenziale per evitare conflitti e crash.",
      noteType: "success" as const
    },
    {
      number: 11,
      title: "Finalizzazione",
      content: "Una volta completato tutto, clicca in sequenza i pulsanti indicati nello screenshot per finalizzare l'installazione.",
      screenshot: screenshot6,
      note: "GGWP - Installazione completata! 🎉",
      noteType: "success" as const,
      isComplete: true
    }
  ];

  const getIconForNoteType = (type: string) => {
    switch (type) {
      case "warning":
        return <TriangleAlert className="h-4 w-4" />;
      case "error":
        return <AlertTriangle className="h-4 w-4" />;
      case "success":
        return <CheckCircle className="h-4 w-4" />;
      case "info":
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getNoteColorClasses = (type: string) => {
    switch (type) {
      case "warning":
        return "bg-yellow-900/30 border-yellow-500/50 text-yellow-200";
      case "error":
        return "bg-red-900/30 border-red-500/50 text-red-200";
      case "success":
        return "bg-green-900/30 border-green-500/50 text-green-200";
      case "info":
      default:
        return "bg-blue-900/30 border-blue-500/50 text-blue-200";
    }
  };

  return (
    <section id="guide" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Guida Passo-Passo
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Segui attentamente questi 11 passaggi per installare correttamente le mod su Baldur's Gate 3.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className={`step-card border ${step.isComplete ? 'border-green-500/50' : 'border-purple-500/30'} overflow-hidden`}
            >
              <Collapsible
                open={openSteps.includes(step.number)}
                onOpenChange={() => toggleStep(step.number)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full px-6 py-4 text-left flex items-center justify-between gaming-gradient hover:from-primary/30 hover:to-purple-600/30 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`${step.isComplete ? 'bg-green-600' : 'bg-primary'} text-white rounded-full w-10 h-10 flex items-center justify-center font-bold`}>
                        {step.isComplete ? <Trophy className="h-5 w-5" /> : step.number}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                    </div>
                    {openSteps.includes(step.number) ? (
                      <ChevronUp className="h-5 w-5 text-white" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-white" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-6 py-6 bg-background/30">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {step.content}
                    </p>
                    
                    {step.screenshot && (
                      <div className="bg-gray-800 rounded-lg p-4 mb-4">
                        <img
                          src={step.screenshot}
                          alt={`Screenshot ${step.number}`}
                          className="w-full max-w-2xl rounded-lg shadow-lg mx-auto"
                        />
                      </div>
                    )}
                    
                    {step.note && (
                      <Alert className={`${getNoteColorClasses(step.noteType)} border rounded-lg`}>
                        <div className="flex items-center">
                          {getIconForNoteType(step.noteType)}
                          <AlertDescription className="ml-2">
                            {step.isComplete ? (
                              <p className="text-lg font-semibold">
                                <Trophy className="inline mr-2 h-5 w-5" />
                                {step.note}
                              </p>
                            ) : (
                              step.note
                            )}
                          </AlertDescription>
                        </div>
                      </Alert>
                    )}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* Optional ReShade Section */}
        <Card className="mt-12 bg-gradient-to-r from-purple-900/30 to-blue-900/30 border-purple-500/30">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center text-purple-400">
              🎨 Opzionale: ReShade
            </h2>
            <p className="text-gray-300 text-center mb-4">
              ReShade migliora notevolmente la grafica del gioco ed è relativamente facile da installare.
            </p>
            <div className="text-center">
              <Button asChild className="bg-purple-600 hover:bg-purple-700">
                <a href="https://reshade.me/" target="_blank" rel="noopener noreferrer">
                  Scarica ReShade
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button
            size="lg"
            onClick={() => scrollToSection("faq")}
            className="gaming-gradient text-white font-semibold py-3 px-6 rounded-xl transition-all"
          >
            <Info className="mr-2 h-4 w-4" />
            Vedi FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
