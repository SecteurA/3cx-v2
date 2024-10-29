'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Download, Settings, HeadphonesIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import PaymentModal from './PaymentModal';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
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
    iconColor: 'text-blue-500',
    gradient: 'from-blue-50 to-transparent',
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
    iconColor: 'text-purple-500',
    gradient: 'from-purple-50 to-transparent',
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
    iconColor: 'text-emerald-500',
    gradient: 'from-emerald-50 to-transparent',
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<{
    title: string;
    price: string;
  } | null>(null);

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
          Choose Your Package
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Select the service that best fits your needs
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
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-background shadow-lg ${service.iconColor}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
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
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => setSelectedService({
                    title: service.title,
                    price: service.price
                  })}
                >
                  Order Now
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>

      {selectedService && (
        <PaymentModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </section>
  );
}
