import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-4 mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Ready to bring your vision to life? We'd love to hear from you.
              Get in touch and let's start a conversation about your next
              project.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">hello@lumina.studio</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-accent-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-foreground font-medium">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-background border border-border rounded-2xl p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    First Name
                  </label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Last Name
                  </label>
                  <Input placeholder="Doe" />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Email
                </label>
                <Input type="email" placeholder="john@example.com" />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
