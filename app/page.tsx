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
    <main className="relative">
      <Navbar />
      <div className="pt-16"> {/* Add padding top equal to navbar height */}
        <Hero />
        <WhyChooseUs />
        <Features />
        <Services />
        <Testimonials />
        <ContactAndFAQ />
        <Footer />
        <WhatsAppWidget />
      </div>
    </main>
  );
}
