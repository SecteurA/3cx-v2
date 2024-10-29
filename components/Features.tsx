'use client';

import { motion } from 'framer-motion';
import { 
  PhoneCall, 
  MessageSquare, 
  Video, 
  Smartphone,
  Headphones,
  BarChart 
} from 'lucide-react';

const features = [
  {
    icon: PhoneCall,
    title: 'HD Voice Calls',
    description: 'Crystal clear audio quality for all your business communications.'
  },
  {
    icon: MessageSquare,
    title: 'Instant Messaging',
    description: 'Seamless team collaboration with built-in chat functionality.'
  },
  {
    icon: Video,
    title: 'Video Conferencing',
    description: 'Professional video meetings with screen sharing capabilities.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Ready',
    description: 'Stay connected on the go with our mobile applications.'
  },
  {
    icon: Headphones,
    title: 'Call Center',
    description: 'Advanced call center features for superior customer service.'
  },
  {
    icon: BarChart,
    title: 'Analytics',
    description: 'Comprehensive reporting and call statistics.'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Features & Benefits
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need for modern business communication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-8 w-8 text-secondary mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
