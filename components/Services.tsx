'use client';

// ... (previous imports remain the same)

export default function Services() {
  // ... (previous code remains the same until the Card rendering)

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl relative overflow-hidden">
      {/* Background Elements remain the same */}
      
      {/* Header section remains the same */}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 relative">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="relative"
          >
            <Card className={`relative h-full overflow-hidden border-2 transition-all duration-300 ${
              service.highlighted 
                ? 'border-primary shadow-lg shadow-primary/20' 
                : 'hover:border-primary/50'
            }`}>
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${service.gradient} opacity-30`} />
              
              {service.highlighted && (
                <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-bl-lg">
                  Popular
                </div>
              )}

              <CardHeader>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`inline-flex p-3 rounded-xl bg-background shadow-lg ${service.iconColor}`}>
                    <service.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <CardDescription className="min-h-[4rem]">
                  <span className="text-3xl font-bold text-primary block mb-2">
                    ${service.price}
                  </span>
                  {service.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      custom={featureIndex}
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className={`h-5 w-5 ${service.iconColor}`} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <div 
                  ref={el => paypalButtonsRef.current[service.title] = el}
                  className="w-full"
                />
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
