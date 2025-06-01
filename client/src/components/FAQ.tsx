import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ChevronDown, ChevronUp, Info, AlertTriangle, CheckCircle, Lightbulb, ExternalLink } from "lucide-react";

export default function FAQ() {
  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (faqNumber: number) => {
    setOpenFAQs(prev =>
      prev.includes(faqNumber)
        ? prev.filter(n => n !== faqNumber)
        : [...prev, faqNumber]
    );
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqs = [
    {
      id: 1,
      question: "Il gioco va in crash all'avvio dopo aver installato le mod",
      answer: "Questo problema può avere diverse cause. Ecco i passaggi per risolverlo:",
      steps: [
        "Verifica di aver eliminato la cartella \"Larian Studios\" dagli AppData",
        "Controlla che il file DWrite.dll sia nella cartella \"bin\" del gioco",
        "Assicurati che l'opzione DirectX 11 sia attivata nel Mod Manager",
        "Verifica l'ordine delle mod utilizzando il file ModOrder fornito",
        "Prova a disattivare temporaneamente l'antivirus"
      ],
      note: "Se il problema persiste, prova a caricare una mod alla volta per identificare quella problematica.",
      noteType: "info" as const
    },
    {
      id: 2,
      question: "Non vedo le mod nel Mod Manager",
      answer: "Se le mod non appaiono nel Mod Manager, controlla quanto segue:",
      steps: [
        "Verifica che il percorso del gioco sia impostato correttamente",
        "Assicurati che l'importazione del modpack sia completata",
        "Controlla se ci sono errori nella console del Mod Manager",
        "Prova a riavviare il Mod Manager"
      ],
      note: "Le mod dovrebbero apparire nella lista dopo un'importazione riuscita.",
      noteType: "success" as const
    },
    {
      id: 3,
      question: "Il Mod Manager chiede di scaricare .NET 8.0",
      answer: "Questo è normale. Il Mod Manager richiede .NET 8.0 per funzionare correttamente.",
      steps: [
        "Clicca \"OK\" quando richiesto",
        "Scarica e installa .NET 8.0 dal sito Microsoft",
        "Riavvia il computer se necessario",
        "Riapri il Mod Manager"
      ],
      note: null,
      noteType: "info" as const,
      hasDownloadLink: true
    },
    {
      id: 4,
      question: "Le mod funzionano ma le performance sono scarse",
      answer: "Alcune mod possono influire sulle performance. Ecco alcuni suggerimenti:",
      steps: [
        "Riduci le impostazioni grafiche del gioco",
        "Disattiva le mod grafiche più pesanti se presenti",
        "Verifica che DirectX 11 sia attivato (performance migliori di DX12 con mod)",
        "Chiudi altri programmi in background",
        "Considera l'aggiornamento dell'hardware se necessario"
      ],
      note: "Le mod aggiungono contenuto al gioco, quindi è normale un leggero calo delle performance.",
      noteType: "warning" as const
    },
    {
      id: 5,
      question: "Posso aggiungere altre mod oltre al modpack?",
      answer: "Sì, puoi aggiungere altre mod, ma con alcune precauzioni:",
      steps: [
        "Leggi sempre le descrizioni delle mod per verificare la compatibilità",
        "Aggiungi una mod alla volta e testa il gioco",
        "Mantieni un backup dell'ordine delle mod funzionante",
        "Alcune mod potrebbero richiedere un ordine specifico",
        "In caso di problemi, chiedi aiuto sulla community Discord"
      ],
      note: "Troppo mod possono causare instabilità. Procedi gradualmente.",
      noteType: "warning" as const
    }
  ];

  const getIconForNoteType = (type: string) => {
    switch (type) {
      case "warning":
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
      case "success":
        return "bg-green-900/30 border-green-500/50 text-green-200";
      case "info":
      default:
        return "bg-blue-900/30 border-blue-500/50 text-blue-200";
    }
  };

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Domande Frequenti
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Risposte alle domande più comuni sull'installazione e l'uso delle mod.
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq) => (
            <Card key={faq.id} className="glass-effect overflow-hidden">
              <Collapsible
                open={openFAQs.includes(faq.id)}
                onOpenChange={() => toggleFAQ(faq.id)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full px-6 py-4 text-left flex items-center justify-between gaming-gradient hover:from-primary/20 hover:to-purple-600/20 transition-all duration-300"
                  >
                    <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                    {openFAQs.includes(faq.id) ? (
                      <ChevronUp className="h-5 w-5 text-white" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-white" />
                    )}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="px-6 py-6 bg-background/30">
                    <div className="space-y-4">
                      <p className="text-gray-300">{faq.answer}</p>
                      {faq.steps && (
                        <ol className="list-decimal list-inside space-y-2 text-gray-300">
                          {faq.steps.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      )}
                      
                      {faq.hasDownloadLink && (
                        <div className="text-center mt-4">
                          <Button asChild className="bg-orange-600 hover:bg-orange-700">
                            <a
                              href="https://dotnet.microsoft.com/download/dotnet/8.0"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-4 w-4" />
                              Scarica .NET 8.0
                            </a>
                          </Button>
                        </div>
                      )}
                      
                      {faq.note && (
                        <Alert className={`${getNoteColorClasses(faq.noteType)} border rounded-lg`}>
                          <div className="flex items-center">
                            {getIconForNoteType(faq.noteType)}
                            <AlertDescription className="ml-2">
                              {faq.note}
                            </AlertDescription>
                          </div>
                        </Alert>
                      )}
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <Card className="mt-12 glass-effect">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-primary text-center">
              <Info className="inline mr-2 h-6 w-6" />
              Problemi con l'installazione?
            </h2>
            <p className="text-gray-300 mb-6 text-center">
              Se hai difficoltà con uno dei passaggi, rileggi attentamente la guida e assicurati di aver seguito tutti i prerequisiti.
              La maggior parte dei problemi deriva dal saltare un passaggio o dall'ordine sbagliato delle operazioni.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
