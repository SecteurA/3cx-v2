'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative bg-[#0A1428] mt-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4">
            <span className="text-yellow-400 font-medium">
              Professional 3CX Solutions
            </span>
          </div>
          
          <h1 className="text-4xl font-bold text-white sm:text-5xl mb-6">
            Transform Your Business Communications
          </h1>
          
          <p className="text-lg text-white/70 mb-8">
            Get expert 3CX installation and support services. Enhance your business 
            communications with our professional solutions.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => window.location.href = '#services'}
            >
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-white border-white/20 hover:bg-white/10"
              onClick={() => window.location.href = '#contact'}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
