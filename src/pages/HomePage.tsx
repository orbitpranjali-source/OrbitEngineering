import { ArrowRight, Cpu, Cloud, Droplets, Settings, X } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { MotionFadeUp, MotionStagger, AnimatedHeading } from '../components/Animated';
import { useState, useRef } from 'react';
import heroGirl from '../assets/hero-village-girl.jpg';
import heroBg from '../assets/products/hero-bg.jpg';
import villageProject2 from '../assets/village-project-2.jpg';
import iconWaterTreatmentPlants from '../assets/icon/Water Treatment Plants.png';
import iconAutomationSystems from '../assets/icon/Automation Systems.png';
import iconCloudManagement from '../assets/icon/Cloud Management.png';
import iconOMServices from '../assets/icon/O&M Services.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

// (CenteredImageSection removed — replaced by DualAnimationSection in Section 2)

// Dual Animation Section Component
function DualAnimationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9
      }
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Text Content */}
          <motion.div variants={leftVariants} className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Innovative Tech to Drive Sustainable Water Management
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0073bc] leading-tight">
              Leveraging advanced automation and cloud-based systems to revolutionize water infrastructure.
            </h3>
          </motion.div>

          {/* Right Side - Image Content */}
          <motion.div variants={rightVariants} className="flex justify-center items-center">
            <img
              src={villageProject2}
              alt="Village water project showcasing sustainable water infrastructure"
              className="w-full h-[400px] md:h-[500px] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,115,188,0.3)] object-cover ring-1 ring-blue-100"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const services = [
    { icon: Droplets, image: iconWaterTreatmentPlants, title: 'Water Treatment Plants', desc: 'Complete WTP, STP, RO, and ETP solutions' },
    { icon: Cpu, image: iconAutomationSystems, title: 'Automation Systems', desc: 'PLC panels, SCADA, and IoT sensors' },
    { icon: Cloud, image: iconCloudManagement, title: 'Cloud Management', desc: 'Real-time monitoring and control systems' },
    { icon: Settings, image: iconOMServices, title: 'O&M Services', desc: 'Comprehensive operation and maintenance' },
  ];



  return (
    <div className="min-h-screen">
      <section
        className="relative text-white overflow-hidden"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* subtle overlay so white text remains readable but image stays visible */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="max-w-3xl lg:pr-10">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0 }}
              >
                Water Tech for a Greener, Resilient and Sustainable Tomorrow
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
              >
                Orbit propels water management beyond convention — harnessing cutting-edge process automation, SCADA, Industry 4.0, cloud technologies, and precision instrumentation to solve real-world water challenges in rural and urban India.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowLearnMore(true)}
                  className="px-8 py-4 bg-white text-[#0073bc] rounded-full font-semibold transition-all duration-300 transform hover:scale-[1.03] hover:bg-blue-50"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative lg:pl-6">
              <motion.img
                src={heroGirl}
                alt="Village girl drinking water from a tap"
                className="w-full h-auto max-h-[520px] object-cover rounded-2xl shadow-2xl ring-1 ring-white/20"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
              />
            </div>
          </div>
        </div>
        {/* removed bottom white fade so background image remains fully visible */}
      </section>

      {/* Section 2: moved DualAnimationSection into this position */}
      <DualAnimationSection />

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedHeading level={2} className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expertise</AnimatedHeading>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive water infrastructure solutions tailored to your needs
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.05}>
            {services.map((service, index) => (
              <MotionFadeUp key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                {service.image ? (
                  <img src={service.image} alt={`${service.title} icon`} className="h-12 w-12 object-contain mb-4 mx-auto" />
                ) : (
                  <service.icon className="h-12 w-12 text-[#0073bc] mb-4 mx-auto" />
                )}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </MotionFadeUp>
            ))}
          </MotionStagger>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('services')}
              className="px-8 py-3 bg-[#0073bc] text-white rounded-full font-semibold hover:bg-[#005a94] transition-all duration-300 transform hover:scale-[1.03] inline-flex items-center space-x-2"
            >
              <span>Explore All Services</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Dual Animation Section removed from here (moved to Section 2) */}

      {showLearnMore && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50" onClick={() => setShowLearnMore(false)}>
          <div
            className="w-full md:max-w-3xl bg-white text-gray-800 rounded-t-2xl md:rounded-2xl shadow-2xl p-6 md:p-8 mx-0 md:mx-4 animate-fade-in animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#0073bc]">About Orbit</h3>
              <button aria-label="Close" onClick={() => setShowLearnMore(false)} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Established in 1998 in Bhopal, the company builds on a legacy exceeding four decades of engineering excellence through its parent firms, Orbit Engineering and Orbit Engineering, to deliver turnkey systems — from design and steel fabrication to PLC/SCADA integration and long-term O&M—through an ISO 9001-certified quality framework that guarantees reliability and ecological accountability.
              </p>
              <p>
                Our ambition is to lead in water innovation — offering holistic, sustainable, and affordable solutions that elevate access to clean water, optimise resource management, and uplift communities.
              </p>
              <p>
                Lead Image of Homepage: A village girl drinking water from a tap.
              </p>
              <p>
                A Clear Mission: innovate with purpose, deliver with integrity, and deliver water systems grounded in environmental stewardship and social well-being—empowering quality water infrastructure across India and beyond.
              </p>
              <p>
                At Orbit, every project is a promise fulfilled — for a cleaner, more resilient tomorrow.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
