import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Globe, Heart, MessageCircle, Shield } from "lucide-react";

export default function ContactSection() {
  const scrollToFAQ = () => {
    const element = document.getElementById("faq");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const supportFeatures = [
    {
      icon: Users,
      title: "Community attiva e disponibile",
      color: "text-primary"
    },
    {
      icon: Clock,
      title: "Supporto rapido e efficace",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Discussioni su mod e aggiornamenti",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Condivisione di screenshot e esperienze",
      color: "text-primary"
    }
  ];

  const helpTopics = [
    {
      icon: "📥",
      title: "Problemi di installazione"
    },
    {
      icon: "🐛",
      title: "Risoluzione di crash e bug"
    },
    {
      icon: "⚙️",
      title: "Configurazione mod avanzate"
    },
    {
      icon: "🎨",
      title: "Supporto per ReShade"
    }
  ];

  const communityStats = [
    {
      icon: Clock,
      title: "Risposta Rapida",
      description: "Solitamente rispondiamo entro poche ore",
      color: "text-yellow-400"
    },
    {
      icon: Globe,
      title: "Supporto Italiano",
      description: "Community completamente in italiano",
      color: "text-green-400"
    },
    {
      icon: Heart,
      title: "Community Friendly",
      description: "Ambiente accogliente per tutti",
      color: "text-primary"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 text-gradient">
            Contatti & Supporto
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Hai bisogno di aiuto? Unisciti alla nostra community Discord per supporto e discussioni.
          </p>
        </div>

        <div className="text-center mb-12">
          {/* Discord themed background image */}
          <div className="relative mb-8 rounded-3xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600"
              alt="Gaming community Discord server"
              className="w-full h-80 object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-indigo-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="text-white h-12 w-12" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  Unisciti al Discord
                </h2>
                <p className="text-xl text-gray-200">
                  Community italiana di modding per Baldur's Gate 3
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Discord Info */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="bg-indigo-600/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="text-indigo-400 h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Discord Community</h3>
                <p className="text-gray-400">Server ufficiale per supporto e discussioni</p>
              </div>

              <div className="space-y-4">
                {supportFeatures.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <IconComponent className={`${feature.color} h-5 w-5`} />
                      <span className="text-gray-300">{feature.title}</span>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Help Topics */}
          <Card className="glass-effect">
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-green-400 h-8 w-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Cosa puoi chiedere</h3>
                <p className="text-gray-400">Argomenti di supporto disponibili</p>
              </div>

              <div className="space-y-4">
                {helpTopics.map((topic, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-lg">{topic.icon}</span>
                    <span className="text-gray-300">{topic.title}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Discord Invite Section */}
        <Card className="glass-effect mb-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-3xl font-bold mb-4 text-indigo-400">
              💬 Pronto per entrare?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Il nostro team di esperti e la community sono pronti ad aiutarti con qualsiasi problema tu possa incontrare.
              Non essere timido, siamo tutti qui per divertirci con Baldur's Gate 3!
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                <a
                  href="https://discord.com/channels/1130536078688919604/1301660914478616637/1378690709258895442"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-3 h-5 w-5" />
                  Unisciti al Discord
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToFAQ}
                className="border-purple-600 text-purple-400 hover:bg-purple-700 text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              >
                ❓ Consulta le FAQ
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-6">
          {communityStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="glass-effect text-center">
                <CardContent className="p-6">
                  <div className={`${stat.color} text-3xl mb-3`}>
                    <IconComponent className="h-8 w-8 mx-auto" />
                  </div>
                  <h4 className="font-semibold mb-2">{stat.title}</h4>
                  <p className="text-gray-400 text-sm">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
