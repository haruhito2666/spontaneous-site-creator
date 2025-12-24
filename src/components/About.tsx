import { CheckCircle } from "lucide-react";

const features = [
  "Award-winning creative team",
  "Data-driven strategies",
  "Personalized approach",
  "24/7 dedicated support",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/40 rounded-2xl" />
                <div className="h-64 bg-gradient-to-tr from-accent to-accent/50 rounded-2xl" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 bg-gradient-to-bl from-primary/30 to-primary/60 rounded-2xl" />
                <div className="h-48 bg-gradient-to-tl from-muted to-muted/50 rounded-2xl" />
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-serif font-bold text-primary">8+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Crafting Digital Excellence Since 2016
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We are a passionate team of designers, developers, and strategists
              dedicated to transforming ideas into impactful digital experiences.
              Our collaborative approach ensures that every project reflects our
              commitment to quality and innovation.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From startups to Fortune 500 companies, we've helped businesses
              across the globe achieve their digital ambitions and connect with
              their audiences in meaningful ways.
            </p>

            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
