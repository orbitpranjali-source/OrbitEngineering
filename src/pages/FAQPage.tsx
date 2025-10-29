import { useState } from 'react';
import subHeadingImage from '../assets/products/sub-heading.jpg';
import heroWaterImage from '../assets/products/hero-section.jpg';
import { ChevronDown, HelpCircle } from 'lucide-react';
import iconFAQ from '../assets/icon/Frequently Asked Questions.png';

interface FAQPageProps {
  onNavigate?: (page: string) => void;
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {iconFAQ ? (
              <img src={iconFAQ} alt="FAQ icon" className="h-16 w-16 md:h-20 md:w-20 object-contain mx-auto mb-6" />
            ) : (
              <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Find answers to common questions about our services and solutions
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-start justify-between text-left hover:bg-gray-50 transition-colors"
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

      <section className="relative text-white py-16">
        <img src={subHeadingImage} alt="Questions background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Still Have Questions?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Our team is here to help. Get in touch with us for personalized assistance.
          </p>
          <button
            className="px-8 py-3 bg-white text-[#0073bc] rounded-full font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => onNavigate && onNavigate('contact#contact-form')}
          >
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
