import { Instagram, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <a href="#home" className="text-3xl font-serif font-bold text-primary-foreground">
              Lumina
            </a>
            <p className="text-secondary-foreground/70 mt-2 max-w-xs">
              Crafting digital experiences that inspire and transform.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-secondary-foreground" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2024 Lumina Creative Studio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
