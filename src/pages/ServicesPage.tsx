import { useState } from 'react';
import { Droplets, Settings, FileText, Wrench, Cloud, Cpu, ChevronDown, HelpCircle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import { MotionFadeUp, MotionStagger } from '../components/Animated';
import iconWaterTreatmentPlants from '../assets/icon/Water Treatment Plants.png';
import iconAutomationSystems from '../assets/icon/Automation Systems.png';
import iconOMServices from '../assets/icon/O&M Services.png';
import iconCloudManagement from '../assets/icon/Cloud Management.png';
import iconInstallationCommissioning from '../assets/icon/Installation & Commissioning.png';
import iconConsultancyDesign from '../assets/icon/Consultancy & Design.png';

interface ServicesPageProps {
  onNavigate?: (page: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
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

  const faqs = [
    {
      question: 'What services does Sync Water Tech provide?',
      answer: 'We provide comprehensive water infrastructure solutions including design and installation of Water Treatment Plants (WTP), Sewage Treatment Plants (STP), Reverse Osmosis systems, Effluent Treatment Plants (ETP), PLC-based automation, SCADA systems, IoT sensors, and complete operation and maintenance services.'
    },
    {
      question: 'What regions do you serve?',
      answer: 'We primarily serve projects across Madhya Pradesh and central India, with capabilities to execute projects nationwide. We have successfully completed projects in Bhopal, Indore, Jabalpur, Gwalior, Ujjain, and many other cities across the region.'
    },
    {
      question: 'How does your automation technology work?',
      answer: 'Our automation systems use programmable logic controllers (PLC) integrated with SCADA software and IoT sensors to monitor and control water treatment processes in real-time. This enables remote monitoring, automated control, predictive maintenance, and significant improvements in efficiency and reliability.'
    },
    {
      question: 'What is the typical timeline for a project?',
      answer: 'Project timelines vary based on scope and complexity. Small automation upgrades may take 2-3 months, while large treatment plant installations can take 12-18 months. We provide detailed project schedules during the planning phase and maintain transparent communication throughout execution.'
    },
    {
      question: 'Do you provide operation and maintenance services?',
      answer: 'Yes, we offer comprehensive O&M services including preventive maintenance, emergency repairs, system upgrades, performance monitoring, and 24/7 technical support. We can manage operations for the entire lifecycle of your water infrastructure.'
    },
    {
      question: 'What makes your Clarus Fusion Series unique?',
      answer: 'The Clarus Fusion Series represents our integrated approach combining advanced treatment technology with intelligent automation. It features 30% lower power consumption, 99.5% treatment efficiency, cloud-based monitoring, predictive maintenance, and mobile app control - all in a scalable, energy-optimized platform.'
    },
    {
      question: 'Can you upgrade existing water treatment facilities?',
      answer: 'Absolutely. We specialize in modernizing and automating existing water treatment facilities. This includes retrofitting older plants with PLC controls, adding IoT sensors, implementing cloud monitoring, and upgrading treatment processes to improve efficiency and meet current standards.'
    },
    {
      question: 'What certifications and standards do you follow?',
      answer: 'We follow ISO quality management standards and comply with all relevant Indian and international standards for water treatment and automation. Our designs meet Bureau of Indian Standards (BIS), Central Public Health and Environmental Engineering Organisation (CPHEEO) guidelines, and industry best practices.'
    },
    {
      question: 'How do you ensure water quality in your treatment systems?',
      answer: 'Our systems incorporate multiple quality control measures including multi-stage filtration, real-time monitoring of critical parameters (pH, turbidity, chlorine, TDS), automated chemical dosing, continuous data logging, and alarm systems for any deviations from specified parameters.'
    },
    {
      question: 'What is your approach to energy efficiency?',
      answer: 'Energy efficiency is integral to our designs. We use variable frequency drives, optimized pump scheduling, intelligent control algorithms, energy recovery systems, and renewable energy integration where applicable. Our Clarus Fusion technology achieves 30% lower power consumption compared to conventional systems.'
    },
    {
      question: 'Do you provide training for operating your systems?',
      answer: 'Yes, comprehensive training is included with every installation. We provide hands-on training for operators, maintenance staff, and supervisors covering system operation, routine maintenance, troubleshooting, and emergency procedures. We also provide detailed operation manuals and ongoing technical support.'
    },
    {
      question: 'How can I get a quote for my project?',
      answer: 'Contact us through our website, email, or phone with your project details. Our team will schedule a consultation to understand your requirements, conduct a site assessment if needed, and provide a detailed proposal including scope, timeline, and pricing.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection title="Our Services" subtitle="Comprehensive water infrastructure solutions from concept to maintenance" />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.05}>
            {services.map((service, index) => (
              <MotionFadeUp key={index} className="group bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
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
              </MotionFadeUp>
            ))}
          </MotionStagger>
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

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-[#0073bc]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Find answers to common questions about our services and solutions
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#0073bc] flex-shrink-0 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
