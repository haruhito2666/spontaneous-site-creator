import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aurora Fashion",
    category: "Branding & Web",
    color: "from-primary/60 to-primary/30",
  },
  {
    title: "TechFlow App",
    category: "UI/UX Design",
    color: "from-accent-foreground/40 to-accent-foreground/20",
  },
  {
    title: "Green Earth",
    category: "Campaign",
    color: "from-chart-3/60 to-chart-3/30",
  },
  {
    title: "Luxe Hotels",
    category: "Photography",
    color: "from-chart-2/60 to-chart-2/30",
  },
];

const Work = () => {
  return (
    <section id="work" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A selection of our recent projects that showcase our expertise and
            creative vision.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-transform duration-500 group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-sm text-primary-foreground/80 mb-1">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-primary-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center backdrop-blur-sm">
                    <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
