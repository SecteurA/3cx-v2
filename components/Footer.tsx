import { Github, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-[#0A1428] text-white/90">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Us</h3>
            <p className="text-sm text-white/70">
              Professional 3CX installation and support services for businesses of all sizes. 
              Certified experts delivering excellence in VoIP solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-primary transition-colors"
                aria-label="View our GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#why-us" className="text-white/70 hover:text-primary transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-white/70 hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#services" className="text-white/70 hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2 text-white/70">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <Mail className="h-4 w-4" />
                <span>support@3cx-support.com</span>
              </li>
              <li className="flex items-center space-x-2 text-white/70">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, Suite 100<br />New York, NY 10001</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-white/70">
              Subscribe to our newsletter for updates and tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-white/50"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} 3CX Installation & Support. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
