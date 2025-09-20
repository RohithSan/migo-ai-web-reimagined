import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import itCsvService from "@/assets/it-csv-service.jpg";

const ItCsvServices = () => {
  const itServices = [
    {
      title: "Computer System Validation (CSV)",
      description: "Regulatory compliance mandates rigorous validation of computer systems. Our risk-based approach to CSV delivers customized solutions tailored to your specific needs, ensuring systems consistently deliver accurate and reliable results.",
      features: ["Risk-based validation", "FDA 21 CFR Part 11 compliance", "EU Annex 11 compliance", "Validation documentation"]
    },
    {
      title: "Infrastructure Qualification",
      description: "Your business relies on robust IT infrastructure. We help you build and optimize systems that support daily operations, data integrity, and regulatory compliance across your organization.",
      features: ["Infrastructure assessment", "System optimization", "Network security", "Disaster recovery planning"]
    },
    {
      title: "Data Integrity Solutions",
      description: "Ensure the accuracy, completeness, and reliability of your data throughout its lifecycle with our comprehensive data integrity programs that meet global regulatory requirements.",
      features: ["Data governance frameworks", "ALCOA+ principles", "Data lifecycle management", "Audit trail implementation"]
    },
    {
      title: "Cloud Migration & Security",
      description: "Securely migrate your systems to the cloud while maintaining compliance and data integrity. Our experts ensure seamless transitions with minimal business disruption.",
      features: ["Cloud strategy development", "Migration planning", "Security implementation", "Compliance validation"]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your critical systems and data with comprehensive cybersecurity solutions designed specifically for life sciences organizations and regulatory requirements.",
      features: ["Security assessments", "Threat monitoring", "Incident response", "Compliance reporting"]
    },
    {
      title: "IT Project Management",
      description: "Manage complex IT implementations with our experienced project managers who understand both technology and regulatory requirements in the life sciences industry.",
      features: ["Project planning", "Resource management", "Risk mitigation", "Stakeholder communication"]
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
                  IT & CSV Services
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  MIGO AI offers comprehensive technology support services that are designed to meet your specific needs and priorities while ensuring regulatory compliance.
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
                  src={itCsvService} 
                  alt="IT & CSV Services" 
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
                Advanced Technology Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our IT and Computer System Validation services leverage cutting-edge technology and deep regulatory expertise to ensure your systems are compliant, secure, and optimized for performance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {itServices.map((service, index) => (
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

        {/* Technology Stack */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Technology Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our team has extensive experience with leading technology platforms and regulatory frameworks in the life sciences industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                <h3 className="text-xl font-bold text-foreground mb-4">Regulatory Frameworks</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>FDA 21 CFR Part 11</li>
                  <li>EU Annex 11</li>
                  <li>GAMP 5</li>
                  <li>ICH Guidelines</li>
                </ul>
              </Card>

              <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                <h3 className="text-xl font-bold text-foreground mb-4">Technology Platforms</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Cloud Infrastructure</li>
                  <li>Enterprise Software</li>
                  <li>Laboratory Systems</li>
                  <li>Manufacturing Systems</li>
                </ul>
              </Card>

              <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                <h3 className="text-xl font-bold text-foreground mb-4">Security Standards</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>ISO 27001</li>
                  <li>SOC 2 Type II</li>
                  <li>NIST Framework</li>
                  <li>GDPR Compliance</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* Validation Process */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Our Validation Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow industry best practices and proven methodologies to ensure comprehensive validation that meets regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { step: "1", title: "Assessment", description: "Risk-based assessment of system requirements and regulatory impact" },
                { step: "2", title: "Planning", description: "Comprehensive validation planning with defined deliverables and timelines" },
                { step: "3", title: "Execution", description: "Systematic execution of validation protocols with detailed documentation" },
                { step: "4", title: "Maintenance", description: "Ongoing support and change control to maintain validated state" }
              ].map((phase, index) => (
                <Card key={index} className="p-6 text-center shadow-lg border-0 card-gradient relative">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary-foreground font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-primary transform -translate-y-1/2"></div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="p-12 text-center shadow-elegant border-0 hero-gradient max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">
                Modernize Your IT Infrastructure
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let MIGO AI help you leverage technology to drive innovation while maintaining the highest standards of compliance and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Technology Assessment
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

export default ItCsvServices;