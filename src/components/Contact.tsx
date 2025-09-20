import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact MIGO AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            If you've got any questions or queries about our services, please get in touch. With extensive global experience, we've encountered every challenge in our sector. We pride ourselves on being approachable, collaborative, and always ready to offer our support.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 shadow-elegant border-0 card-gradient">
            <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="p-6 shadow-lg border-0 card-gradient">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Email</h4>
                  <a 
                    href="mailto:careers@migo.ai" 
                    className="text-primary hover:text-primary-light transition-colors duration-300"
                  >
                    careers@migo.ai
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg border-0 card-gradient">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Phone</h4>
                  <a 
                    href="tel:4084708580" 
                    className="text-primary hover:text-primary-light transition-colors duration-300"
                  >
                    (408) 470-8580
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-lg border-0 card-gradient">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Corporate Office, Texas</h4>
                  <p className="text-muted-foreground">
                    700 N St Marys Street, Ste 1400<br />
                    San Antonio, Texas, 78205
                  </p>
                </div>
              </div>
            </Card>

            <div className="text-center pt-8">
              <h4 className="text-xl font-bold text-foreground mb-4">Ready to Take Your Career to the Next Level?</h4>
              <p className="text-muted-foreground mb-6">
                MIGO AI is looking for talented, driven individuals who are passionate about making a meaningful impact. Join us for a dynamic work environment that promotes professional growth and a healthy work-life balance.
              </p>
              <Button variant="cta" size="lg">
                Join Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;