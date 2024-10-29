{/* Previous imports remain the same */}

export default function Hero() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your interest!', {
      description: 'Our team will contact you shortly.',
    });
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <section className="relative bg-gradient-to-b from-background to-background/50 mt-16">
      {/* Gradient background and glowing orbs remain the same */}
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content remains the same */}
          
          {/* Right Column - Form */}
          <Card className="backdrop-blur-sm bg-card/50 border-primary/10 shadow-2xl shadow-primary/5 animate-fade-in">
            <CardHeader className="space-y-1 pb-4">
              <CardTitle className="text-foreground">Get Started Today</CardTitle>
              <CardDescription>
                Fill out the form below for a free consultation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
                  <Input 
                    placeholder="First Name" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                  <Input 
                    placeholder="Last Name" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Input 
                    type="email" 
                    placeholder="Business Email" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                  <Input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                  <Input 
                    placeholder="Company Name" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <div className="space-y-2 animate-slide-up" style={{ animationDelay: '0.5s' }}>
                  <Input 
                    placeholder="Number of Users" 
                    type="number" 
                    required 
                    className="bg-background/50 border-input/20 focus-visible:ring-primary/20" 
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground animate-slide-up group" 
                  size="lg"
                  style={{ animationDelay: '0.6s' }}
                >
                  <PhoneCall className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Schedule Consultation
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-primary hover:underline">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-primary hover:underline">
                    Privacy Policy
                  </a>
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
