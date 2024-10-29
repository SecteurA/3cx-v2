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
    if (isOpen && window.paypal) {
      window.paypal.Buttons({
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
    }
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
