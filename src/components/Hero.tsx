import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Abstract lavender waves"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-accent px-4 py-2 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-accent-foreground" />
          <span className="text-sm font-medium text-accent-foreground">
            Creative Studio
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6 leading-tight animate-slide-up">
          Where Imagination
          <br />
          <span className="text-primary">Meets Reality</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-slide-up animation-delay-200">
          We craft extraordinary digital experiences that captivate audiences
          and transform brands into unforgettable stories.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animation-delay-400">
          <Button size="lg" className="group">
            Start Your Journey
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg">
            View Our Work
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto mt-20 animate-fade-in animation-delay-600">
          {[
            { number: "150+", label: "Projects" },
            { number: "50+", label: "Clients" },
            { number: "8+", label: "Years" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-primary">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
