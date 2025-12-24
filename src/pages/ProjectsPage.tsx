import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import { AnimatedHeading } from '../components/Animated';
import { Building2, CheckCircle2, Clock } from 'lucide-react';

interface ProjectsPageProps {
  initialFilter?: 'all' | 'completed' | 'ongoing';
  onNavigate?: (page: string) => void;
}

export default function ProjectsPage({ initialFilter = 'all', onNavigate }: ProjectsPageProps) {
  const [filter, setFilter] = useState<'all' | 'completed' | 'ongoing'>(initialFilter);
  useEffect(() => {
    setFilter(initialFilter);
  }, [initialFilter]);

  const completedProjects = [
    { name: 'Kymore & Vijayraghavgarh (Package 5D)', client: 'MPUDCL Bhopal', location: 'Madhya Pradesh', status: 'Completed' },
    { name: 'Amarpatan & Ramnagar (Package 7D)', client: 'MPUDCL Bhopal', location: 'Madhya Pradesh', status: 'Completed' },
    { name: 'Harpalpur & Badagaon (Package 6G)', client: 'MPUDCL Bhopal', location: 'Madhya Pradesh', status: 'Completed' },
    { name: 'Bankhedi Turnkey Project', client: 'Central India Pvt Ltd', location: 'Madhya Pradesh', status: 'Completed' },
    { name: 'KARI & Lidhorakhas Water Meter SITC', client: 'Tikamgarh Nagar Parishads', location: 'Tikamgarh', status: 'Completed' },
    { name: 'Gangadhar Meher Lift Irrigation Project', client: 'WRD Bhopal', location: 'Madhya Pradesh', status: 'Completed' },
  ];

  const milestoneProjects = [
    { year: '2015', name: 'Humidity & Temperature Control System', client: 'Prism Cement, Satna', description: 'Delivered a humidity and temperature control turnkey automation system, redefining industrial climate regulation.' },
    { year: '2016', name: 'RO Plant Automation', client: 'Lupin, Mandideep', description: 'Executed a turnkey automation project for the reverse osmosis plant enhancing water purity assurance' },
    { year: '2017', name: '40 KL Turnkey Automation', client: 'Vindhayachal Distillery, Pilukhedi (Bhopal)', description: 'Commissioned a 40 KL turnkey automation project, optimising distillery operations with precision control' },
    { year: '2018', name: '3 MGD Water Treatment Plant', client: 'Bhopal Municipal Corporation, Idgah Hills', description: 'Implemented a 3 MGD water treatment plant with turnkey automation, raising municipal water reliability.' },
    { year: '2020', name: 'Turnkey Instrumentation', client: 'MP Jal Nigam, Punjapura (Neemuch, Badhwani)', description: 'Completed a turnkey instrumentation project, strengthening regional water management capacity' },
    { year: '2021', name: 'Water Supply Scheme Automation', client: 'Indore District (Betma, Gautampura, Depalpur)', description: 'Delivered a fully integrated water supply scheme automation, enhancing service delivery accuracy' },
    { year: '2022', name: '45 MLD Turnkey Automation', client: 'Betul‑Bazar, Amla & Sarni Nagar Parishads (MP)', description: 'Executed a 45 MLD turnkey automation project, significantly boosting urban water infrastructure' },
    { year: '2023', name: '7.6 MLD Sewage Treatment Plant', client: 'Gobranawapra STP (Raipur, C.G.)', description: 'Commissioned a 7.6 MLD sewage treatment plant, advancing environmental compliance through turnkey instrumentation and automation.' },
  ];

  const ongoingProjects = [
    { name: 'Gandhisagar Package 2', description: 'Multi-village water supply scheme automation', client: 'MP Jal Nigam - Dilip Buildcon', location: 'District Neemach', status: 'Ongoing' },
    { name: 'Beohari Multi-Village Scheme', description: 'Comprehensive village water management system', client: 'MP Jal Nigam - Tejas Construction', location: 'Shahdol', status: 'Ongoing' },
    { name: 'Rewa Bansagar Scheme', description: 'Large-scale water distribution automation', client: 'MP Jal Nigam - Dilip Buildcon', location: 'District Rewa', status: 'Ongoing' },
    { name: 'Pahargarh Multi-Village Scheme', description: 'Rural water supply automation project', client: 'MP Jal Nigam - KNK Projects', location: 'District Rajgarh', status: 'Ongoing' },
    { name: 'Narmada Gabhir Multi-Village Scheme', description: 'Advanced water management for multiple villages', client: 'MP Jal Nigam - Dilip Buildcon', location: 'District Ujjain', status: 'Ongoing' },
    { name: 'Gohad Water Supply Scheme', description: 'Modern water supply system with full automation', client: 'MPUDCL Bhopal - Shree Contractor', location: 'Madhya Pradesh', status: 'Ongoing' },
  ];


  // Refs for scroll navigation
  const completedRef = useRef<HTMLDivElement>(null);
  const ongoingRef = useRef<HTMLDivElement>(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0
    }
  };

  // Scroll to section function
  const scrollToSection = (section: 'completed' | 'ongoing') => {
    const targetRef = section === 'completed' ? completedRef : ongoingRef;
    targetRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection title="Our Projects" subtitle="Delivering water infrastructure excellence across India with PLC, SCADA & Automation Systems" />

      {/* Navigation Tabs */}
      <section className="py-8 bg-white border-b relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8"
          >
            <button
              onClick={() => setFilter('all')}
              className="relative z-30 flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              <Building2 className="h-5 w-5 mr-2" />
              All Projects
            </button>
            <button
              onClick={() => scrollToSection('completed')}
              className="relative z-30 flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              <CheckCircle2 className="h-5 w-5 mr-2" />
              Completed Projects
            </button>
            <button
              onClick={() => scrollToSection('ongoing')}
              className="relative z-30 flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-[#0073bc] to-[#005a94] text-white font-semibold hover:from-[#005a94] hover:to-[#004080] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              <Clock className="h-5 w-5 mr-2" />
              Ongoing Projects
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Completed Projects Section */}
          {(filter === 'all' || filter === 'completed') && (
            <motion.div
              ref={completedRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
              className="mb-20"
            >
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl"></div>
                <div className="relative bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-green-500 p-3 rounded-xl mr-4 shadow-lg">
                      <CheckCircle2 className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <AnimatedHeading level={2} className="text-3xl font-bold text-gray-900">
                        Completed Works
                      </AnimatedHeading>
                      <p className="text-gray-600 mt-2">All Executed with PLC, SCADA & Automation Systems</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {completedProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:-translate-y-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow-sm mb-3 inline-block">
                          Delivered
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <div className="text-sm text-gray-600">{project.client}</div>
                          <div className="text-sm text-gray-500">{project.location}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Milestone Projects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-16"
              >
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"></div>
                  <div className="relative bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl p-6">
                    <div className="flex items-center">
                      <div className="bg-blue-500 p-3 rounded-xl mr-4 shadow-lg">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <AnimatedHeading level={3} className="text-2xl font-bold text-gray-900">
                          Our Milestones
                        </AnimatedHeading>
                        <p className="text-gray-600 mt-1 text-sm">These milestones illustrate our unwavering commitment to scalable turnkey automation solutions, grounded in robust project execution, technological excellence, and enduring impact across industrial, municipal, and water‑utility sectors.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                >
                  {milestoneProjects.map((project, index) => (
                    <motion.div
                      key={index}
                      variants={cardVariants}
                      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-5 border border-gray-100 hover:border-blue-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                          {project.year}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-base font-semibold text-gray-900">
                          {project.name}
                        </h4>
                        <p className="text-sm text-gray-600 font-medium">
                          {project.client}
                        </p>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          )}

          {/* Ongoing Projects Section */}
          {(filter === 'all' || filter === 'ongoing') && (
            <motion.div
              ref={ongoingRef}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={sectionVariants}
              className="mb-16"
            >
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl"></div>
                <div className="relative bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="bg-orange-500 p-3 rounded-xl mr-4 shadow-lg">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <AnimatedHeading level={2} className="text-3xl font-bold text-gray-900">
                        Ongoing Projects
                      </AnimatedHeading>
                      <p className="text-gray-600 mt-2">In Progress</p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8"
              >
                {ongoingProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-gray-100 hover:border-orange-200 hover:-translate-y-2"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap shadow-sm mb-3 inline-block">
                          Ongoing
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 leading-relaxed">
                          {project.name}
                        </h3>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 italic">
                        {project.description}
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="text-gray-600 font-medium">{project.client}</div>
                        <div className="text-gray-500">{project.location}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0073bc] to-[#005a94] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedHeading level={2} className="text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </AnimatedHeading>
            <p className="text-lg text-blue-100 mb-8">
              Let's discuss how we can bring innovative water solutions with PLC, SCADA & Automation Systems to your community
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onNavigate && onNavigate('contact')}
              className="px-8 py-3 bg-white text-[#0073bc] rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Request a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
