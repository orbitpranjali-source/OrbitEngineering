import { useState } from 'react';
import subHeadingImage from '../assets/products/sub-heading.jpg';
import heroWaterImage from '../assets/products/hero-section.jpg';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQPageProps {
  onNavigate?: (page: string) => void;
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      question: 'What types of water treatment solutions do you offer?',
      answer: 'Orbit Engineering Group offers a wide range of water treatment solutions to meet various needs, including: Water filtration systems: Remove impurities, contaminants, and suspended solids from water. Water softening systems: Reduce the hardness of water by removing calcium and magnesium ions. Disinfection systems: Eliminate harmful bacteria, viruses, and other microorganisms. Wastewater treatment systems: Treat wastewater to remove pollutants and contaminants before discharge.'
    },
    {
      question: 'How does a Water Treatment Plant improve water quality?',
      answer: 'A WTP removes suspended solids, harmful microorganisms, organic matter, and chemical contaminants through processes such as coagulation, filtration, and disinfection, ensuring safe and potable water supply.'
    },
    {
      question: 'Do you design customized WTP solutions for different capacities?',
      answer: 'Yes, we design customized WTP solutions based on raw water quality, required treatment standards, plant capacity (MLD), and site conditions to ensure efficient and compliant operation.'
    },
    {
      question: 'What factors influence the cost of a Water Treatment Plant?',
      answer: 'The cost depends on plant capacity, treatment technology, raw water quality, automation level, civil and mechanical scope, and long-term operation & maintenance requirements.'
    },
    {
      question: 'How do your SCADA systems help optimise water distribution?',
      answer: 'Our SCADA (Supervisory Control and Data Acquisition) systems provide real-time monitoring and control of water distribution networks. By collecting and analyzing data on water flow, pressure, and consumption, we can optimize operations, identify leaks, and improve efficiency.'
    },
    {
      question: 'Do you offer custom solutions to meet specific needs?',
      answer: 'Yes, we specialise in providing customised solutions to meet the unique requirements of our clients. Our team of experts can work with you to design and implement a water treatment system that is tailored to your specific needs and budget.'
    },
    {
      question: 'How do you determine pricing for your products and services?',
      answer: 'Our pricing is based on several factors, including the size of the project, the complexity of the system, and the specific requirements of the client. We strive to offer competitive pricing while providing high-quality products and services.'
    },
    {
      question: 'How can I contact your customer support team?',
      answer: <>You can contact our customer support team by phone, email, or through our website contact form. Our team is available to assist you with any questions: <a href="mailto:info@orbitengineerings.com" className="text-[#0073bc] hover:underline">info@orbitengineerings.com</a></>
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 opacity-90" />
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
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center">
              Understanding Our Water Treatment Plant (WTP) Solutions
            </h2>
          </div>
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
                    className={`h-5 w-5 text-[#0073bc] flex-shrink-0 transition-transform ${openIndex === index ? 'transform rotate-180' : ''
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
