import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gradient mb-4">MIGO AI</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              MIGO AI is an integrated Validations, Clinical, and Quality business solutions provider to global life sciences companies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#quality" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  Quality
                </a>
              </li>
              <li>
                <a href="#clinical" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  Clinical
                </a>
              </li>
              <li>
                <a href="#it-csv" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  IT & CSV
                </a>
              </li>
              <li>
                <a href="#simplyqms" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300">
                  SimplyQMS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>
                <a href="mailto:careers@migo.ai" className="hover:text-primary-foreground transition-colors duration-300">
                  careers@migo.ai
                </a>
              </p>
              <p>
                <a href="tel:4084708580" className="hover:text-primary-foreground transition-colors duration-300">
                  (408) 470-8580
                </a>
              </p>
              <p className="text-sm">
                700 N St Marys Street, Ste 1400<br />
                San Antonio, Texas, 78205
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/80">
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Quality and Regulatory</a>
              <a href="#" className="hover:text-primary-foreground transition-colors duration-300">Cookie Policy</a>
              <a href="#contact" className="hover:text-primary-foreground transition-colors duration-300">Contact</a>
            </div>
            <p className="text-sm text-primary-foreground/60">
              © Copyright. 2024. All Rights Reserved. MIGO AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;