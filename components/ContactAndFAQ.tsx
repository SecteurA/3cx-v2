'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { toast } from 'sonner';
import { Mail, Phone, MessageSquare, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

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

export default function ContactAndFAQ() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Message sent successfully!');
      form.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0A1428]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Contact & Support
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Get in touch with us or find answers to common questions
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-lg p-6 border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-white/90">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Doe" 
                            {...field} 
                            className="h-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-white/90">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@example.com" 
                            {...field} 
                            className="h-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-white/90">Phone</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="+1 (555) 000-0000" 
                            {...field} 
                            className="h-10 bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20" 
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm text-white/90">Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your needs..."
                            className="min-h-[100px] resize-none bg-white/5 border-white/10 text-white placeholder:text-white/50 focus-visible:ring-primary/20"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    className="w-full h-11 bg-primary hover:bg-primary/90 text-white group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@3cx-support.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/70">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 000-0000</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-white/[0.03] backdrop-blur-lg rounded-lg p-6 border border-white/10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white">Frequently Asked Questions</h3>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="border-white/10"
                  >
                    <AccordionTrigger className="text-sm text-white hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-white/70">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
