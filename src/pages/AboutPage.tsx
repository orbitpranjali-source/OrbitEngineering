import { Mail, Phone, MapPin } from 'lucide-react';
import iconInnovation from '../assets/icon/Innovation-Driven.png';
import iconProven from '../assets/icon/Proven Excellence.png';
import iconQuality from '../assets/icon/Quality Assurance.png';
import iconCommunity from '../assets/icon/Community Focus.png';
import iconEndToEnd from '../assets/icon/End-to-End Solutions.png';
import iconResults from '../assets/icon/Results Oriented.png';
import subHeadingImage from '../assets/products/sub-heading.jpg';
const heroWaterImage = new URL('../assets/products/hero-section.jpg', import.meta.url).href;

export default function AboutPage() {
  const whyChooseUs = [
    {
      image: iconInnovation,
      title: 'Innovation-Driven',
      description: 'Pioneering cutting-edge water technology solutions with IoT, automation, and cloud-based monitoring systems'
    },
    {
      image: iconProven,
      title: 'Proven Excellence',
      description: 'Over 15 years of experience delivering complex water infrastructure projects across India'
    },
    {
      image: iconQuality,
      title: 'Quality Assurance',
      description: 'ISO-certified processes ensuring the highest standards in design, installation, and maintenance'
    },
    {
      image: iconCommunity,
      title: 'Community Focus',
      description: 'Dedicated to serving rural and urban communities with sustainable water management solutions'
    },
    {
      image: iconEndToEnd,
      title: 'End-to-End Solutions',
      description: 'Complete project lifecycle management from design and implementation to operation and maintenance'
    },
    {
      image: iconResults,
      title: 'Results Oriented',
      description: 'Committed to measurable outcomes that improve water access, quality, and efficiency'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Sync Water Tech
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering water innovation for sustainable communities
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Pioneering Water Innovation for a Sustainable Future
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Sync Water Tech Pvt Ltd is at the forefront of transforming India's water infrastructure through innovative technology and sustainable practices. Since our inception, we have been committed to addressing the nation's water challenges with intelligent, scalable solutions.
                </p>
                <p>
                  Our expertise spans the complete spectrum of water management from treatment plant automation and IoT-enabled monitoring to comprehensive operation and maintenance services. We specialize in integrating cutting-edge PLC-based automation, SCADA systems, and cloud platforms to deliver real-time control and unprecedented efficiency.
                </p>
                <p>
                  With a portfolio of projects valued at over 200 crores, we have touched millions of lives across urban municipal corporations and rural communities. Our solutions are designed not just for today, but to create resilient water infrastructure for generations to come.
                </p>
                <p>
                  At Sync Water Tech, we believe that sustainable water management is the cornerstone of healthy communities and environmental stewardship. Every project we undertake reflects our commitment to excellence, innovation, and positive social impact.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden text-white">
              <img src={subHeadingImage} alt="Mission and Vision background" className="absolute inset-0 w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 p-8">
                <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  To provide innovative, sustainable, and accessible water management solutions that empower communities, protect natural resources, and build a resilient future for all.
                </p>
                <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
                <p className="text-blue-100 leading-relaxed">
                  To be India's most trusted partner in water infrastructure, recognized for technological excellence, environmental responsibility, and unwavering commitment to community welfare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Sync WaterTech Stands Apart
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our unique combination of expertise, innovation, and commitment sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <img src={item.image} alt={`${item.title} icon`} className="h-16 w-16 object-contain mx-auto" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Let's discuss how we can help with your water infrastructure needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-[#0073bc] bg-opacity-10 rounded-full p-4 inline-block mb-4">
                <MapPin className="h-8 w-8 text-[#0073bc]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Flat No.1, Block 12, Shalimar Enclave,<br />
                E3 Arera Colony, Bhopal, 462016
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0073bc] bg-opacity-10 rounded-full p-4 inline-block mb-4">
                <Phone className="h-8 w-8 text-[#0073bc]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+91-9425005008</p>
            </div>

            <div className="text-center">
              <div className="bg-[#0073bc] bg-opacity-10 rounded-full p-4 inline-block mb-4">
                <Mail className="h-8 w-8 text-[#0073bc]" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">info@syncwatertech.com</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
