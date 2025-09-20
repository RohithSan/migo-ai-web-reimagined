import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Quality Consultant",
      department: "Quality Services",
      location: "San Antonio, TX / Remote",
      type: "Full-time",
      description: "Lead quality initiatives and GxP compliance projects for pharmaceutical and biotech clients."
    },
    {
      title: "Clinical Project Manager",
      department: "Clinical Services", 
      location: "San Antonio, TX / Remote",
      type: "Full-time",
      description: "Manage clinical trials from initiation to closure, ensuring regulatory compliance and operational excellence."
    },
    {
      title: "Computer System Validation Specialist",
      department: "IT & CSV Services",
      location: "San Antonio, TX / Remote", 
      type: "Full-time",
      description: "Perform CSV activities for computerized systems in pharmaceutical and biotech environments."
    },
    {
      title: "Regulatory Affairs Associate",
      department: "Clinical Services",
      location: "Remote",
      type: "Full-time",
      description: "Support regulatory submissions and maintain compliance with global regulatory requirements."
    },
    {
      title: "AI Solutions Engineer",
      department: "Technology",
      location: "San Antonio, TX",
      type: "Full-time",
      description: "Develop and implement AI-driven solutions for life sciences compliance and operations."
    },
    {
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Drive business growth by identifying and developing new client relationships in the life sciences sector."
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Market-leading salary packages with performance-based bonuses and equity participation."
    },
    {
      title: "Comprehensive Health Benefits",
      description: "Full medical, dental, and vision coverage for you and your family, plus wellness programs."
    },
    {
      title: "Professional Development",
      description: "Continuous learning opportunities, conference attendance, and certification support."
    },
    {
      title: "Flexible Work Arrangements",
      description: "Remote work options, flexible hours, and work-life balance initiatives."
    },
    {
      title: "Innovation Culture",
      description: "Work with cutting-edge AI technology and contribute to revolutionary healthcare solutions."
    },
    {
      title: "Global Impact",
      description: "Make a meaningful difference in bringing life-changing therapies to patients worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ready to Take Your Career to the Next Level? MIGO AI is looking for talented, driven individuals who are passionate about making a meaningful impact in healthcare innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                View Open Positions
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>

        {/* Why MIGO AI */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose MIGO AI?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Join us for a dynamic work environment that promotes professional growth, innovation, and a healthy work-life balance while making a real impact in healthcare.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 shadow-elegant border-0 card-gradient hover:shadow-glow transition-all duration-500">
                  <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Current Opportunities
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Explore exciting career opportunities across our quality, clinical, technology, and business teams.
              </p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {openPositions.map((position, index) => (
                <Card key={index} className="p-6 shadow-lg border-0 card-gradient hover:shadow-elegant transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-4 mb-3">
                        <h3 className="text-xl font-bold text-foreground">{position.title}</h3>
                        <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {position.type}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-secondary rounded-full"></span>
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-primary rounded-full"></span>
                          {position.location}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {position.description}
                      </p>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Button variant="outline" className="hover:variant-cta transition-all duration-300">
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6">
                    Our Culture & Values
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    At MIGO AI, we foster an inclusive environment where innovation thrives, collaboration is valued, and every team member is empowered to make a meaningful contribution to advancing healthcare.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-foreground">Innovation First</h4>
                        <p className="text-muted-foreground">Embrace cutting-edge technology and creative problem-solving</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-foreground">Collaborative Excellence</h4>
                        <p className="text-muted-foreground">Work together to achieve extraordinary results</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-foreground">Continuous Learning</h4>
                        <p className="text-muted-foreground">Invest in personal and professional growth</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <div>
                        <h4 className="font-semibold text-foreground">Patient Impact</h4>
                        <p className="text-muted-foreground">Focus on improving healthcare outcomes globally</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Card className="p-8 shadow-elegant border-0 card-gradient">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Employee Testimonial</h3>
                  <blockquote className="text-muted-foreground italic text-lg leading-relaxed mb-6">
                    "Working at MIGO AI has been incredibly rewarding. The team is supportive, the work is challenging and meaningful, and I feel like I&apos;m truly making a difference in advancing healthcare innovation."
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full"></div>
                    <div>
                      <div className="font-semibold text-foreground">Sarah Johnson</div>
                      <div className="text-sm text-muted-foreground">Senior Quality Consultant</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Application Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We&apos;ve designed our hiring process to be thorough yet efficient, ensuring the best fit for both candidates and our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { step: "1", title: "Application", description: "Submit your resume and cover letter through our careers portal" },
                { step: "2", title: "Screening", description: "Phone or video screening with our HR team to discuss your background" },
                { step: "3", title: "Interview", description: "Technical and cultural fit interviews with team members and managers" },
                { step: "4", title: "Offer", description: "Reference checks, offer discussion, and welcome to the MIGO AI family" }
              ].map((phase, index) => (
                <Card key={index} className="p-6 text-center shadow-lg border-0 card-gradient">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl text-primary-foreground font-bold">{phase.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground">{phase.description}</p>
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
                Ready to Start Your Journey?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join MIGO AI and be part of a team that&apos;s revolutionizing healthcare through innovative technology and regulatory expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
                  Browse Open Positions
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  Contact Recruiting Team
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

export default Careers;