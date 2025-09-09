import React from 'react';
import { GraduationCap, Users, Database, CheckCircle, ExternalLink } from 'lucide-react';

const Education: React.FC = () => {
  const capabilities = [
    {
      title: "Learning Management",
      description: "Modern LMS platforms and educational technology solutions",
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      title: "Student Services",
      description: "Comprehensive student information and services systems",
      icon: <Users className="h-8 w-8" />
    },
    {
      title: "Educational Analytics",
      description: "Data-driven insights for improved educational outcomes",
      icon: <Database className="h-8 w-8" />
    }
  ];

  const subIndustries = [
    {
      name: "K-12 Education",
      description: "Technology solutions for primary and secondary education institutions",
      capabilities: ["Student information systems", "Classroom technology", "Parent portals", "Administrative systems"]
    },
    {
      name: "Higher Education",
      description: "Comprehensive solutions for colleges and universities",
      capabilities: ["Campus ERP systems", "Research computing", "Student lifecycle management", "Alumni engagement"]
    },
    {
      name: "Continuing Education",
      description: "Professional development and lifelong learning platforms",
      capabilities: ["Professional certification", "Corporate training", "Skills assessment", "Learning analytics"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Education Solutions</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Transforming education through innovative technology solutions that enhance learning experiences and operational efficiency
            </p>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education Technology Capabilities</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for educational institutions at all levels
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Educational Sectors We Serve</h2>
            <p className="text-xl text-gray-600">
              Tailored solutions for diverse educational environments
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Education Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real impact from our educational technology implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="University Campus Modernization"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">University Campus ERP Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Deployed comprehensive ERP system for major university, streamlining operations 
                  and improving student services across 25,000+ students.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Higher Education</span>
                  <a
                    href="/case-study-university-erp.pdf"
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
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="K-12 Digital Learning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">K-12 District Digital Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Implemented district-wide learning management system and student information platform 
                  serving 50,000+ students and 5,000+ educators.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">K-12 Education</span>
                  <a
                    href="/case-study-k12-digital.pdf"
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

      {/* Educational Technology Focus */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Educational Technology Focus Areas</h2>
            <p className="text-xl text-blue-100">
              Specialized solutions that enhance teaching, learning, and administration
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Learning Management Systems</h3>
              <p className="text-blue-100 text-sm">Canvas, Blackboard, Moodle implementations</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Student Information Systems</h3>
              <p className="text-blue-100 text-sm">PowerSchool, Infinite Campus, Ellucian</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Campus Infrastructure</h3>
              <p className="text-blue-100 text-sm">Network modernization and security</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Data Analytics</h3>
              <p className="text-blue-100 text-sm">Educational insights and reporting</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Digital Accessibility</h3>
              <p className="text-blue-100 text-sm">ADA and Section 508 compliance</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <h3 className="font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-blue-100 text-sm">AWS, Azure, Google for Education</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;