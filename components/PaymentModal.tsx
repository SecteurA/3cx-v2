'use client';

import { useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

declare global {
  interface Window {
    paypal?: any;
  }
}

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    price: string;
  };
}

export default function PaymentModal({ isOpen, onClose, service }: PaymentModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    // Load PayPal SDK dynamically only when modal is opened
    const loadPayPalScript = async () => {
      if (!window.paypal) {
        const script = document.createElement('script');
        script.src = `https://www.paypal.com/sdk/js?client-id=AU4U6xkdNP1tsWpw5iea5iYzMcmaZu8dB8TA7aan2Ybpk2o4zeL8gTNEY-oEGHUXCzeCcrXbZdL5CsRK&currency=USD`;
        script.async = true;
        
        // Wait for script to load
        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      // Initialize PayPal buttons
      window.paypal?.Buttons({
        style: {
          layout: 'vertical',
          color: 'blue',
          shape: 'rect',
          label: 'pay'
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [{
              description: service.title,
              amount: {
                value: service.price
              }
            }]
          });
        },
        onApprove: async (data: any, actions: any) => {
          try {
            const order = await actions.order.capture();
            toast.success("Payment successful!", {
              description: "Thank you for your purchase. We'll contact you shortly.",
            });
            onClose();
          } catch (error) {
            toast.error("Payment failed", {
              description: "Please try again or contact support.",
            });
          }
        },
        onError: () => {
          toast.error("Payment failed", {
            description: "Please try again or contact support.",
          });
        }
      }).render('#paypal-button-container');
    };

    loadPayPalScript().catch(() => {
      toast.error("Failed to load payment system", {
        description: "Please try again or contact support.",
      });
    });

    // Cleanup
    return () => {
      const container = document.getElementById('paypal-button-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [isOpen, service, onClose]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Purchase</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="text-center space-y-2">
            <h3 className="font-semibold">{service.title}</h3>
            <p className="text-2xl font-bold text-primary">${service.price}</p>
          </div>
          <div id="paypal-button-container" />
        </div>
      </DialogContent>
    </Dialog>
  );
}
