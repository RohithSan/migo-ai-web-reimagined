import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About MIGO AI
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Leading the transformation of life sciences through innovative technology and regulatory expertise
            </p>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    MIGO AI is dedicated to empowering pharmaceutical, biotechnology, and medical device companies with cutting-edge solutions that ensure regulatory compliance while driving innovation and operational excellence.
                  </p>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    We leverage advanced artificial intelligence and deep industry expertise to navigate complex regulatory landscapes, enabling our clients to bring life-changing therapies to market faster and more efficiently.
                  </p>
                  <Button variant="hero" size="lg">
                    Learn More About Our Approach
                  </Button>
                </div>
                <Card className="p-8 shadow-elegant border-0 card-gradient">
                  <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Innovation:</strong> Pioneering AI-driven solutions for regulatory challenges</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Excellence:</strong> Delivering the highest quality services and outcomes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Integrity:</strong> Building trust through transparency and ethical practices</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span><strong>Collaboration:</strong> Working as partners to achieve shared success</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our leadership team brings decades of industry expertise, strategic vision, and a commitment to excellence in life sciences innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((leader) => (
                <Card key={leader} className="p-6 text-center shadow-elegant border-0 card-gradient">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-bold text-foreground mb-2">Leadership Member</h3>
                  <p className="text-secondary font-semibold mb-3">Executive Position</p>
                  <p className="text-muted-foreground text-sm">
                    Bringing extensive experience in pharmaceutical operations, regulatory affairs, and technology innovation to drive MIGO AI&apos;s mission forward.
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Global Network */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">Global Network</h2>
              <h3 className="text-2xl text-gradient mb-8">Supporting Clients Worldwide</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                MIGO AI is proud to have a strong global presence, with our headquarters in San Antonio, Texas, and expanding operations worldwide. This strategic network allows us to provide localized expertise and support, ensuring we can effectively serve our clients across diverse markets while fostering innovation and compliance globally.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="p-8 shadow-elegant border-0 card-gradient text-center">
                <h4 className="text-xl font-bold text-foreground mb-4">Corporate Headquarters</h4>
                <p className="text-muted-foreground">
                  700 N St Marys Street, Ste 1400<br />
                  San Antonio, Texas, 78205<br />
                  United States
                </p>
              </Card>
              
              <Card className="p-8 shadow-elegant border-0 card-gradient text-center">
                <h4 className="text-xl font-bold text-foreground mb-4">Expanding Globally</h4>
                <p className="text-muted-foreground">
                  We are continuously expanding our global footprint to better serve our international clients and partners in the life sciences industry.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;