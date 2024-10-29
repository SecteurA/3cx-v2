'use client';

import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Certified Experts',
    description: 'Our team consists of certified 3CX professionals with years of hands-on experience.'
  },
  {
    icon: Clock,
    title: 'Quick Response',
    description: '24/7 support with guaranteed response times to keep your system running smoothly.'
  },
  {
    icon: Award,
    title: 'Quality Service',
    description: '98% customer satisfaction rate with hundreds of successful installations.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Tailored solutions that match your specific business requirements and goals.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Experience the difference with our expert 3CX services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="p-3 bg-primary rounded-full">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}