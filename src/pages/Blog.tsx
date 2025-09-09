import React, { useState } from 'react';
import { Calendar, User, Tag, Search, ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');

  const blogPosts = [
    {
      title: "The Future of AI in Government Operations",
      excerpt: "Exploring how artificial intelligence is transforming public sector efficiency and citizen services through automation, predictive analytics, and intelligent decision-making systems.",
      author: "Dr. Sarah Johnson",
      date: "January 15, 2025",
      category: "AI & Machine Learning",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Artificial Intelligence", "Government", "Automation", "Digital Transformation"]
    },
    {
      title: "Cybersecurity Best Practices for 2025",
      excerpt: "Essential security strategies and frameworks to protect your organization's digital assets in an evolving threat landscape, including zero-trust architecture and advanced threat detection.",
      author: "Michael Chen",
      date: "January 12, 2025",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Cybersecurity", "Zero Trust", "Threat Detection", "Risk Management"]
    },
    {
      title: "Cloud Migration: A Strategic Approach",
      excerpt: "Key considerations and methodologies for successful cloud adoption and migration initiatives, covering assessment, planning, execution, and optimization phases.",
      author: "Amanda Rodriguez",
      date: "January 10, 2025",
      category: "Cloud Computing",
      readTime: "10 min read",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Cloud Migration", "AWS", "Azure", "Digital Transformation"]
    },
    {
      title: "ServiceNow Implementation Success Factors",
      excerpt: "Critical elements that determine the success of ServiceNow deployments, from stakeholder engagement to change management and technical best practices.",
      author: "David Thompson",
      date: "January 8, 2025",
      category: "ServiceNow",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["ServiceNow", "ITSM", "Implementation", "Change Management"]
    },
    {
      title: "Data Analytics in the Public Sector",
      excerpt: "How government agencies are leveraging data analytics to improve decision-making, enhance citizen services, and optimize operational efficiency through evidence-based approaches.",
      author: "Dr. Sarah Johnson",
      date: "January 5, 2025",
      category: "Data Analytics",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Data Analytics", "Government", "Business Intelligence", "Decision Making"]
    },
    {
      title: "Digital Transformation in Higher Education",
      excerpt: "How universities and colleges are modernizing their technology infrastructure to enhance student experiences, improve administrative efficiency, and enable remote learning.",
      author: "Michael Chen",
      date: "January 3, 2025",
      category: "Education Technology",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Education", "Digital Transformation", "Student Experience", "Remote Learning"]
    }
  ];

  const categories = [
    "All Categories",
    "AI & Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "ServiceNow",
    "Data Analytics",
    "Education Technology"
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === '' || categoryFilter === 'All Categories' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-[#172059] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Technology Insights</h1>
            <p className="text-xl lg:text-2xl max-w-3xl mx-auto text-blue-100">
              Stay informed with the latest trends, best practices, and thought leadership in technology and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <select
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category === 'All Categories' ? '' : category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Latest Articles ({filteredPosts.length})
            </h2>
            <p className="text-gray-600">
              Expert insights and analysis from our technology leaders
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-[#172059] text-white text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-[#172059] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag, tagIndex) => (
                      <span key={tagIndex} className="inline-flex items-center px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors">
                    Read Full Article
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-[#172059] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Subscribe to our newsletter for the latest insights, industry trends, and technology updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="px-6 py-3 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;