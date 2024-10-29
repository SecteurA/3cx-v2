'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is included in the basic installation package?',
    answer: 'The basic installation package includes single instance setup, basic configuration, up to 5 extensions, and standard support. Perfect for small businesses getting started with 3CX.'
  },
  {
    question: 'How long does the installation process take?',
    answer: 'Typically, a basic installation takes 2-4 hours, while a full installation may take 4-8 hours depending on your specific requirements and system complexity.'
  },
  {
    question: 'Do you provide ongoing support after installation?',
    answer: 'Yes, we offer ongoing support through our support ticket system. Each ticket is handled by our certified experts with a guaranteed 24-hour response time.'
  },
  {
    question: 'Can I upgrade from basic to full installation later?',
    answer: 'Yes, you can upgrade to the full installation package at any time. We will only charge the difference in price and handle all the necessary upgrades.'
  },
  {
    question: 'What are the system requirements for 3CX?',
    answer: 'The basic requirements include a stable internet connection and compatible IP phones or softphones. 3CX can be hosted either on-premise or in the cloud.'
  }
];

export default function FAQ() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}