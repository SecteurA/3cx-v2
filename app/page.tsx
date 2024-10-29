import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

// Dynamically import client components
const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: false
});
const ContactAndFAQ = dynamic(() => import('@/components/ContactAndFAQ'), {
  ssr: false
});
const WhatsAppWidget = dynamic(() => import('@/components/WhatsAppWidget'), {
  ssr: false
});

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="animate-fade-in">
        <Navbar />
      </div>
      <div className="animate-fade-in">
        <Hero />
      </div>
      <div className="animate-slide-up">
        <WhyChooseUs />
      </div>
      <div className="animate-slide-up">
        <Features />
      </div>
      <div className="animate-slide-up">
        <Services />
      </div>
      <div className="animate-slide-up">
        <Testimonials />
      </div>
      <div className="animate-slide-up">
        <ContactAndFAQ />
      </div>
      <div className="animate-fade-in">
        <Footer />
      </div>
      <WhatsAppWidget />
    </main>
  );
}
