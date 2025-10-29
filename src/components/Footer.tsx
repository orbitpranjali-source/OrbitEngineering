import { Mail, Phone, MapPin, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const quickLinks = [
    { label: 'Home', page: 'home' },
    { label: 'Projects', page: 'projects' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Products', page: 'products' },
    { label: 'FAQ', page: 'faq' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-4">
              Sync Water Tech
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Pioneering water innovation for sustainable communities
            </p>
            <div className="flex space-x-4">
              <a
                href="https://in.linkedin.com/company/sync-watertech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sync WaterTech on LinkedIn"
                className="text-gray-400 hover:text-[#0073bc] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/syncwatertech/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Sync WaterTech on Instagram"
                className="text-gray-400 hover:text-[#0073bc] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-sm text-gray-400 hover:text-[#0073bc] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#0073bc] flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  Flat No.1, Block 12, Shalimar Enclave,<br />
                  E3 Arera Colony, Bhopal, 462016
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#0073bc] flex-shrink-0" />
                <span className="text-sm">+91-9425005008</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#0073bc] flex-shrink-0" />
                <a href="mailto:info@syncwatertech.com" className="text-sm text-gray-400 hover:text-[#0073bc] transition-colors">
                  info@syncwatertech.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Monday - Saturday: 10:00 AM - 7:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Sync Water Tech Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
