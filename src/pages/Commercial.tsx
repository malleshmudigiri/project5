import React from 'react';
import { Briefcase, TrendingUp, Zap, CheckCircle, ExternalLink } from 'lucide-react';

const Commercial: React.FC = () => {
  const capabilities = [
    {
      title: "Digital Transformation",
      description: "End-to-end modernization of business processes and systems",
      icon: <Zap className="h-8 w-8" />
    },
    {
      title: "Customer Experience",
      description: "Enhanced customer journeys and engagement platforms",
      icon: <Briefcase className="h-8 w-8" />
    },
    {
      title: "Business Growth",
      description: "Technology solutions that drive revenue and operational efficiency",
      icon: <TrendingUp className="h-8 w-8" />
    }
  ];

  const subIndustries = [
    {
      name: "Financial Services",
      description: "Technology solutions for banks, credit unions, and financial institutions",
      capabilities: ["Core banking systems", "Digital banking platforms", "Regulatory compliance", "Risk management"]
    },
    {
      name: "Healthcare",
      description: "Healthcare technology and digital health solutions",
      capabilities: ["Electronic health records", "Patient portals", "Telehealth platforms", "Healthcare analytics"]
    },
    {
      name: "Manufacturing",
      description: "Industrial IoT and smart manufacturing solutions",
      capabilities: ["ERP systems", "Supply chain optimization", "Quality management", "Predictive maintenance"]
    },
    {
      name: "Retail & E-commerce",
      description: "Digital commerce and customer experience solutions",
      capabilities: ["E-commerce platforms", "Inventory management", "Customer analytics", "Omnichannel retail"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Commercial Solutions</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Driving business growth and competitive advantage through innovative technology solutions for the private sector
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Capabilities</h2>
            <p className="text-xl text-gray-600">
              Strategic technology solutions for private sector success
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for diverse commercial sectors
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subIndustries.map((sector, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{sector.name}</h3>
                <p className="text-gray-600 mb-6">{sector.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Solutions:</h4>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Commercial Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real business results from our commercial engagements
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Financial Services Digital Transformation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Services Digital Banking</h3>
                <p className="text-gray-600 mb-4">
                  Implemented comprehensive digital banking platform, increasing customer engagement by 200% 
                  and reducing operational costs by 35%.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Financial Services</span>
                  <a
                    href="/case-study-financial-digital.pdf"
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
                src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing IoT Implementation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Manufacturing IoT Platform</h3>
                <p className="text-gray-600 mb-4">
                  Deployed IoT-enabled manufacturing system achieving 25% productivity improvement 
                  and 40% reduction in unplanned downtime.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Manufacturing</span>
                  <a
                    href="/case-study-manufacturing-iot.pdf"
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

      {/* Commercial Technology Focus */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Commercial Technology Solutions</h2>
            <p className="text-xl text-blue-100">
              Proven technology platforms that drive commercial success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Enterprise Applications</h3>
              <p className="text-blue-100 text-sm">ERP, CRM, and business automation</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Cloud Platforms</h3>
              <p className="text-blue-100 text-sm">AWS, Azure, Google Cloud solutions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Data & Analytics</h3>
              <p className="text-blue-100 text-sm">Business intelligence and AI/ML</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Digital Commerce</h3>
              <p className="text-blue-100 text-sm">E-commerce and digital experiences</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Cybersecurity</h3>
              <p className="text-blue-100 text-sm">Enterprise security solutions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Integration Services</h3>
              <p className="text-blue-100 text-sm">API management and system integration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Commercial;