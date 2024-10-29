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
    <section className="relative bg-[#0A1428] mt-16">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl">
              Transform Your <br />
              <span className="text-yellow-400">
                Business Communications
              </span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-xl">
              Get expert 3CX installation and support services. Enhance your business 
              communications with our professional solutions.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-400" />
                  <span className="text-white/70">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button 
                size="lg" 
                className="bg-yellow-400 hover:bg-yellow-500 text-black"
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
          <Card className="backdrop-blur-sm bg-white/[0.03] border-white/10">
            <CardHeader>
              <CardTitle className="text-white">Get Started Today</CardTitle>
              <CardDescription className="text-white/70">
                Fill out the form below for a free consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input 
                    placeholder="Full Name" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-yellow-400/20" 
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="email" 
                    placeholder="Business Email" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-yellow-400/20" 
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-yellow-400/20" 
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    placeholder="Company Name" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-yellow-400/20" 
                  />
                </div>
                <div className="space-y-2">
                  <Input 
                    placeholder="Number of Users" 
                    type="number" 
                    required 
                    className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-yellow-400/20" 
                  />
                </div>
                <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black" size="lg">
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Schedule Consultation
                </Button>
                <p className="text-xs text-center text-white/50 mt-4">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-yellow-400 hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-yellow-400 hover:underline">
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
