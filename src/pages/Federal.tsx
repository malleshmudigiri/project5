import React from 'react';
import { Shield, Award, CheckCircle, ExternalLink } from 'lucide-react';

const Federal: React.FC = () => {
  const capabilities = [
    {
      title: "Security Clearance Ready",
      description: "Personnel with active security clearances from Secret to TS/SCI levels",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "FedRAMP Authorized",
      description: "Solutions using FedRAMP authorized cloud services and platforms",
      icon: <Award className="h-8 w-8" />
    },
    {
      title: "FISMA Compliant",
      description: "Information security management aligned with federal standards",
      icon: <CheckCircle className="h-8 w-8" />
    }
  ];

  const subIndustries = [
    {
      name: "Department of Defense",
      description: "Mission-critical systems and cybersecurity solutions for defense operations",
      capabilities: ["Secure cloud environments", "DevSecOps implementation", "Mission system modernization"]
    },
    {
      name: "Civilian Agencies",
      description: "Digital transformation and citizen service improvements for federal agencies",
      capabilities: ["ServiceNow implementations", "Data analytics platforms", "Process automation"]
    },
    {
      name: "Intelligence Community",
      description: "Specialized solutions for intelligence and national security operations",
      capabilities: ["Secure data management", "Advanced analytics", "Identity management"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Federal Government Solutions</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Trusted partner for federal agencies with deep expertise in government requirements and security standards
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Federal Capabilities</h2>
            <p className="text-xl text-gray-600">
              Specialized expertise for federal government requirements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{capability.title}</h3>
                <p className="text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sub-Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Federal Sectors We Serve</h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for diverse federal government organizations
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {subIndustries.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{sector.name}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
                  <ul className="space-y-2">
                    {sector.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-center text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Federal Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from our federal government engagements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="DOD Cybersecurity Implementation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">DOD Cybersecurity Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Implemented comprehensive cybersecurity framework improving threat detection by 85% 
                  and reducing incident response time by 70%.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Defense Department</span>
                  <a
                    href="/case-study-dod-cyber.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors"
                  >
                    View Case Study
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Federal Agency Digital Transformation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Federal Agency Cloud Migration</h3>
                <p className="text-gray-600 mb-4">
                  Migrated legacy systems to FedRAMP authorized cloud infrastructure, 
                  achieving 40% cost reduction and improved service reliability.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Civilian Agency</span>
                  <a
                    href="/case-study-federal-cloud.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors"
                  >
                    View Case Study
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Vehicles */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Federal Contract Vehicles</h2>
            <p className="text-xl text-blue-100">
              Streamlined procurement through our federal contract vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">GSA Multiple Award Schedule</h3>
              <p className="text-blue-100 text-sm">Comprehensive IT services and solutions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">CIO-SP3 Small Business</h3>
              <p className="text-blue-100 text-sm">IT services for federal agencies</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">GSA 8(a) Stars III GWAC</h3>
              <p className="text-blue-100 text-sm">Small business IT solutions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">CMS SPARC</h3>
              <p className="text-blue-100 text-sm">Healthcare IT modernization</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">SEWP VI</h3>
              <p className="text-blue-100 text-sm">Technology solutions and services</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">OASIS Small Business</h3>
              <p className="text-blue-100 text-sm">Professional services solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Federal;