import { Palette, Code, Megaphone, Camera } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Palette,
    title: "Brand Design",
    description:
      "Crafting unique visual identities that resonate with your audience and stand the test of time.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building fast, responsive, and beautiful websites that deliver exceptional user experiences.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description:
      "Strategic campaigns that amplify your reach and convert visitors into loyal customers.",
  },
  {
    icon: Camera,
    title: "Content Creation",
    description:
      "Compelling visual and written content that tells your brand's story authentically.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            We offer a comprehensive suite of creative services designed to
            elevate your brand and accelerate your growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group bg-background border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="w-6 h-6 text-accent-foreground group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
