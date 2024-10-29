'use client';

import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: 'Sarah Thompson',
    role: 'Operations Manager',
    company: 'Tech Solutions Inc.',
    content: 'The installation process was seamless, and the support team was incredibly helpful. Our communication system has never been better!',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'IT Director',
    company: 'Global Innovations',
    content: 'Switching to 3CX has transformed our business communications. The features and reliability are outstanding.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'CEO',
    company: 'StartUp Hub',
    content: 'Best decision we made for our growing startup. The scalability and cost-effectiveness are exactly what we needed.',
    rating: 5
  },
  {
    name: 'David Wilson',
    role: 'Sales Director',
    company: 'Market Leaders Ltd',
    content: 'The mobile integration has allowed our sales team to stay connected wherever they are. Excellent service!',
    rating: 5
  },
  {
    name: 'Lisa Park',
    role: 'Customer Service Manager',
    company: 'Support Pro',
    content: 'The call quality and reliability have significantly improved our customer service capabilities. Highly recommended!',
    rating: 5
  },
  {
    name: 'James Foster',
    role: 'Technical Lead',
    company: 'Innovate Systems',
    content: "The technical support team is outstanding. They have helped us customize the system perfectly for our needs.",
    rating: 5
  },
  {
    name: 'Anna Martinez',
    role: 'HR Director',
    company: 'People First Co',
    content: 'Implementation was smooth and the training provided was excellent. Our team adapted quickly to the new system.',
    rating: 5
  },
  {
    name: 'Robert Kim',
    role: 'Managing Director',
    company: 'Digital Solutions',
    content: "We have seen a significant ROI since implementing 3CX. The value for money is exceptional.",
    rating: 5
  },
  {
    name: 'Sophie Turner',
    role: 'Communications Manager',
    company: 'Media Group',
    content: 'The video conferencing features have revolutionized our remote meetings. Crystal clear quality every time.',
    rating: 5
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 3,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Do not just take our word for it - hear from our satisfied customers
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-[0_0_33.333%] min-w-0"
                >
                  <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
                    <div className="absolute top-4 right-4 text-primary/10">
                      <Quote className="h-12 w-12" />
                    </div>
                    <CardHeader>
                      <div>
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground italic relative">
                        "{testimonial.content}"
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex text-yellow-400">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-current" />
                        ))}
                      </div>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
            onClick={scrollNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
