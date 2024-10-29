'use client';

import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const benefits = [
  'Free consultation call',
  'Same-day response',
  'Expert installation team',
];

export default function Hero() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your interest!', {
      description: 'Our team will contact you shortly.',
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="relative bg-[#0A1428]/80 mt-16">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A1428_1px,transparent_1px),linear-gradient(to_bottom,#1a365d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20" />
      
      {/* Glowing orbs with reduced opacity */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in"> 
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl animate-slide-up">
              Transform Your <br />
              <span className="text-primary">
                Business Communications
              </span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-xl animate-slide-up">
              Get expert 3CX installation and support services. Enhance your business 
              communications with our professional solutions.
            </p>

            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center gap-2 animate-slide-up"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-white/70">{benefit}</span>
                </div>
              ))}
            </div>

            <div 
              className="flex items-center gap-4 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white"
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
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="backdrop-blur-sm bg-white/[0.03] border-white/10 animate-fade-in">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-white">Get Started Today</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form below for a free consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <Input 
                    placeholder="Full Name" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Input 
                    type="email" 
                    placeholder="Business Email" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <Input 
                    placeholder="Company Name" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <Input 
                    placeholder="Number of Users" 
                    type="number" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white animate-slide-up" 
                  size="lg"
                  style={{ animationDelay: '0.6s' }}
                >
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <p className="text-xs text-center text-white/50 mt-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
