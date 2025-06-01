import { Button } from "@/components/ui/button";
import { Play, Shield, Users } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          {/* Hero Background */}
          <div className="relative mb-12 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Fantasy gaming background"
              className="w-full h-96 object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient">
                  Guida Modding
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                  Baldur's Gate 3 - Patch 8
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  La guida completa per installare mod su Baldur's Gate 3
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-8 mb-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              Scopri come installare facilmente le mod per Baldur's Gate 3 con la nostra guida passo-passo.
              Questa guida è basata sulla <span className="text-primary font-semibold">Patch 8 della versione FitGirl</span>
              e ti accompagnerà attraverso tutto il processo di installazione.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="glass-effect rounded-xl p-6 card-hover transition-all duration-300">
                <div className="text-primary text-3xl mb-4">
                  <Play className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Facile da Seguire</h3>
                <p className="text-gray-400 text-sm">Guida step-by-step con screenshot e spiegazioni dettagliate</p>
              </div>

              <div className="glass-effect rounded-xl p-6 card-hover transition-all duration-300">
                <div className="text-green-400 text-3xl mb-4">
                  <Shield className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Sicuro e Testato</h3>
                <p className="text-gray-400 text-sm">Tutti i file e i passaggi sono stati verificati e testati</p>
              </div>

              <div className="glass-effect rounded-xl p-6 card-hover transition-all duration-300">
                <div className="text-purple-400 text-3xl mb-4">
                  <Users className="w-8 h-8 mx-auto" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Supporto Discord</h3>
                <p className="text-gray-400 text-sm">Ricevi aiuto dalla nostra community su Discord</p>
              </div>
            </div>
          </div>

          <Button
            size="lg"
            className="gaming-gradient text-white text-xl font-semibold px-12 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
            onClick={() => scrollToSection("prerequisites")}
          >
            <Play className="mr-3 h-5 w-5" />
            Inizia la Guida
          </Button>
        </div>
      </div>
    </section>
  );
}
