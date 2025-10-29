import { Mail, Briefcase, Target } from 'lucide-react';
import subHeadingImage from '../assets/products/sub-heading.jpg';
import heroWaterImage from '../assets/products/hero-section.jpg';
import ourTeamIcon from '../assets/icon/Our Team.png';
import rohitImg from '../assets/team/rohit-arora-2.jpg';
import vijayImg from '../assets/team/vijay-tiwari-2.jpg';

export default function TeamPage() {
  const team = [
    {
      name: 'Rohit Arora',
      role: 'Co-Founder & CEO',
      email: 'rohit@syncwatertech.com',
      description: 'Visionary leader with expertise in water infrastructure and sustainable technology solutions',
      photo: rohitImg
    },
    {
      name: 'Vijay Tiwari',
      role: 'Co-Founder & CTO',
      email: 'vijay@syncwatertech.com',
      description: 'Technical expert specializing in automation, IoT, and advanced water treatment systems',
      photo: vijayImg
    }
  ];

  const openPositions = [
    {
      title: 'Automation Engineer',
      department: 'Engineering',
      location: 'Bhopal, MP',
      type: 'Full-time'
    },
    {
      title: 'Water Treatment Specialist',
      department: 'Operations',
      location: 'Bhopal, MP',
      type: 'Full-time'
    },
    {
      title: 'Project Manager',
      department: 'Project Management',
      location: 'Bhopal, MP',
      type: 'Full-time'
    },
    {
      title: 'Field Service Engineer',
      department: 'Service & Support',
      location: 'Multiple Locations',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative text-white py-20">
        <img src={heroWaterImage} alt="Water technology background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img src={ourTeamIcon} alt="Our Team icon" className="h-20 w-20 mx-auto mb-6 opacity-90 object-contain" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Team
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Meet the visionaries driving water innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Visionaries
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in water technology and infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={`${member.name} photo`}
                    className="w-28 h-28 rounded-full object-cover mx-auto mb-6 ring-4 ring-[#0073bc]/10 shadow-sm"
                    loading="lazy"
                  />
                ) : (
                  <div className="bg-gradient-to-br from-[#0073bc] to-[#005a94] rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-[#0073bc] font-semibold text-center mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-center mb-6 leading-relaxed">
                  {member.description}
                </p>
                <div className="flex items-center justify-center space-x-2 text-gray-700">
                  <Mail className="h-4 w-4 text-[#0073bc]" />
                  <a
                    href={`mailto:${member.email}`}
                    className="text-sm hover:text-[#0073bc] transition-colors"
                  >
                    {member.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Briefcase className="h-12 w-12 mx-auto mb-4 text-[#0073bc]" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Be part of a team that's making a real difference in water infrastructure and sustainability
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Join Sync Water Tech?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Meaningful Work</h4>
                    <p className="text-sm text-gray-600">
                      Work on projects that impact millions of lives
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Innovation Culture</h4>
                    <p className="text-sm text-gray-600">
                      Work with cutting-edge technology
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Growth Opportunities</h4>
                    <p className="text-sm text-gray-600">
                      Continuous learning and career development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-[#0073bc] bg-opacity-10 rounded-lg p-2">
                    <Target className="h-5 w-5 text-[#0073bc]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Collaborative Team</h4>
                    <p className="text-sm text-gray-600">
                      Work with passionate, talented professionals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Current Openings
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100"
                >
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {position.title}
                  </h4>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <p><span className="font-medium">Department:</span> {position.department}</p>
                    <p><span className="font-medium">Location:</span> {position.location}</p>
                    <p><span className="font-medium">Type:</span> {position.type}</p>
                  </div>
                  <button className="w-full py-2.5 bg-[#0073bc] text-white rounded-lg font-medium hover:bg-[#005a94] transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative text-white py-16">
        <img src={subHeadingImage} alt="Careers background" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <a
            href="mailto:careers@syncwatertech.com"
            className="inline-block px-8 py-3 bg-white text-[#0073bc] rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Email Your Resume
          </a>
        </div>
      </section>
    </div>
  );
}
