import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Database, Shield, Users, Zap, BarChart, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Solutions",
      description: "Comprehensive cloud strategy, migration, and optimization services across AWS, Azure, and Google Cloud platforms.",
      features: ["Cloud Assessment & Strategy", "Migration & Modernization", "Cloud Security", "Cost Optimization"],
      link: "/services/cloud"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data & Analytics",
      description: "Transform raw data into actionable insights with modern data platforms, analytics, and AI/ML solutions.",
      features: ["Data Strategy", "Modern Data Platforms", "Business Intelligence", "Machine Learning"],
      link: "/services/data-analytics"
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Hyper Automation",
      description: "Streamline operations and improve efficiency through intelligent automation and workflow optimization.",
      features: ["Process Automation", "RPA Implementation", "Workflow Optimization", "AI-Powered Automation"],
      link: "/services/automation"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cyber Security",
      description: "Comprehensive security solutions to protect your organization from evolving threats and ensure compliance.",
      features: ["Security Assessment", "Identity Management", "Threat Detection", "Compliance Management"],
      link: "/services/cybersecurity"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Experience Management",
      description: "Enhance customer interactions and satisfaction through modern CRM and customer service platforms.",
      features: ["CRM Implementation", "Customer Journey Mapping", "Service Optimization", "Omnichannel Strategy"],
      link: "/services/customer-experience"
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Business Process Management",
      description: "Optimize business processes for improved efficiency, compliance, and organizational performance.",
      features: ["Process Analysis", "Workflow Design", "Performance Monitoring", "Continuous Improvement"],
      link: "/services/bpm"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Comprehensive technology solutions designed to transform your organization and drive measurable results
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-[#172059] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.link}
                  className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ServiceNow Highlight */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#172059] to-[#2a3491] text-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">ServiceNow Platform Excellence</h2>
                <p className="text-blue-100 mb-6">
                  As a ServiceNow Premier Partner, we deliver comprehensive digital workflow solutions 
                  that transform how organizations operate and serve their customers.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    <span className="text-blue-100">IT Service Management (ITSM)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    <span className="text-blue-100">IT Operations Management (ITOM)</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    <span className="text-blue-100">HR Service Delivery</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-200 rounded-full mr-3"></div>
                    <span className="text-blue-100">Customer Service Management</span>
                  </li>
                </ul>
                <Link
                  to="/services/servicenow"
                  className="inline-flex items-center px-6 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Explore ServiceNow Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Cloud className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology and experienced team deliver consistent results across all service areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Team</h3>
              <p className="text-gray-600">
                Our certified professionals bring deep expertise across all major technology platforms 
                and industry best practices to every engagement.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Security First</h3>
              <p className="text-gray-600">
                Security and compliance are built into every solution we deliver, ensuring your 
                organization meets regulatory requirements and industry standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
                <BarChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Measurable Results</h3>
              <p className="text-gray-600">
                We focus on delivering quantifiable business outcomes and ROI, with clear metrics 
                and success criteria defined for every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;