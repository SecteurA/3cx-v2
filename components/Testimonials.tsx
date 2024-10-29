'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: 'John Smith',
    role: 'CEO',
    company: 'Tech Solutions Inc.',
    content: 'The installation process was smooth and professional. Our team adapted to the new system quickly thanks to their excellent training.',
    rating: 5
  },
  {
    name: 'Sarah Johnson',
    role: 'IT Director',
    company: 'Global Enterprises',
    content: 'Outstanding support team! They are always available and resolve issues quickly. Best decision we made for our communication needs.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Operations Manager',
    company: 'Innovative Corp',
    content: 'The custom configuration perfectly matches our workflow. Significant improvement in our customer service efficiency.',
    rating: 5
  },
  {
    name: 'Emily Brown',
    role: 'Customer Service Manager',
    company: 'Service Pro Ltd',
    content: 'Feature-rich system with excellent call quality. The mobile app is a game-changer for our remote team.',
    rating: 5
  },
  {
    name: 'David Wilson',
    role: 'Technical Lead',
    company: 'Innovate Systems',
    content: 'The technical support team is outstanding. They helped us customize the system perfectly for our needs.',
    rating: 5
  },
  {
    name: 'Lisa Anderson',
    role: 'Office Manager',
    company: 'Dynamic Solutions',
    content: 'Easy to use and manage. The transition from our old system was seamless thanks to their expert guidance.',
    rating: 5
  },
  {
    name: 'Robert Taylor',
    role: 'IT Manager',
    company: 'Growth Technologies',
    content: 'Excellent value for money. The features and support we get are worth every penny invested.',
    rating: 5
  },
  {
    name: 'Jennifer Lee',
    role: 'Operations Director',
    company: 'Smart Services',
    content: 'Highly recommend their full installation package. The additional features and priority support are invaluable.',
    rating: 5
  },
  {
    name: 'Mark Thompson',
    role: 'CTO',
    company: 'Future Tech',
    content: 'Robust system with great scalability. Perfect for growing businesses like ours.',
    rating: 5
  }
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
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
            Don't just take our word for it
          </p>
        </motion.div>

        <div className="relative">
          <div className="ref={emblaRef} overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        "{testimonial.content}"
                      </p>
                      <div className="mt-auto">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </CardContent>
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
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
            onClick={scrollNext}
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
