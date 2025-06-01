import { Gamepad, Github, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center">
            <Gamepad className="mr-2 h-6 w-6" />
            BG3 Modding Guide
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Una guida completa per portare la tua esperienza di Baldur's Gate 3 al livello successivo con le migliori mod disponibili.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#prerequisites" className="text-gray-400 hover:text-primary transition-colors duration-200">
            Prerequisiti
          </a>
          <a href="#guide" className="text-gray-400 hover:text-primary transition-colors duration-200">
            Guida
          </a>
          <a href="#downloads" className="text-gray-400 hover:text-primary transition-colors duration-200">
            Download
          </a>
          <a href="#faq" className="text-gray-400 hover:text-primary transition-colors duration-200">
            FAQ
          </a>
          <a href="#contact" className="text-gray-400 hover:text-primary transition-colors duration-200">
            Contatti
          </a>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://discord.com/channels/1130536078688919604/1301660914478616637/1378690709258895442"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="mailto:contact@bg3guide.com"
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-gray-500 text-sm">
            © 2024 BG3 Modding Guide. Creato per la community italiana di Baldur's Gate 3.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Baldur's Gate 3 è un marchio di Larian Studios. Questa guida è creata dalla community.
          </p>
        </div>
      </div>
    </footer>
  );
}
