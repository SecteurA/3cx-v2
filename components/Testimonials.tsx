{/* Previous imports remain the same */}

{/* Update the navigation buttons */}
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
