import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Gamepad } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigationItems = [
    { id: "home", label: "Home", icon: "🏠" },
    { id: "prerequisites", label: "Prerequisiti", icon: "📋" },
    { id: "guide", label: "Guida", icon: "📖" },
    { id: "downloads", label: "Download", icon: "📥" },
    { id: "faq", label: "FAQ", icon: "❓" },
    { id: "contact", label: "Contatti", icon: "💬" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => item.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Gamepad className="text-primary text-2xl" />
            <span className="text-xl font-bold text-white">BG3 Mods</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                className={`nav-item px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id ? "active text-white" : "text-gray-300 hover:text-white"
                }`}
                onClick={() => scrollToSection(item.id)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background border-border">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      className={`justify-start text-left ${
                        activeSection === item.id ? "bg-primary text-white" : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {item.label}
                    </Button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
