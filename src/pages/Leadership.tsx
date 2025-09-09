import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Leadership: React.FC = () => {
  const leaders = [
    {
      name: "Sarah Johnson",
      title: "Chief Executive Officer",
      bio: "With over 20 years of experience in technology consulting, Sarah leads Technogen's strategic vision and client relationships.",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "sarah.johnson@Technogen.com",
      linkedin: "https://linkedin.com/in/sarah-johnson"
    },
    {
      name: "Michael Chen",
      title: "Chief Technology Officer",
      bio: "Michael oversees our technical delivery and innovation initiatives, bringing 15+ years of enterprise architecture experience.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "michael.chen@Technogen.com",
      linkedin: "https://linkedin.com/in/michael-chen"
    },
    {
      name: "Dr. Amanda Rodriguez",
      title: "Chief Operating Officer",
      bio: "Amanda manages our operations and ensures delivery excellence across all client engagements and internal processes.",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "amanda.rodriguez@Technogen.com",
      linkedin: "https://linkedin.com/in/amanda-rodriguez"
    },
    {
      name: "David Thompson",
      title: "Chief Financial Officer",
      bio: "David brings financial expertise and strategic planning to support Technogen's growth and operational efficiency.",
      image: "https://images.pexels.com/photos/3184340/pexels-photo-3184340.jpeg?auto=compress&cs=tinysrgb&w=400",
      email: "david.thompson@Technogen.com",
      linkedin: "https://linkedin.com/in/david-thompson"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Leadership Team</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Meet the experienced leaders driving innovation and excellence at Technogen
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row gap-6">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-32 h-32 rounded-lg object-cover mx-auto sm:mx-0"
                  />
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                    <p className="text-[#172059] font-semibold mb-4">{leader.title}</p>
                    <p className="text-gray-600 mb-6">{leader.bio}</p>
                    <div className="flex justify-center sm:justify-start space-x-4">
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center text-[#172059] hover:text-[#1a1f4f] transition-colors"
                      >
                        <Mail className="h-5 w-5 mr-1" />
                        Email
                      </a>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#172059] hover:text-[#1a1f4f] transition-colors"
                      >
                        <Linkedin className="h-5 w-5 mr-1" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership team believes in fostering innovation, maintaining transparency, and building lasting relationships 
              with both our clients and team members.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Servant Leadership</h3>
              <p className="text-gray-600">
                We lead by serving others, empowering our team members to achieve their full potential 
                and deliver exceptional value to our clients.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Learning</h3>
              <p className="text-gray-600">
                We embrace continuous learning and adaptation, staying current with emerging technologies 
                and industry best practices to better serve our clients.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Approach</h3>
              <p className="text-gray-600">
                We believe in the power of collaboration, working closely with clients and partners 
                to achieve shared goals and create lasting impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;