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
    <section className="relative bg-gradient-to-b from-background to-background/50 mt-16">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-10" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in"> 
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-5xl xl:text-6xl animate-slide-up">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-secondary">
                Business Communications
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl animate-slide-up">
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
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <div 
              className="flex items-center gap-4 animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group"
                onClick={() => window.location.href = '#services'}
              >
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="hover:bg-secondary/90"
                onClick={() => window.location.href = '#contact'}
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Column - Form */}
          <Card className="backdrop-blur-sm bg-card/50 border-primary/10 shadow-2xl shadow-primary/5 animate-fade-in">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-foreground">Get Started Today</CardTitle>
              <CardDescription>
                Fill out the form below for a free consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <Input 
                    placeholder="Full Name" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Input 
                    type="email" 
                    placeholder="Business Email" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <Input 
                    placeholder="Company Name" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <Input 
                    placeholder="Number of Users" 
                    type="number" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-slide-up group" 
                  size="lg"
                  style={{ animationDelay: '0.6s' }}
                >
                  <PhoneCall className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Schedule Consultation
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
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
