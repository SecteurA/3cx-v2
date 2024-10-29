'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Settings, 
  HeadphonesIcon,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { toast } from 'sonner';

const services = [
  {
    title: 'Basic Installation',
    price: '100',
    description: 'Perfect for small businesses getting started with 3CX',
    features: [
      'Single instance setup',
      'Basic configuration',
      'Up to 5 extensions',
      'Standard support',
    ],
    icon: Download,
    gradient: 'from-blue-500/20 via-transparent to-transparent',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Full Installation',
    price: '200',
    description: 'Complete solution for growing businesses',
    features: [
      'Multiple instance setup',
      'Advanced configuration',
      'Unlimited extensions',
      'Priority support',
      'Custom IVR setup',
      'Call flow optimization',
    ],
    icon: Settings,
    highlighted: true,
    gradient: 'from-violet-500/20 via-transparent to-transparent',
    iconColor: 'text-violet-500',
  },
  {
    title: 'Support Ticket',
    price: '50',
    description: 'Quick help when you need it',
    features: [
      'Single issue resolution',
      'Remote assistance',
      'Expert guidance',
      '24-hour response time',
    ],
    icon: HeadphonesIcon,
    gradient: 'from-emerald-500/20 via-transparent to-transparent',
    iconColor: 'text-emerald-500',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

export default function Services() {
  const handleOrder = (service: { title: string; price: string }) => {
    // Replace with your PayPal.me link
    const paypalLink = `https://paypal.me/yourusername/${service.price}`;
    window.open(paypalLink, '_blank');
    toast.success('Redirecting to PayPal', {
      description: 'Complete your payment to get started.',
    });
  };

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center relative mb-16"
      >
        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
          <Sparkles className="h-4 w-4 mr-2" />
          Choose Your Plan
        </span>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary mb-4">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Select the package that best fits your needs. All plans include our award-winning support.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Card className={`relative h-full overflow-hidden border-2 transition-all duration-300 ${
              service.highlighted 
                ? 'border-primary shadow-lg shadow-primary/20' 
                : 'hover:border-primary/50'
            }`}>
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-30`} />
              
              {service.highlighted && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
              )}

              <CardHeader>
                <div className={`mb-4 inline-flex p-3 rounded-xl bg-background shadow-lg ${service.iconColor}`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="min-h-[4rem]">
                  <span className="text-3xl font-bold text-primary block mb-2">
                    ${service.price}
                  </span>
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      custom={featureIndex}
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className={`h-5 w-5 ${service.iconColor}`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  className={`w-full transition-all duration-300 ${
                    service.highlighted 
                      ? 'bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl' 
                      : 'hover:bg-primary hover:text-primary-foreground'
                  }`}
                  onClick={() => handleOrder({
                    title: service.title,
                    price: service.price
                  })}
                >
                  Pay with PayPal
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
