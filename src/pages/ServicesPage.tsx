import { Droplets, Settings, FileText, Wrench, Cloud, Cpu } from 'lucide-react';
import subHeadingImage from '../assets/products/sub-heading.jpg';
import heroWaterImage from '../assets/products/hero-section.jpg';
import iconWaterTreatmentPlants from '../assets/icon/Water Treatment Plants.png';
import iconAutomationSystems from '../assets/icon/Automation Systems.png';
import iconOMServices from '../assets/icon/O&M Services.png';
import iconCloudManagement from '../assets/icon/Cloud Management.png';
import iconInstallationCommissioning from '../assets/icon/Installation & Commissioning.png';
import iconConsultancyDesign from '../assets/icon/Consultancy & Design.png';
import iconOurServices from '../assets/icon/Our Services.png';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      icon: Droplets,
      image: iconWaterTreatmentPlants,
      title: 'Water Treatment Solutions',
      items: [
        'Water Treatment Plants (WTP)',
        'Sewage Treatment Plants (STP)',
        'Reverse Osmosis (RO) Systems',
        'Effluent Treatment Plants (ETP)',
        'Advanced filtration systems'
      ]
    },
    {
      icon: Cpu,
      image: iconAutomationSystems,
      title: 'Automation & Control',
      items: [
        'PLC panel design & installation',
        'SCADA system integration',
        'IoT sensor networks',
        'Real-time monitoring systems',
        'Automated control systems'
      ]
    },
    {
      icon: Wrench,
      image: iconInstallationCommissioning,
      title: 'Installation & Commissioning',
      items: [
        'Complete system installation',
        'Equipment commissioning',
        'Performance testing',
        'System optimization',
        'Training and handover'
      ]
    },
    {
      icon: Settings,
      image: iconOMServices,
      title: 'Operation & Maintenance',
      items: [
        'Preventive maintenance programs',
        'Emergency repair services',
        'System upgrades and retrofits',
        'Performance monitoring',
        '24/7 technical support'
      ]
    },
    {
      icon: FileText,
      image: iconConsultancyDesign,
      title: 'Consultancy & Design',
      items: [
        'Feasibility studies',
        'Detailed engineering design',
        'GPS surveys and mapping',
        'Project planning',
        'Technical documentation'
      ]
    },
    {
      icon: Cloud,
      image: iconCloudManagement,
      title: 'Turnkey Automation & Cloud',
      items: [
        'End-to-end automation solutions',
        'Cloud-based monitoring platforms',
        'Data analytics and reporting',
        'Mobile app integration',
        'Remote system management'
      ]
    }
  ];

  const technicalCapabilities = [
    'Advanced PLC programming (Siemens, Allen Bradley, Schneider)',
    'HMI/SCADA development and deployment',
    'Industrial IoT sensor integration',
    'Cloud platform deployment (AWS, Azure)',
    'Network infrastructure setup',
    'Cybersecurity implementation',
    'Data acquisition systems',
    'Energy management solutions'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              {iconOurServices ? (
                <img src={iconOurServices} alt="Our Services icon" className="h-16 w-16 md:h-20 md:w-20 object-contain mx-auto mb-6" />
              ) : (
                <Settings className="h-16 w-16 mx-auto mb-6 opacity-90" />
              )}
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Comprehensive water infrastructure solutions from concept to maintenance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="icon-wrap mb-6 mx-auto">
                  {service.image ? (
                    <img src={service.image} alt={`${service.title} icon`} className="icon-img icon-hover" />
                  ) : (
                    <service.icon className="h-12 w-12 md:h-14 md:w-14 text-[#0073bc] mx-auto transform transition-transform duration-300 group-hover:scale-105" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <span className="text-[#0073bc] mr-2 mt-1">•</span>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Technical Capabilities
              </h2>
              <p className="text-lg text-gray-600">
                Our technical expertise spans the latest technologies and industry standards
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {technicalCapabilities.map((capability, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3"
                  >
                    <div className="bg-[#0073bc] rounded-full p-1 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Content Management Systems
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We develop custom web-based monitoring and management platforms using modern CMS frameworks including Drupal and Joomla. These systems provide intuitive interfaces for real-time data visualization, reporting, and system control accessible from any device.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-white py-20">
        <img src={subHeadingImage} alt="Custom solutions background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Custom Solutions for Your Needs
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Every project is unique. We tailor our services to meet your specific requirements and objectives.
          </p>
          <button onClick={() => onNavigate && onNavigate('projects')} className="px-8 py-3 bg-white text-[#0073bc] rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Discuss Your Project
          </button>
        </div>
      </section>
    </div>
  );
}
