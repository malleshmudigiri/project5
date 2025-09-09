import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
    {
      category: "Security Clearances",
      items: [
        "Secret Security Clearance Personnel",
        "Top Secret Security Clearance Personnel",
        "TS/SCI Cleared Professionals",
        "Public Trust Clearance"
      ]
    },
    {
      category: "Industry Certifications",
      items: [
        "ISO 27001 Information Security Management",
        "ISO 20000-1 IT Service Management",
        "CMMI Level 3 Services",
        "SOC 2 Type II Compliance"
      ]
    },
    {
      category: "Technology Partnerships",
      items: [
        "AWS Advanced Consulting Partner",
        "ServiceNow Premier Partner",
        "Salesforce Consulting Partner",
        "Microsoft Gold Partner"
      ]
    },
    {
      category: "Government Certifications",
      items: [
        "GSA Multiple Award Schedule",
        "8(a) Small Business Certification",
        "HUBZone Certified",
        "WOSB Certified"
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Certifications & Compliance</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Our certifications demonstrate our commitment to excellence, security, and industry best practices
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#172059] text-white rounded-lg mr-4">
                    {cert.category.includes('Security') ? <Shield className="h-6 w-6" /> : 
                     cert.category.includes('Industry') ? <Award className="h-6 w-6" /> :
                     <CheckCircle className="h-6 w-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cert.category}</h3>
                </div>
                <ul className="space-y-3">
                  {cert.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-600">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Certifications Matter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Certifications Matter</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive certifications and compliance standards ensure we can meet the most stringent 
              requirements across all sectors we serve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security Assurance</h3>
              <p className="text-gray-600">
                Our security clearances and compliance certifications ensure we can handle sensitive 
                government and enterprise data with the highest levels of protection.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality Standards</h3>
              <p className="text-gray-600">
                Industry-standard certifications like ISO 27001 and CMMI Level 3 demonstrate our 
                commitment to delivering consistent, high-quality services.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Access</h3>
              <p className="text-gray-600">
                Our government certifications and contract vehicles provide clients with streamlined 
                procurement processes and compliance with regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Certifications;