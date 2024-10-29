'use client';

import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

export default function WhatsAppWidget() {
  const handleWhatsAppClick = () => {
    // Format: international number without spaces or special characters
    window.open('https://wa.me/442045773201', '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            size="icon" 
            className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg animate-float"
          >
            <MessageCircle className="h-7 w-7 text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-background/95 backdrop-blur-md">
          <SheetHeader>
            <SheetTitle>Chat with Us on WhatsApp</SheetTitle>
            <SheetDescription>
              Get instant support through WhatsApp
            </SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <p className="text-sm text-muted-foreground">
              Our support team is available 24/7 to assist you with any questions or concerns.
            </p>
            <p className="text-sm font-medium">
              WhatsApp: +44 204 577 3201
            </p>
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white"
              size="lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}