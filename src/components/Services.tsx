import ServiceCard from "./ServiceCard";
import clinicalService from "@/assets/clinical-service.jpg";
import qualityService from "@/assets/quality-service.jpg";
import itCsvService from "@/assets/it-csv-service.jpg";

const Services = () => {
  const services = [
    {
      title: "Clinical Service",
      description: "MIGO AI offers a full range of clinical services to support your trials from initiation to closure.",
      image: clinicalService,
      link: "#clinical"
    },
    {
      title: "Quality Service", 
      description: "We offer extensive Quality and GxP services to support your business from the development phase to post-market surveillance.",
      image: qualityService,
      link: "#quality"
    },
    {
      title: "IT & CSV Service",
      description: "MIGO AI offers comprehensive technology support services that are designed to meet your specific needs and priorities.",
      image: itCsvService,
      link: "#it-csv"
    }
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Empowering the Future of Healthcare
          </h2>
          <h3 className="text-2xl md:text-3xl text-gradient mb-8">
            with GxP Excellence and Innovative Solutions
          </h3>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            MIGO AI empowers pharmaceutical, medical device, and biotech companies with the expertise to navigate regulatory challenges. We ensure successful authority inspections, enabling compliance while driving innovation and operational excellence throughout your development processes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={service.title} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;