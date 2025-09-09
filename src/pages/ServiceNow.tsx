import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ExternalLink, Download } from 'lucide-react';

const ServiceNow: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const features = [
    {
      title: "IT Service Management (ITSM)",
      description: "Streamline IT operations with incident, problem, change, and asset management capabilities.",
      benefits: ["Faster issue resolution", "Improved service availability", "Enhanced user satisfaction"]
    },
    {
      title: "IT Operations Management (ITOM)",
      description: "Gain visibility and control over your entire IT infrastructure with monitoring and automation.",
      benefits: ["Proactive monitoring", "Automated remediation", "Reduced downtime"]
    },
    {
      title: "HR Service Delivery",
      description: "Transform HR operations with self-service portals and automated HR processes.",
      benefits: ["Employee self-service", "Automated workflows", "Improved HR efficiency"]
    },
    {
      title: "Customer Service Management",
      description: "Deliver exceptional customer experiences with integrated service management platform.",
      benefits: ["Omnichannel support", "Customer self-service", "Improved resolution times"]
    }
  ];

  const faqs = [
    {
      question: "What is ServiceNow and how can it benefit my organization?",
      answer: "ServiceNow is a cloud-based platform that automates digital workflows across your organization. It can transform IT, HR, customer service, and other business processes by providing a single system of action that connects people, technology, and business processes."
    },
    {
      question: "How long does a typical ServiceNow implementation take?",
      answer: "Implementation timelines vary based on scope and complexity. A basic ITSM implementation typically takes 3-6 months, while comprehensive enterprise-wide deployments can take 9-18 months. We work closely with clients to define realistic timelines and deliver value incrementally."
    },
    {
      question: "What training and support do you provide post-implementation?",
      answer: "We provide comprehensive training programs for end-users and administrators, along with ongoing support and optimization services. Our team offers knowledge transfer sessions, documentation, and continued partnership to ensure your success with the platform."
    },
    {
      question: "Can ServiceNow integrate with our existing systems?",
      answer: "Yes, ServiceNow offers robust integration capabilities through REST APIs, web services, and pre-built connectors. We specialize in integrating ServiceNow with popular enterprise systems including Active Directory, monitoring tools, and business applications."
    },
    {
      question: "What security features does ServiceNow provide?",
      answer: "ServiceNow includes enterprise-grade security features such as role-based access control, data encryption, audit logging, and compliance frameworks. The platform meets various compliance standards including SOX, HIPAA, and government security requirements."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">ServiceNow Solutions</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Transform your organization with the world's leading digital workflow platform
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ServiceNow Platform Capabilities</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for digital transformation across your entire organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-[#172059] rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">ServiceNow Success Stories</h2>
            <p className="text-xl text-gray-600">
              Real results from our ServiceNow implementations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Federal Agency ServiceNow Implementation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Federal Agency ITSM Transformation</h3>
                <p className="text-gray-600 mb-4">
                  Implemented comprehensive ServiceNow ITSM solution, reducing incident resolution time by 60%.
                </p>
                <a
                  href="/case-study-servicenow-federal.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Healthcare ServiceNow ITOM"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare ITOM Implementation</h3>
                <p className="text-gray-600 mb-4">
                  Deployed ServiceNow ITOM for proactive monitoring, improving system uptime to 99.9%.
                </p>
                <a
                  href="/case-study-servicenow-healthcare.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="University HR Service Delivery"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">University HR Service Delivery</h3>
                <p className="text-gray-600 mb-4">
                  Transformed HR processes with ServiceNow, achieving 80% reduction in manual tasks.
                </p>
                <a
                  href="/case-study-servicenow-university.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors"
                >
                  View Case Study
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about ServiceNow implementations
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform with ServiceNow?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact our ServiceNow experts to discuss how we can help accelerate your digital transformation journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <a
              href="/servicenow-overview.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#172059] transition-colors"
            >
              <Download className="mr-2 h-4 w-4" />
              Download Overview
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceNow;