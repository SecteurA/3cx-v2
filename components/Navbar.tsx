'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const menuItems = [
  { label: 'Home', href: '#' },
  { label: 'Why us ?', href: '#why-us' },
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav 
        className={`h-16 transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0A1428]/95 backdrop-blur-md shadow-lg'
            : 'bg-[#0A1428] backdrop-blur-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src="https://www.3cx.fr/wp-content/uploads/sites/20/logo-3.png"
                alt="3CX Logo"
                width={100}
                height={40}
                className="h-8 w-auto"
                priority
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-white hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button 
                className="bg-primary hover:bg-primary/90"
                onClick={() => window.location.href = '#services'}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-white hover:bg-white/10"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent 
                  side="right" 
                  className="w-[300px] bg-[#0A1428]/95 border-white/10"
                >
                  <div className="flex flex-col space-y-6 mt-8">
                    {menuItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="text-lg font-medium text-white hover:text-primary transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button 
                      className="mt-4 bg-primary hover:bg-primary/90 w-full"
                      onClick={() => {
                        window.location.href = '#services';
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
