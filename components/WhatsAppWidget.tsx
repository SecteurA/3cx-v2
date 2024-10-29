'use client';

import { useState } from 'react';
import { MessageCircle, X, Send, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';

const businessHours = {
  weekdays: '9:00 AM - 6:00 PM',
  weekends: '10:00 AM - 2:00 PM',
  timezone: 'EST'
};

const quickResponses = [
  "I'd like to know more about 3CX installation.",
  "I need help with my existing 3CX system.",
  "What's included in the support package?",
  "Can you help with custom configuration?"
];

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleWhatsAppRedirect = (customMessage?: string) => {
    const phone = '442045773201'; // International format without + or spaces
    const text = encodeURIComponent(customMessage || message || "Hello! I'm interested in your 3CX services.");
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  const getCurrentStatus = () => {
    const now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    
    // Check if it's a weekday (1-5) and within business hours
    if (day >= 1 && day <= 5) {
      return hour >= 9 && hour < 18;
    }
    // Check if it's weekend (0 or 6) and within weekend hours
    return hour >= 10 && hour < 14;
  };

  const isAvailable = getCurrentStatus();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button 
              size="icon" 
              className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg"
              aria-label="Open WhatsApp chat"
            >
              <MessageCircle className="h-7 w-7 text-white" />
            </Button>
          </motion.div>
        </SheetTrigger>
        
        <SheetContent 
          side="right" 
          className="w-[90vw] sm:w-[440px] bg-background/95 backdrop-blur-md"
        >
          <SheetHeader className="border-b pb-4">
            <SheetTitle className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#25D366] animate-pulse" />
              WhatsApp Support
            </SheetTitle>
            <SheetDescription>
              Connect with our support team instantly
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6 space-y-6">
            {/* Status Section */}
            <div className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border">
              <div className={`w-3 h-3 rounded-full ${isAvailable ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`} />
              <div>
                <p className="text-sm font-medium">
                  {isAvailable ? 'We are online' : 'Outside business hours'}
                </p>
                <p className="text-xs text-muted-foreground">
                  <Clock className="h-3 w-3 inline mr-1" />
                  Weekdays: {businessHours.weekdays} | Weekends: {businessHours.weekends} ({businessHours.timezone})
                </p>
              </div>
            </div>

            {/* Quick Responses */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Quick Responses</h3>
              <div className="grid gap-2">
                {quickResponses.map((response, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleWhatsAppRedirect(response)}
                    className="text-left text-sm p-3 rounded-lg bg-background/50 border hover:bg-background/80 hover:border-primary/50 transition-all duration-200"
                  >
                    {response}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Custom Message */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium">Or send a custom message:</h3>
              <div className="flex gap-2">
                <Input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button 
                  onClick={() => handleWhatsAppRedirect()}
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                WhatsApp: +44 204 577 3201
              </p>
              <p className="text-xs">
                By contacting us, you agree to our privacy policy and terms of service.
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
