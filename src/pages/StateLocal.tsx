import React from 'react';
import { Users, Shield, Building, CheckCircle, ExternalLink } from 'lucide-react';

const StateLocal: React.FC = () => {
  const capabilities = [
    {
      title: "Citizen Services",
      description: "Digital portals and self-service solutions for improved citizen engagement",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Public Safety",
      description: "Emergency management and law enforcement technology solutions",
      icon: <Shield className="h-8 w-8" />
    },
    {
      title: "Infrastructure Management",
      description: "Asset management and infrastructure monitoring systems",
      icon: <Building className="h-8 w-8" />
    }
  ];

  const subIndustries = [
    {
      name: "State Government",
      description: "Comprehensive technology solutions for state-level operations and services",
      capabilities: ["Statewide system integration", "Revenue management", "Healthcare exchanges", "Workforce development"]
    },
    {
      name: "County Government",
      description: "Regional solutions for county administration and public services",
      capabilities: ["Property management systems", "Court administration", "Social services automation", "Public health systems"]
    },
    {
      name: "Municipal Government",
      description: "City and town solutions for local government operations",
      capabilities: ["Utility management", "Permit processing", "Public works systems", "Community engagement platforms"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">State & Local Government Solutions</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Empowering state and local governments with technology solutions that improve citizen services and operational efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">State & Local Capabilities</h2>
            <p className="text-xl text-gray-600">
              Specialized solutions for state and local government needs
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Government Levels We Serve</h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for every level of state and local government
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">State & Local Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real impact from our state and local government projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="State Healthcare Exchange"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">State Healthcare Exchange Modernization</h3>
                <p className="text-gray-600 mb-4">
                  Rebuilt state healthcare marketplace platform, increasing enrollment by 150% 
                  and reducing application processing time by 80%.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">State Government</span>
                  <a
                    href="/case-study-state-healthcare.pdf"
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
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="City Digital Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Municipal Digital Services Platform</h3>
                <p className="text-gray-600 mb-4">
                  Launched comprehensive citizen services portal for major metropolitan city, 
                  processing 500,000+ digital transactions annually.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Municipal Government</span>
                  <a
                    href="/case-study-municipal-digital.pdf"
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

      {/* State Contract Vehicles */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">State & Local Contract Vehicles</h2>
            <p className="text-xl text-blue-100">
              Streamlined procurement through state and local contract vehicles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Maryland CATS</h3>
              <p className="text-blue-100 text-sm">Maryland Cooperative Purchasing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Maryland Health Benefit Exchange</h3>
              <p className="text-blue-100 text-sm">Healthcare technology solutions</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Prince George's County CATS II</h3>
              <p className="text-blue-100 text-sm">County-wide IT services</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Virginia VITA</h3>
              <p className="text-blue-100 text-sm">State IT transformation</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">NASPO ValuePoint</h3>
              <p className="text-blue-100 text-sm">Multi-state cooperative purchasing</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Texas DIR</h3>
              <p className="text-blue-100 text-sm">Texas state IT contracts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateLocal;