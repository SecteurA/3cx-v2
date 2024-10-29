import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import ContactAndFAQ from '@/components/ContactAndFAQ';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <Navbar />
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