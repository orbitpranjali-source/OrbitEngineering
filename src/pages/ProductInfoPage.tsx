import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Gauge, Activity, Zap, Camera, Wrench, BarChart3, CheckCircle, ArrowRight, X, Droplet } from 'lucide-react';
import { RAW_SUB_PRODUCTS } from '../data/rawProducts';
import { MotionFadeUp, AnimatedHeading } from '../components/Animated';

interface ProductInfoPageProps {
  variant?: string;
  onNavigate?: (page: string) => void;
}

export default function ProductInfoPage({ onNavigate }: ProductInfoPageProps) {
  const { variant: urlVariant } = useParams<{ variant: string }>();
  const variant = urlVariant; // Use URL param as the source of truth
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const openProductDetail = (item: any) => {
    setSelectedProduct(item);
  };

  const closeProductDetail = () => {
    setSelectedProduct(null);
  };

  const getItemsByCategory = (categoryName: string) => {
    return (RAW_SUB_PRODUCTS.find(c => c.category === categoryName)?.items || []);
  };

  const renderGallery = (categoryName: string) => {
    const items = getItemsByCategory(categoryName);
    // Check if current variant is flow-meters or automation to apply specific grid layout
    const isTwoColumnLayout = variant === 'flow-meters' || variant === 'automation';

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Product Range</h2>
            <p className="text-gray-500 text-lg mb-4">{items.length} products available</p>
            <div className="w-20 h-1 bg-[#0073bc] mx-auto rounded-full mb-6 opacity-20"></div>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-5">
            {items.map((item, idx) => {
              const firstParagraph = Array.isArray(item.paragraphs) && item.paragraphs[0] ? item.paragraphs[0] : '';
              const bullets = Array.isArray(item.bullets) ? item.bullets : [];
              const hasBullets = bullets.length > 0;

              // Dynamic width class based on layout requirement
              const widthClass = isTwoColumnLayout
                ? "w-full md:w-[48%]" // Stacks on small screens, 2-col on MD+
                : "w-full sm:w-[48%] lg:w-[31%]"; // Stacks on small, 2-col on SM/MD, 3-col on LG

              return (
                <MotionFadeUp key={idx} className={`${widthClass} group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col h-full min-h-[480px]`}>
                  <div className="bg-gray-50 flex items-center justify-center p-6 h-[260px]">
                    <img src={item.image} alt={item.name} className="h-full w-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                    {firstParagraph && (
                      <p className="text-gray-500 text-sm leading-6 line-clamp-3 mb-2">{firstParagraph}</p>
                    )}

                    {hasBullets && (
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900 mb-2">Key Features:</p>
                        <ul className="space-y-2">
                          {bullets.slice(0, 4).map((b, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
                      <button
                        onClick={() => openProductDetail(item)}
                        className="px-8 py-2.5 rounded-lg text-sm font-bold bg-[#0073bc] text-white hover:bg-[#005a94] shadow-md hover:shadow-lg transition-all active:scale-95"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </MotionFadeUp>
              );
            })}
          </div>
        </div>
      </section>
    );
  };
  const config: Record<string, {
    title: string;
    description: string;
    icon: any;
    features: string[];
    applications: string[];
    specifications: Array<{ parameter: string; value: string }>;
    image?: string;
  }> = {
    'flow-meters': {
      title: 'Flow Meters',
      description: 'Precision flow measurement solutions for water and wastewater treatment applications with advanced digital capabilities.',
      icon: Gauge,
      features: [
        'High accuracy measurement (±0.5%)',
        'Digital signal processing',
        'Multiple output options (4-20mA, HART, Modbus)',
        'IP65/67 protection rating',
        'Low maintenance design',
        'Wide flow range coverage'
      ],
      applications: [
        'Municipal water treatment',
        'Industrial process monitoring',
        'Wastewater flow measurement',
        'Chemical dosing systems',
        'Distribution network monitoring'
      ],
      specifications: [
        { parameter: 'Accuracy', value: '±0.5% of reading' },
        { parameter: 'Flow Range', value: '0.1 - 15 m/s' },
        { parameter: 'Pressure Rating', value: '16 bar standard' },
        { parameter: 'Temperature Range', value: '-20°C to +80°C' },
        { parameter: 'Protection Rating', value: 'IP65/IP67' },
        { parameter: 'Output Signals', value: '4-20mA, HART, Modbus RTU' }
      ]
    },
    'analyzers': {
      title: 'Analyzers & Transmitters',
      description: 'Advanced online analyzers and intelligent transmitters for continuous water quality monitoring and process control.',
      icon: Activity,
      features: [
        'Real-time water quality monitoring',
        'Multi-parameter analysis capability',
        'Automated calibration systems',
        'Remote data transmission',
        'Predictive maintenance alerts',
        'Cloud-based data analytics'
      ],
      applications: [
        'pH and ORP monitoring',
        'Dissolved oxygen measurement',
        'Turbidity analysis',
        'Chlorine residual monitoring',
        'Conductivity measurement',
        'Nutrient analysis'
      ],
      specifications: [
        { parameter: 'pH Range', value: '0-14 pH units' },
        { parameter: 'Accuracy', value: '±0.1 pH' },
        { parameter: 'Response Time', value: '< 30 seconds' },
        { parameter: 'Calibration Interval', value: '90 days' },
        { parameter: 'Communication', value: 'Modbus, Ethernet, Wireless' },
        { parameter: 'Power Supply', value: '24V DC or AC' }
      ]
    },
    'valves': {
      title: 'Valves & Piping',
      description: 'High-performance valves, actuators, and piping systems designed for demanding water treatment applications.',
      icon: Wrench,
      features: [
        'Corrosion-resistant materials',
        'Precise flow control',
        'Fail-safe operation',
        'Easy maintenance access',
        'Automated actuation options',
        'Long service life'
      ],
      applications: [
        'Process control valves',
        'Isolation and shut-off',
        'Backwash systems',
        'Chemical dosing control',
        'Pressure regulation',
        'Flow distribution'
      ],
      specifications: [
        { parameter: 'Valve Types', value: 'Ball, Butterfly, Gate, Check' },
        { parameter: 'Size Range', value: '1/2" to 48"' },
        { parameter: 'Pressure Rating', value: 'Up to 150 PSI' },
        { parameter: 'Material Options', value: 'SS316, Duplex, Hastelloy' },
        { parameter: 'Actuator Types', value: 'Pneumatic, Electric, Hydraulic' },
        { parameter: 'Standards', value: 'ANSI, DIN, JIS' }
      ]
    },
    'automation': {
      title: 'Automation (IoT / PLC / RTU / SCADA)',
      description: 'Comprehensive automation solutions integrating PLC, RTU, SCADA, and IoT technologies for intelligent water management.',
      icon: Zap,
      features: [
        'Programmable Logic Controllers (PLC)',
        'Remote Terminal Units (RTU)',
        'SCADA supervisory systems',
        'IoT sensor integration',
        'Cloud connectivity',
        'Mobile app control'
      ],
      applications: [
        'Plant automation',
        'Remote monitoring',
        'Process optimization',
        'Alarm management',
        'Data logging and reporting',
        'Predictive maintenance'
      ],
      specifications: [
        { parameter: 'PLC I/O Points', value: 'Up to 1000 digital/analog' },
        { parameter: 'Communication', value: 'Ethernet, Modbus, Profibus' },
        { parameter: 'Operating System', value: 'Real-time embedded' },
        { parameter: 'Memory', value: '32MB program, 128MB data' },
        { parameter: 'Power Supply', value: '24V DC, 110-240V AC' },
        { parameter: 'Environmental', value: '-25°C to +70°C' }
      ]
    },
    'cameras': {
      title: 'Cameras & Vision',
      description: 'Rugged industrial cameras and vision systems for surveillance, monitoring, and automated inspection in water facilities.',
      icon: Camera,
      features: [
        'High-resolution imaging',
        'Night vision capability',
        'Weather-resistant housing',
        'Motion detection',
        'Remote pan-tilt-zoom',
        'Cloud storage integration'
      ],
      applications: [
        'Perimeter security',
        'Process monitoring',
        'Equipment inspection',
        'Safety compliance',
        'Remote site management',
        'Incident documentation'
      ],
      specifications: [
        { parameter: 'Resolution', value: '4K Ultra HD (3840x2160)' },
        { parameter: 'Lens Options', value: 'Fixed, Varifocal, Zoom' },
        { parameter: 'Infrared Range', value: 'Up to 100 meters' },
        { parameter: 'Weather Rating', value: 'IP67/IP68' },
        { parameter: 'Operating Temperature', value: '-40°C to +70°C' },
        { parameter: 'Power Options', value: 'PoE, 12V DC, Solar' }
      ]
    },
    'jointing': {
      title: 'Jointing Machines',
      description: 'Professional butt fusion and electrofusion machines for creating strong, leak-proof joints in plastic piping systems.',
      icon: Wrench,
      features: [
        'Precise temperature control',
        'Automated fusion cycles',
        'Multiple pipe size capability',
        'Portable and stationary models',
        'Quality monitoring systems',
        'Compliance certification'
      ],
      applications: [
        'HDPE pipe joining',
        'PE pipe fusion',
        'PP pipe connections',
        'Electrofusion fittings',
        'Field installations',
        'Repair operations'
      ],
      specifications: [
        { parameter: 'Pipe Diameter', value: '63mm to 1200mm' },
        { parameter: 'Fusion Pressure', value: 'Up to 2.5 MPa' },
        { parameter: 'Temperature Range', value: '200°C to 260°C' },
        { parameter: 'Power Supply', value: '220V/380V AC' },
        { parameter: 'Fusion Time', value: 'Programmable cycles' },
        { parameter: 'Standards', value: 'ISO 21307, ASTM F2620' }
      ]
    },
    'rosemount': {
      title: 'Pressure Transmitter',
      description: 'Ultra-high performance pressure transmitter with coplanar design for demanding flow and level applications.',
      icon: BarChart3,
      features: [
        'Coplanar design for space efficiency',
        'Ultra-high accuracy (±0.025%)',
        'Advanced diagnostics',
        'Wireless connectivity options',
        'Multiple mounting options',
        'Long-term stability'
      ],
      applications: [
        'Flow measurement',
        'Level monitoring',
        'Pressure measurement',
        'Density applications',
        'Interface detection',
        'Process optimization'
      ],
      specifications: [
        { parameter: 'Accuracy', value: '±0.025% of calibrated span' },
        { parameter: 'Range', value: '0.15 to 4000 psi' },
        { parameter: 'Output', value: '4-20mA HART, Foundation Fieldbus' },
        { parameter: 'Response Time', value: '< 100ms' },
        { parameter: 'Ambient Temperature', value: '-40°C to +85°C' },
        { parameter: 'Process Temperature', value: '-40°C to +120°C' }
      ]
    },
    'chlorinators': {
      title: 'Chlorinators',
      description: 'Reliable chlorination systems for automated water disinfection in various industrial and municipal applications.',
      icon: Droplet,
      features: [
        'Automated chlorine dosing',
        'Precise concentration control',
        'Safe chemical handling',
        'Real-time monitoring',
        'Durable corrosion-resistant construction',
        'Easy maintenance design'
      ],
      applications: [
        'Drinking water treatment',
        'Swimming pool disinfection',
        'Cooling tower maintenance',
        'Wastewater treatment',
        'Industrial process water',
        'Marine growth prevention'
      ],
      specifications: [
        { parameter: 'Dosage Rate', value: 'Adjustable up to 50 kg/h' },
        { parameter: 'Control System', value: 'Digital microprocessor' },
        { parameter: 'Material', value: 'PVC / Titanium / Hastelloy' },
        { parameter: 'Power Supply', value: '110-240V AC' },
        { parameter: 'Mounting', value: 'Wall or floor mount' },
        { parameter: 'Accuracy', value: '±1% of set point' }
      ]
    }
  };

  const page = (variant && config[variant]) ? config[variant] : {
    title: 'Product Information',
    description: 'Explore our range of products and solutions designed for modern water systems.',
    icon: Gauge,
    features: [],
    applications: [],
    specifications: []
  };

  const IconComponent = page.icon;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#0073bc] to-[#005a94] text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
                <IconComponent className="w-10 h-10" />
              </div>
              <AnimatedHeading level={1} className="text-4xl md:text-5xl font-bold mb-4">{page.title}</AnimatedHeading>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">{page.description}</p>
            </div>
          </MotionFadeUp>
        </div>
      </section>

      {/* Product Galleries by Category */}
      {variant === 'flow-meters' && renderGallery('Flow Meters')}
      {variant === 'analyzers' && renderGallery('Analyzers & Transmitters')}
      {variant === 'valves' && renderGallery('Valves & Piping')}
      {variant === 'automation' && renderGallery('Automation (IoT / PLC / RTU / SCADA)')}
      {variant === 'cameras' && renderGallery('Cameras & Vision')}
      {variant === 'jointing' && renderGallery('Jointing Machines')}
      {variant === 'rosemount' && renderGallery('Rosemount 3051S Series Coplanar Pressure Transmitter')}
      {variant === 'chlorinators' && renderGallery('Chlorinators')}

      {/* Features Section */}
      {page.features.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedHeading level={2} className="text-3xl font-bold text-gray-900 mb-4">Key Features</AnimatedHeading>
              <p className="text-lg text-gray-600">Advanced capabilities that set our products apart</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {page.features.map((feature, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-[#0073bc]" />
                    </div>
                    <p className="text-gray-700 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Applications Section */}
      {page.applications.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedHeading level={2} className="text-3xl font-bold text-gray-900 mb-4">Applications</AnimatedHeading>
              <p className="text-lg text-gray-600">Where our solutions make a difference</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {page.applications.slice(0, Math.ceil(page.applications.length / 2)).map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-[#0073bc] flex-shrink-0" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {page.applications.slice(Math.ceil(page.applications.length / 2)).map((application, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <ArrowRight className="w-5 h-5 text-[#0073bc] flex-shrink-0" />
                    <span className="text-gray-700">{application}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Specifications Section */}
      {page.specifications.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <AnimatedHeading level={2} className="text-3xl font-bold text-gray-900 mb-4">Technical Specifications</AnimatedHeading>
              <p className="text-lg text-gray-600">Detailed specifications for your technical requirements</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Parameter</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {page.specifications.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{spec.parameter}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm cursor-pointer"
          onClick={closeProductDetail}
        >
          <MotionFadeUp
            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative p-6 md:p-10 cursor-default"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <button
              onClick={closeProductDetail}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-400 hover:text-gray-900 hover:bg-white shadow-sm transition-all z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold text-gray-900">{selectedProduct.name}</h2>

              <div className="bg-gray-50 rounded-3xl p-6 md:p-10 flex items-center justify-center border border-gray-100 overflow-hidden min-h-[300px] md:min-h-[450px]">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="max-w-full max-h-[500px] w-auto h-auto object-contain drop-shadow-xl transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold text-blue-600 mb-4">Product Description</h3>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {Array.isArray(selectedProduct.paragraphs) ? (
                    selectedProduct.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)
                  ) : (
                    <p>{selectedProduct.paragraphs}</p>
                  )}
                </div>
              </div>

              {Array.isArray(selectedProduct.bullets) && selectedProduct.bullets.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-blue-600 mb-4">Key Features & Specifications</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedProduct.bullets.map((bullet: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 bg-white hover:border-blue-200 transition-colors">
                        <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                        <span className="text-gray-800 font-medium">{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4 p-8 rounded-2xl bg-blue-50/50 border border-blue-100">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Need More Information?</h3>
                <p className="text-gray-600 mb-6">Contact our technical team for detailed specifications, pricing, and custom solutions.</p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      closeProductDetail();
                      onNavigate?.('contact');
                    }}
                    className="px-6 py-3 rounded-xl bg-[#0073bc] text-white font-bold hover:bg-[#005a94] transition-all active:scale-95 shadow-lg shadow-blue-200"
                  >
                    Contact Technical Team
                  </button>
                  <a
                    href={selectedProduct.datasheetUrl || '#'}
                    download
                    className="px-6 py-3 rounded-xl border-2 border-blue-200 text-[#0073bc] font-bold hover:bg-blue-50 transition-all active:scale-95 text-center flex items-center justify-center"
                  >
                    Download Datasheet
                  </a>
                </div>
              </div>
            </div>
          </MotionFadeUp>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0073bc] to-[#005a94]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedHeading level={3} className="text-3xl font-bold text-white mb-4">Ready to Get Started?</AnimatedHeading>
          <p className="text-xl text-blue-100 mb-8">Contact our team for detailed specifications, pricing, and technical support.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => onNavigate && onNavigate('contact')}
              className="bg-white text-[#0073bc] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <div className="text-blue-100 text-sm">
              <div>Email: <a href="mailto:info@orbitengineerings.com" className="hover:text-blue-200 transition-colors">info@orbitengineerings.com</a></div>
              <div>Phone: +91 70241 28029</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


