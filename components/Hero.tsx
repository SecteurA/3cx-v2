'use client';

import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

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
  };

  return (
    <section className="relative pt-20 min-h-screen bg-[#0A1428] overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0A1428_1px,transparent_1px),linear-gradient(to_bottom,#1a365d_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium bg-white/5 backdrop-blur-sm">
              <span className="text-primary">Professional 3CX Solutions</span>
              <div className="mx-2 h-4 w-[1px] bg-primary/20" />
              <span className="text-white/70">Trusted by 500+ businesses</span>
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-5xl xl:text-6xl">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">
                Business Communications
              </span>
            </h1>
            
            <p className="text-lg text-white/70 max-w-xl">
              Get expert 3CX installation and support services. Enhance your business communications with our professional solutions.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-white/70">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 group">
                View Pricing
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white border-0">
                Learn More
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
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
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      type="email" 
                      placeholder="Business Email" 
                      required 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      type="tel" 
                      placeholder="Phone Number" 
                      required 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Company Name" 
                      required 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Input 
                      placeholder="Number of Users" 
                      type="number" 
                      required 
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
                    <PhoneCall className="mr-2 h-4 w-4" />
                    Schedule Consultation
                  </Button>
                  <p className="text-xs text-center text-white/50 mt-4">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
