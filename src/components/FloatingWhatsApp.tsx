import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/628875389674", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-50 animate-bounce hover:animate-none bg-gradient-to-br from-[#25D366] to-[#128C7E] hover:from-[#128C7E] hover:to-[#075E54] border-0"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </Button>
  );
};
