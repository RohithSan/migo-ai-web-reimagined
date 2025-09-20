import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import clinicalService from "@/assets/clinical-service.jpg";

const ClinicalServices = () => {
  const clinicalServices = [
    {
      title: "Clinical Trial Management",
      description: "Comprehensive clinical trial management services from protocol development through study closure, ensuring efficient execution and regulatory compliance.",
      features: ["Protocol development", "Site management", "Monitoring services", "Data management"]
    },
    {
      title: "Trial Master File (TMF) Management",
      description: "Ensure the quality, integrity, and regulatory compliance of your clinical trial records with our comprehensive TMF management services.",
      features: ["TMF setup and maintenance", "Document management", "Inspection readiness", "Gap analysis"]
    },
    {
      title: "Regulatory Affairs Support",
      description: "Navigate complex regulatory pathways with our experienced regulatory professionals who understand global requirements and submission processes.",
      features: ["Regulatory strategy", "IND/CTA submissions", "Safety reporting", "Regulatory guidance"]
    },
    {
      title: "Clinical Data Management",
      description: "Robust data management solutions that ensure data integrity, quality, and compliance with regulatory standards throughout the clinical trial lifecycle.",
      features: ["Database design", "Data cleaning", "CDISC standards", "Statistical support"]
    },
    {
      title: "Clinical Operations",
      description: "Streamline your clinical operations with our comprehensive support services designed to optimize trial efficiency and patient outcomes.",
      features: ["Site selection", "Patient recruitment", "Training programs", "Quality assurance"]
    },
    {
      title: "Biostatistics & Programming",
      description: "Advanced biostatistical analysis and programming services to support your clinical development programs with accurate, timely insights.",
      features: ["Statistical analysis plans", "Programming support", "Interim analyses", "Regulatory submissions"]
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
                  Clinical Services
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  MIGO AI offers a full range of clinical services to support your trials from initiation to closure, ensuring regulatory compliance and operational excellence.
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
                  src={clinicalService} 
                  alt="Clinical Services" 
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
                End-to-End Clinical Solutions
              </h2>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Our comprehensive clinical services are designed to accelerate your clinical development programs while maintaining the highest standards of quality and compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {clinicalServices.map((service, index) => (
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

        {/* Clinical Excellence */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-foreground mb-6">
                  Clinical Excellence Through Innovation
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our clinical team combines deep therapeutic expertise with cutting-edge technology to deliver superior outcomes for your clinical programs.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Clinical Trials</h3>
                  <p className="text-sm text-muted-foreground">Successfully managed across all phases</p>
                </Card>

                <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Therapeutic Areas</h3>
                  <p className="text-sm text-muted-foreground">Expertise across diverse indications</p>
                </Card>

                <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Inspection Success</h3>
                  <p className="text-sm text-muted-foreground">Perfect regulatory inspection record</p>
                </Card>

                <Card className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Time Reduction</h3>
                  <p className="text-sm text-muted-foreground">Average timeline improvement</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Therapeutic Areas */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Therapeutic Expertise
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our clinical experts have deep experience across multiple therapeutic areas, ensuring specialized knowledge for your specific indication.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "Oncology", "Cardiology", "Neurology", "Immunology",
                "Infectious Disease", "Endocrinology", "Respiratory", "Dermatology",
                "Gastroenterology", "Ophthalmology", "Rare Diseases", "Pediatrics"
              ].map((area, index) => (
                <Card key={index} className="p-4 text-center shadow-md border-0 card-gradient hover:shadow-lg transition-all duration-300">
                  <span className="text-sm font-medium text-foreground">{area}</span>
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
                Accelerate Your Clinical Development
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Partner with MIGO AI to streamline your clinical trials and bring innovative therapies to patients faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Start Your Project
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Schedule Consultation
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

export default ClinicalServices;