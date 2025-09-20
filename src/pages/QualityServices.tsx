import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import qualityService from "@/assets/quality-service.jpg";

const QualityServices = () => {
  const qualityServices = [
    {
      title: "Quality Management System (QMS) Support",
      description: "A thoughtfully designed and implemented Quality Management System is the cornerstone of organizational success. Our team of seasoned experts specializes in crafting tailored QMS solutions that align seamlessly with your unique needs.",
      features: ["Gap assessments", "Process optimization", "Documentation management", "Compliance monitoring"]
    },
    {
      title: "GxP Auditing Services",
      description: "Strengthen your GxP compliance and mitigate regulatory risks with our comprehensive auditing services. Our experienced auditors conduct thorough assessments to ensure your operations meet the highest regulatory standards.",
      features: ["Internal audits", "Supplier audits", "Risk assessments", "Corrective action plans"]
    },
    {
      title: "Regulatory Compliance Consulting",
      description: "Navigate complex regulatory landscapes with confidence. Our regulatory experts provide strategic guidance to ensure your products meet all applicable requirements across global markets.",
      features: ["Regulatory strategy", "Submission support", "Change control", "Inspection readiness"]
    },
    {
      title: "Quality Training Programs",
      description: "Empower your team with comprehensive training programs designed to build quality culture and ensure consistent compliance across your organization.",
      features: ["GxP training", "Quality awareness", "Documentation training", "Audit preparation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  Quality Services
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  We offer extensive Quality and GxP services to support your business from the development phase to post-market surveillance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg">
                    Get Started
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative">
                <img 
                  src={qualityService} 
                  alt="Quality Services" 
                  className="rounded-lg shadow-elegant w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Comprehensive Quality Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                MIGO AI delivers comprehensive quality services that ensure your organization maintains the highest standards of compliance and operational excellence throughout the product lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {qualityServices.map((service, index) => (
                <Card key={index} className="p-8 shadow-elegant border-0 card-gradient hover:shadow-glow transition-all duration-500">
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-primary rounded-full"></span>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="hover:variant-cta transition-all duration-300">
                    Learn More
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose MIGO AI */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Why Choose MIGO AI for Quality Services?
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our quality experts bring deep industry knowledge and innovative approaches to ensure your organization achieves and maintains excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Our quality professionals have extensive experience across pharmaceutical, biotech, and medical device industries.
                  </p>
                </Card>

                <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Proven Methodology</h3>
                  <p className="text-muted-foreground">
                    We employ risk-based approaches and industry best practices to deliver consistent, reliable results.
                  </p>
                </Card>

                <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-foreground font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Global Compliance</h3>
                  <p className="text-muted-foreground">
                    Stay compliant with FDA, EMA, and other global regulatory requirements with our comprehensive expertise.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center shadow-elegant border-0 hero-gradient max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Enhance Your Quality Systems?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our quality experts today to discuss how MIGO AI can help strengthen your compliance and operational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Contact Our Team
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Request Consultation
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QualityServices;