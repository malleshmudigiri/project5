// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { ArrowRight, Cloud, Database, Shield, Users, Building, GraduationCap, Briefcase, Globe, Download, ExternalLink } from 'lucide-react';

// // const Home: React.FC = () => {
// //   return (
// //     <div className="pt-16">
// //       {/* Hero Banner */}
// //       <section className="bg-gradient-to-br from-[#172059] via-[#1e2875] to-[#2a3491] text-white py-20 lg:py-32">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// //           <h1 className="text-4xl lg:text-6xl font-bold mb-6">
// //             Transforming Government & Enterprise
// //             <span className="block text-blue-200">Through Innovation</span>
// //           </h1>
// //           <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
// //             We deliver cutting-edge technology solutions that modernize operations, 
// //             enhance security, and drive digital transformation across all sectors.
// //           </p>
// //           <Link
// //             to="/contact"
// //             className="inline-flex items-center px-8 py-4 bg-white text-[#172059] font-semibold rounded-lg hover:bg-gray-100 transition-colors text-lg"
// //           >
// //             Get Started Today
// //             <ArrowRight className="ml-2 h-5 w-5" />
// //           </Link>
// //         </div>
// //       </section>

// //       {/* What We Do - Scrolling Highlight Section */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
// //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// //               We specialize in three core areas that drive organizational transformation
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Users className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Consulting Excellence</h3>
// //               <p className="text-gray-600 text-center">
// //                 Strategic guidance and expert consulting to help organizations navigate complex technology challenges and achieve their digital transformation goals.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Cloud className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Modernization</h3>
// //               <p className="text-gray-600 text-center">
// //                 Legacy system modernization and cloud migration services that bring organizations into the modern digital age with enhanced performance and security.
// //               </p>
// //             </div>
            
// //             <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Database className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI Transformation</h3>
// //               <p className="text-gray-600 text-center">
// //                 Artificial intelligence and machine learning solutions that automate processes, enhance decision-making, and unlock new possibilities for innovation.
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Solutions Snapshot */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Solutions Snapshot</h2>
// //             <p className="text-xl text-gray-600">
// //               Our expertise spans industry-leading platforms and frameworks
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// //             <div className="bg-gray-50 p-6 rounded-lg hover:bg-[#172059] hover:text-white transition-all duration-300 group">
// //               <div className="flex items-center justify-center w-12 h-12 bg-[#172059] group-hover:bg-white text-white group-hover:text-[#172059] rounded-lg mb-4 mx-auto">
// //                 <Cloud className="h-6 w-6" />
// //               </div>
// //               <h3 className="text-lg font-bold text-center">ServiceNow</h3>
// //             </div>
            
// //             <div className="bg-gray-50 p-6 rounded-lg hover:bg-[#172059] hover:text-white transition-all duration-300 group">
// //               <div className="flex items-center justify-center w-12 h-12 bg-[#172059] group-hover:bg-white text-white group-hover:text-[#172059] rounded-lg mb-4 mx-auto">
// //                 <Database className="h-6 w-6" />
// //               </div>
// //               <h3 className="text-lg font-bold text-center">AWS</h3>
// //             </div>
            
// //             <div className="bg-gray-50 p-6 rounded-lg hover:bg-[#172059] hover:text-white transition-all duration-300 group">
// //               <div className="flex items-center justify-center w-12 h-12 bg-[#172059] group-hover:bg-white text-white group-hover:text-[#172059] rounded-lg mb-4 mx-auto">
// //                 <Users className="h-6 w-6" />
// //               </div>
// //               <h3 className="text-lg font-bold text-center">Salesforce</h3>
// //             </div>
            
// //             <div className="bg-gray-50 p-6 rounded-lg hover:bg-[#172059] hover:text-white transition-all duration-300 group">
// //               <div className="flex items-center justify-center w-12 h-12 bg-[#172059] group-hover:bg-white text-white group-hover:text-[#172059] rounded-lg mb-4 mx-auto">
// //                 <Shield className="h-6 w-6" />
// //               </div>
// //               <h3 className="text-lg font-bold text-center">DevSecOps</h3>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Industries Overview */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
// //             <p className="text-xl text-gray-600">
// //               Specialized solutions for diverse sectors
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //             <Link to="/industries/federal" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Building className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Federal Government</h3>
// //               <p className="text-gray-600 text-center text-sm">
// //                 Comprehensive solutions for federal agencies with security clearance and compliance expertise.
// //               </p>
// //             </Link>
            
// //             <Link to="/industries/state-local" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Globe className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">State & Local</h3>
// //               <p className="text-gray-600 text-center text-sm">
// //                 Technology solutions tailored for state and local government operations and citizen services.
// //               </p>
// //             </Link>
            
// //             <Link to="/industries/education" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <GraduationCap className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Education</h3>
// //               <p className="text-gray-600 text-center text-sm">
// //                 Educational technology solutions that enhance learning experiences and administrative efficiency.
// //               </p>
// //             </Link>
            
// //             <Link to="/industries/commercial" className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
// //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// //                 <Briefcase className="h-8 w-8" />
// //               </div>
// //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Commercial</h3>
// //               <p className="text-gray-600 text-center text-sm">
// //                 Enterprise solutions that drive growth, efficiency, and competitive advantage in the private sector.
// //               </p>
// //             </Link>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Case Studies Preview */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Case Studies</h2>
// //             <p className="text-xl text-gray-600">
// //               Real results from our client engagements
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //             <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <img
// //                 src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="Federal Agency Transformation"
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">Federal Agency Digital Transformation</h3>
// //                 <p className="text-gray-600 mb-4">
// //                   How we modernized legacy systems and improved citizen services for a major federal agency.
// //                 </p>
// //                 <a
// //                   href="/case-study-federal.pdf"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center px-4 py-2 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors"
// //                 >
// //                   View Case Study
// //                   <ExternalLink className="ml-2 h-4 w-4" />
// //                 </a>
// //               </div>
// //             </div>
            
// //             <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <img
// //                 src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="Healthcare Innovation"
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare Data Analytics Platform</h3>
// //                 <p className="text-gray-600 mb-4">
// //                   Implementing AI-driven analytics to improve patient outcomes and operational efficiency.
// //                 </p>
// //                 <a
// //                   href="/case-study-healthcare.pdf"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center px-4 py-2 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors"
// //                 >
// //                   View Case Study
// //                   <ExternalLink className="ml-2 h-4 w-4" />
// //                 </a>
// //               </div>
// //             </div>
            
// //             <div className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <img
// //                 src="https://images.pexels.com/photos/3183164/pexels-photo-3183164.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="Enterprise Cloud Migration"
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">Enterprise Cloud Migration</h3>
// //                 <p className="text-gray-600 mb-4">
// //                   Complete AWS migration and modernization for a Fortune 500 company.
// //                 </p>
// //                 <a
// //                   href="/case-study-enterprise.pdf"
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center px-4 py-2 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors"
// //                 >
// //                   View Case Study
// //                   <ExternalLink className="ml-2 h-4 w-4" />
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Blog Preview */}
// //       <section className="py-16 bg-gray-50">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="text-center mb-12">
// //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
// //             <p className="text-xl text-gray-600">
// //               Stay informed with our latest thought leadership and industry insights
// //             </p>
// //           </div>
          
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <img
// //                 src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="AI in Government"
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">The Future of AI in Government Operations</h3>
// //                 <p className="text-gray-600 mb-4">
// //                   Exploring how artificial intelligence is transforming public sector efficiency and citizen services.
// //                 </p>
// //                 <Link
// //                   to="/blog"
// //                   className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors"
// //                 >
// //                   Read More
// //                   <ArrowRight className="ml-1 h-4 w-4" />
// //                 </Link>
// //               </div>
// //             </article>
            
// //             <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <img
// //                 src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="Cybersecurity Best Practices"
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">Cybersecurity Best Practices for 2025</h3>
// //                 <p className="text-gray-600 mb-4">
// //                   Essential security strategies and frameworks to protect your organization's digital assets.
// //                 </p>
// //                 <Link
// //                   to="/blog"
// //                   className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors"
// //                 >
// //                   Read More
// //                   <ArrowRight className="ml-1 h-4 w-4" />
// //                 </Link>
// //               </div>
// //             </article>
            
// //             <article className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
// //               <img
// //                 src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
// //                 alt="Cloud Migration Strategies"
// //                 className="w-full h-48 object-cover"
// //               />
// //               <div className="p-6">
// //                 <h3 className="text-xl font-bold text-gray-900 mb-3">Cloud Migration: A Strategic Approach</h3>
// //                 <p className="text-gray-600 mb-4">
// //                   Key considerations and methodologies for successful cloud adoption and migration initiatives.
// //                 </p>
// //                 <Link
// //                   to="/blog"
// //                   className="inline-flex items-center text-[#172059] font-semibold hover:text-[#1a1f4f] transition-colors"
// //                 >
// //                   Read More
// //                   <ArrowRight className="ml-1 h-4 w-4" />
// //                 </Link>
// //               </div>
// //             </article>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Careers + Contact Section */}
// //       <section className="py-16 bg-white">
// //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
// //             {/* Careers Preview */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 mb-8">Join Our Team</h2>
// //               <p className="text-lg text-gray-600 mb-8">
// //                 Discover exciting career opportunities and grow with our dynamic team of technology professionals.
// //               </p>
              
// //               <div className="space-y-4 mb-8">
// //                 <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
// //                   <h4 className="font-semibold text-gray-900">Senior Cloud Architect</h4>
// //                   <p className="text-gray-600 text-sm">Remote • Full-time • Posted 2 days ago</p>
// //                 </div>
// //                 <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
// //                   <h4 className="font-semibold text-gray-900">ServiceNow Developer</h4>
// //                   <p className="text-gray-600 text-sm">Washington, DC • Full-time • Posted 5 days ago</p>
// //                 </div>
// //                 <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
// //                   <h4 className="font-semibold text-gray-900">Cybersecurity Analyst</h4>
// //                   <p className="text-gray-600 text-sm">Remote • Full-time • Posted 1 week ago</p>
// //                 </div>
// //               </div>
              
// //               <Link
// //                 to="/careers"
// //                 className="inline-flex items-center px-6 py-3 bg-[#172059] text-white rounded-lg hover:bg-[#1a1f4f] transition-colors"
// //               >
// //                 View All Positions
// //                 <ArrowRight className="ml-2 h-4 w-4" />
// //               </Link>
// //             </div>

// //             {/* Contact Form */}
// //             <div>
// //               <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
// //               <p className="text-lg text-gray-600 mb-8">
// //                 Ready to transform your organization? Contact us to discuss your project requirements.
// //               </p>
              
// //               <form className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
// //                       First Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="firstName"
// //                       name="firstName"
// //                       required
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                     />
// //                   </div>
// //                   <div>
// //                     <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
// //                       Last Name *
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="lastName"
// //                       name="lastName"
// //                       required
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                     />
// //                   </div>
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Email *
// //                   </label>
// //                   <input
// //                     type="email"
// //                     id="email"
// //                     name="email"
// //                     required
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                   />
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Company
// //                   </label>
// //                   <input
// //                     type="text"
// //                     id="company"
// //                     name="company"
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                   />
// //                 </div>
                
// //                 <div>
// //                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
// //                     Message *
// //                   </label>
// //                   <textarea
// //                     id="message"
// //                     name="message"
// //                     rows={4}
// //                     required
// //                     className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172059] focus:border-transparent"
// //                     placeholder="Tell us about your project requirements..."
// //                   ></textarea>
// //                 </div>
                
// //                 <button
// //                   type="submit"
// //                   className="w-full px-6 py-3 bg-[#172059] text-white font-semibold rounded-lg hover:bg-[#1a1f4f] transition-colors"
// //                 >
// //                   Send Message
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;
// // // // // "use client"

// // // // // import type React from "react"
// // // // // import { useEffect, useState } from "react"
// // // // // import Link from "next/link"
// // // // // import {
// // // // //   ArrowRight,
// // // // //   Cloud,
// // // // //   Database,
// // // // //   Shield,
// // // // //   Users,
// // // // //   Building,
// // // // //   GraduationCap,
// // // // //   Briefcase,
// // // // //   Globe,
// // // // //   ExternalLink,
// // // // //   Sparkles,
// // // // //   Zap,
// // // // //   Target,
// // // // // } from "lucide-react"
// // // // // import { Button } from "@/components/ui/button"
// // // // // import { Card, CardContent } from "@/components/ui/card"

// // // // // const HomePage: React.FC = () => {
// // // // //   const [isVisible, setIsVisible] = useState(false)
// // // // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

// // // // //   useEffect(() => {
// // // // //     setIsVisible(true)

// // // // //     const handleMouseMove = (e: MouseEvent) => {
// // // // //       setMousePosition({ x: e.clientX, y: e.clientY })
// // // // //     }

// // // // //     window.addEventListener("mousemove", handleMouseMove)
// // // // //     return () => window.removeEventListener("mousemove", handleMouseMove)
// // // // //   }, [])

// // // // //   return (
// // // // //     <div className="min-h-screen bg-background">
// // // // //       {/* Animated Hero Banner */}
// // // // //       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
// // // // //         {/* Animated background elements */}
// // // // //         <div className="absolute inset-0">
// // // // //           {/* Floating particles */}
// // // // //           {[...Array(20)].map((_, i) => (
// // // // //             <div
// // // // //               key={i}
// // // // //               className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
// // // // //               style={{
// // // // //                 left: `${Math.random() * 100}%`,
// // // // //                 top: `${Math.random() * 100}%`,
// // // // //                 animationDelay: `${Math.random() * 3}s`,
// // // // //                 animationDuration: `${2 + Math.random() * 2}s`,
// // // // //               }}
// // // // //             />
// // // // //           ))}

// // // // //           {/* Gradient orbs */}
// // // // //           <div
// // // // //             className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
// // // // //             style={{
// // // // //               transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
// // // // //               left: "10%",
// // // // //               top: "20%",
// // // // //             }}
// // // // //           />
// // // // //           <div
// // // // //             className="absolute w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse"
// // // // //             style={{
// // // // //               transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
// // // // //               right: "10%",
// // // // //               bottom: "20%",
// // // // //               animationDelay: "1s",
// // // // //             }}
// // // // //           />
// // // // //         </div>

// // // // //         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
// // // // //           <div
// // // // //             className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
// // // // //           >
// // // // //             <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm mb-8 animate-bounce">
// // // // //               <Sparkles className="w-4 h-4 mr-2" />
// // // // //               Transforming Digital Futures
// // // // //             </div>

// // // // //             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
// // // // //               <span className="block animate-fade-in-up">Transforming Government</span>
// // // // //               <span className="block animate-fade-in-up animation-delay-300 bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
// // // // //                 & Enterprise Through
// // // // //               </span>
// // // // //               <span className="block animate-fade-in-up animation-delay-600 bg-gradient-to-r from-cyan-200 to-blue-200 bg-clip-text text-transparent">
// // // // //                 Innovation
// // // // //               </span>
// // // // //             </h1>

// // // // //             <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-900">
// // // // //               We deliver cutting-edge technology solutions that modernize operations, enhance security, and drive
// // // // //               digital transformation across all sectors.
// // // // //             </p>

// // // // //             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-1200">
// // // // //               <Button
// // // // //                 size="lg"
// // // // //                 className="bg-white text-slate-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-white/20 transition-all duration-300 hover:scale-105 group"
// // // // //               >
// // // // //                 Get Started Today
// // // // //                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
// // // // //               </Button>

// // // // //               <Button
// // // // //                 variant="outline"
// // // // //                 size="lg"
// // // // //                 className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 bg-transparent"
// // // // //               >
// // // // //                 Watch Demo
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Scroll indicator */}
// // // // //         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
// // // // //           <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
// // // // //             <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* What We Do - Enhanced with animations */}
// // // // //       <section className="py-20 bg-gray-50">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // //               We specialize in three core areas that drive organizational transformation
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             {[
// // // // //               {
// // // // //                 icon: Users,
// // // // //                 title: "Consulting Excellence",
// // // // //                 description:
// // // // //                   "Strategic guidance and expert consulting to help organizations navigate complex technology challenges and achieve their digital transformation goals.",
// // // // //                 delay: "0ms",
// // // // //               },
// // // // //               {
// // // // //                 icon: Cloud,
// // // // //                 title: "Modernization",
// // // // //                 description:
// // // // //                   "Legacy system modernization and cloud migration services that bring organizations into the modern digital age with enhanced performance and security.",
// // // // //                 delay: "200ms",
// // // // //               },
// // // // //               {
// // // // //                 icon: Database,
// // // // //                 title: "AI Transformation",
// // // // //                 description:
// // // // //                   "Artificial intelligence and machine learning solutions that automate processes, enhance decision-making, and unlock new possibilities for innovation.",
// // // // //                 delay: "400ms",
// // // // //               },
// // // // //             ].map((item, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-lg animate-fade-in-up"
// // // // //                 style={{ animationDelay: item.delay }}
// // // // //               >
// // // // //                 <CardContent className="p-8 text-center">
// // // // //                   <div className="flex items-center justify-center w-16 h-16 bg-slate-900 text-white rounded-xl mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
// // // // //                     <item.icon className="h-8 w-8" />
// // // // //                   </div>
// // // // //                   <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
// // // // //                   <p className="text-gray-600 leading-relaxed">{item.description}</p>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* How We Do Differently - New animated section */}
// // // // //       <section className="py-20 bg-white relative overflow-hidden">
// // // // //         <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
// // // // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">How We Do Differently</h2>
// // // // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // // // //               Our unique approach sets us apart in delivering exceptional results
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// // // // //             <div className="space-y-8">
// // // // //               {[
// // // // //                 {
// // // // //                   icon: Target,
// // // // //                   title: "Strategic Focus",
// // // // //                   description: "We align technology solutions with your business objectives for maximum impact.",
// // // // //                 },
// // // // //                 {
// // // // //                   icon: Zap,
// // // // //                   title: "Rapid Implementation",
// // // // //                   description: "Our agile methodology ensures faster time-to-value and reduced project risks.",
// // // // //                 },
// // // // //                 {
// // // // //                   icon: Shield,
// // // // //                   title: "Security First",
// // // // //                   description: "Built-in security and compliance from day one, not as an afterthought.",
// // // // //                 },
// // // // //               ].map((item, index) => (
// // // // //                 <div key={index} className="flex items-start space-x-4 group">
// // // // //                   <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
// // // // //                     <item.icon className="h-6 w-6" />
// // // // //                   </div>
// // // // //                   <div>
// // // // //                     <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
// // // // //                     <p className="text-gray-600">{item.description}</p>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>

// // // // //             <div className="relative">
// // // // //               <div className="aspect-square bg-gradient-to-br from-slate-900 to-blue-900 rounded-2xl p-8 text-white">
// // // // //                 <div className="h-full flex flex-col justify-center items-center text-center">
// // // // //                   <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-6 animate-pulse">
// // // // //                     <Sparkles className="h-10 w-10" />
// // // // //                   </div>
// // // // //                   <h3 className="text-2xl font-bold mb-4">Innovation Driven</h3>
// // // // //                   <p className="text-blue-100">
// // // // //                     We leverage cutting-edge technologies and methodologies to deliver solutions that exceed
// // // // //                     expectations.
// // // // //                   </p>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Our Expertise - Enhanced */}
// // // // //       <section className="py-20 bg-gray-50">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Expertise</h2>
// // // // //             <p className="text-xl text-gray-600">
// // // // //               Comprehensive solutions across consulting, modernization, and AI transformation
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             {[
// // // // //               { title: "Consulting", icon: Users, color: "from-blue-500 to-blue-600" },
// // // // //               { title: "Modernization", icon: Cloud, color: "from-indigo-500 to-indigo-600" },
// // // // //               { title: "AI Transformation", icon: Database, color: "from-purple-500 to-purple-600" },
// // // // //             ].map((item, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
// // // // //               >
// // // // //                 <CardContent className="p-0">
// // // // //                   <div className={`h-32 bg-gradient-to-r ${item.color} flex items-center justify-center`}>
// // // // //                     <item.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
// // // // //                   </div>
// // // // //                   <div className="p-6">
// // // // //                     <h3 className="text-xl font-bold text-gray-900 text-center">{item.title}</h3>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Our Solutions - Enhanced */}
// // // // //       <section className="py-20 bg-white">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Solutions</h2>
// // // // //             <p className="text-xl text-gray-600">Industry-leading platforms and cutting-edge technologies</p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
// // // // //             {[
// // // // //               { name: "ServiceNow", icon: Cloud },
// // // // //               { name: "AWS", icon: Database },
// // // // //               { name: "Salesforce", icon: Users },
// // // // //               { name: "DevSecOps Transformation", icon: Shield },
// // // // //             ].map((solution, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer"
// // // // //               >
// // // // //                 <CardContent className="p-6 text-center">
// // // // //                   <div className="flex items-center justify-center w-12 h-12 bg-slate-900 group-hover:bg-white text-white group-hover:text-slate-900 rounded-lg mb-4 mx-auto transition-colors duration-300">
// // // // //                     <solution.icon className="h-6 w-6" />
// // // // //                   </div>
// // // // //                   <h3 className="text-lg font-bold">{solution.name}</h3>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Industries Overview */}
// // // // //       <section className="py-16 bg-gray-50">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="text-center mb-12">
// // // // //             <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
// // // // //             <p className="text-xl text-gray-600">Specialized solutions for diverse sectors</p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// // // // //             <Link
// // // // //               to="/industries/federal"
// // // // //               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// // // // //             >
// // // // //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// // // // //                 <Building className="h-8 w-8" />
// // // // //               </div>
// // // // //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Federal Government</h3>
// // // // //               <p className="text-gray-600 text-center text-sm">
// // // // //                 Comprehensive solutions for federal agencies with security clearance and compliance expertise.
// // // // //               </p>
// // // // //             </Link>

// // // // //             <Link
// // // // //               to="/industries/state-local"
// // // // //               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// // // // //             >
// // // // //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// // // // //                 <Globe className="h-8 w-8" />
// // // // //               </div>
// // // // //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">State & Local</h3>
// // // // //               <p className="text-gray-600 text-center text-sm">
// // // // //                 Technology solutions tailored for state and local government operations and citizen services.
// // // // //               </p>
// // // // //             </Link>

// // // // //             <Link
// // // // //               to="/industries/education"
// // // // //               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// // // // //             >
// // // // //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// // // // //                 <GraduationCap className="h-8 w-8" />
// // // // //               </div>
// // // // //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Education</h3>
// // // // //               <p className="text-gray-600 text-center text-sm">
// // // // //                 Educational technology solutions that enhance learning experiences and administrative efficiency.
// // // // //               </p>
// // // // //             </Link>

// // // // //             <Link
// // // // //               to="/industries/commercial"
// // // // //               className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
// // // // //             >
// // // // //               <div className="flex items-center justify-center w-16 h-16 bg-[#172059] text-white rounded-lg mb-6 mx-auto">
// // // // //                 <Briefcase className="h-8 w-8" />
// // // // //               </div>
// // // // //               <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Commercial</h3>
// // // // //               <p className="text-gray-600 text-center text-sm">
// // // // //                 Enterprise solutions that drive growth, efficiency, and competitive advantage in the private sector.
// // // // //               </p>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Testimonials - Enhanced */}
// // // // //       <section className="py-20 bg-gray-50">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Client Success Stories</h2>
// // // // //             <p className="text-xl text-gray-600">Real results from our client partnerships</p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             {[
// // // // //               {
// // // // //                 title: "Federal Agency Digital Transformation",
// // // // //                 description:
// // // // //                   "How we modernized legacy systems and improved citizen services for a major federal agency.",
// // // // //                 image: "/placeholder-4og86.png",
// // // // //               },
// // // // //               {
// // // // //                 title: "Healthcare Data Analytics Platform",
// // // // //                 description: "Implementing AI-driven analytics to improve patient outcomes and operational efficiency.",
// // // // //                 image: "/placeholder-sozfn.png",
// // // // //               },
// // // // //               {
// // // // //                 title: "Enterprise Cloud Migration",
// // // // //                 description: "Complete AWS migration and modernization for a Fortune 500 company.",
// // // // //                 image: "/cloud-computing-infrastructure.jpg",
// // // // //               },
// // // // //             ].map((testimonial, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
// // // // //               >
// // // // //                 <CardContent className="p-0">
// // // // //                   <img
// // // // //                     src={testimonial.image || "/placeholder.svg"}
// // // // //                     alt={testimonial.title}
// // // // //                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// // // // //                   />
// // // // //                   <div className="p-6">
// // // // //                     <h3 className="text-xl font-bold text-gray-900 mb-3">{testimonial.title}</h3>
// // // // //                     <p className="text-gray-600 mb-4">{testimonial.description}</p>
// // // // //                     <Button
// // // // //                       variant="outline"
// // // // //                       size="sm"
// // // // //                       className="group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300 bg-transparent"
// // // // //                     >
// // // // //                       View Case Study
// // // // //                       <ExternalLink className="ml-2 h-4 w-4" />
// // // // //                     </Button>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Blogs - Enhanced */}
// // // // //       <section className="py-20 bg-white">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="text-center mb-16">
// // // // //             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Latest Insights</h2>
// // // // //             <p className="text-xl text-gray-600">
// // // // //               Stay informed with our latest thought leadership and industry insights
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // // // //             {[
// // // // //               {
// // // // //                 title: "The Future of AI in Government Operations",
// // // // //                 description:
// // // // //                   "Exploring how artificial intelligence is transforming public sector efficiency and citizen services.",
// // // // //                 image: "/placeholder-cpir0.png",
// // // // //               },
// // // // //               {
// // // // //                 title: "Cybersecurity Best Practices for 2025",
// // // // //                 description:
// // // // //                   "Essential security strategies and frameworks to protect your organization's digital assets.",
// // // // //                 image: "/cybersecurity-shield.png",
// // // // //               },
// // // // //               {
// // // // //                 title: "Cloud Migration: A Strategic Approach",
// // // // //                 description:
// // // // //                   "Key considerations and methodologies for successful cloud adoption and migration initiatives.",
// // // // //                 image: "/placeholder-jimya.png",
// // // // //               },
// // // // //             ].map((blog, index) => (
// // // // //               <Card
// // // // //                 key={index}
// // // // //                 className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
// // // // //               >
// // // // //                 <CardContent className="p-0">
// // // // //                   <img
// // // // //                     src={blog.image || "/placeholder.svg"}
// // // // //                     alt={blog.title}
// // // // //                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
// // // // //                   />
// // // // //                   <div className="p-6">
// // // // //                     <h3 className="text-xl font-bold text-gray-900 mb-3">{blog.title}</h3>
// // // // //                     <p className="text-gray-600 mb-4">{blog.description}</p>
// // // // //                     <Button variant="ghost" className="p-0 h-auto text-slate-900 hover:text-slate-700 font-semibold">
// // // // //                       Read More
// // // // //                       <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
// // // // //                     </Button>
// // // // //                   </div>
// // // // //                 </CardContent>
// // // // //               </Card>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* Careers & Contact - Enhanced */}
// // // // //       <section className="py-20 bg-gray-50">
// // // // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // // // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
// // // // //             {/* Careers Preview */}
// // // // //             <div>
// // // // //               <h2 className="text-3xl font-bold text-gray-900 mb-8">Join Our Team</h2>
// // // // //               <p className="text-lg text-gray-600 mb-8">
// // // // //                 Discover exciting career opportunities and grow with our dynamic team of technology professionals.
// // // // //               </p>

// // // // //               <div className="space-y-4 mb-8">
// // // // //                 {[
// // // // //                   { title: "Senior Cloud Architect", location: "Remote • Full-time", posted: "2 days ago" },
// // // // //                   { title: "ServiceNow Developer", location: "Washington, DC • Full-time", posted: "5 days ago" },
// // // // //                   { title: "Cybersecurity Analyst", location: "Remote • Full-time", posted: "1 week ago" },
// // // // //                 ].map((job, index) => (
// // // // //                   <Card key={index} className="hover:shadow-md transition-shadow duration-300 cursor-pointer">
// // // // //                     <CardContent className="p-4">
// // // // //                       <h4 className="font-semibold text-gray-900">{job.title}</h4>
// // // // //                       <p className="text-gray-600 text-sm">
// // // // //                         {job.location} • Posted {job.posted}
// // // // //                       </p>
// // // // //                     </CardContent>
// // // // //                   </Card>
// // // // //                 ))}
// // // // //               </div>

// // // // //               <Button className="bg-slate-900 hover:bg-slate-800">
// // // // //                 View All Positions
// // // // //                 <ArrowRight className="ml-2 h-4 w-4" />
// // // // //               </Button>
// // // // //             </div>

// // // // //             {/* Contact Form */}
// // // // //             <Card className="shadow-xl">
// // // // //               <CardContent className="p-8">
// // // // //                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
// // // // //                 <p className="text-lg text-gray-600 mb-8">
// // // // //                   Ready to transform your organization? Contact us to discuss your project requirements.
// // // // //                 </p>

// // // // //                 <form className="space-y-6">
// // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //                     <div>
// // // // //                       <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                         First Name *
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         id="firstName"
// // // // //                         name="firstName"
// // // // //                         required
// // // // //                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors"
// // // // //                       />
// // // // //                     </div>
// // // // //                     <div>
// // // // //                       <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                         Last Name *
// // // // //                       </label>
// // // // //                       <input
// // // // //                         type="text"
// // // // //                         id="lastName"
// // // // //                         name="lastName"
// // // // //                         required
// // // // //                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                       Email *
// // // // //                     </label>
// // // // //                     <input
// // // // //                       type="email"
// // // // //                       id="email"
// // // // //                       name="email"
// // // // //                       required
// // // // //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors"
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                       Company
// // // // //                     </label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       id="company"
// // // // //                       name="company"
// // // // //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors"
// // // // //                     />
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
// // // // //                       Message *
// // // // //                     </label>
// // // // //                     <textarea
// // // // //                       id="message"
// // // // //                       name="message"
// // // // //                       rows={4}
// // // // //                       required
// // // // //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-transparent transition-colors"
// // // // //                       placeholder="Tell us about your project requirements..."
// // // // //                     ></textarea>
// // // // //                   </div>

// // // // //                   <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 py-3 text-lg">
// // // // //                     Send Message
// // // // //                   </Button>
// // // // //                 </form>
// // // // //               </CardContent>
// // // // //             </Card>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>


// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default HomePage;
// // // // // import React from "react";
// // // // // import { Link } from "react-router-dom";
// // // // // import {
// // // // //   ArrowRight,
// // // // //   Cloud,
// // // // //   Database,
// // // // //   Shield,
// // // // //   Users,
// // // // //   Building,
// // // // //   GraduationCap,
// // // // //   Briefcase,
// // // // //   Globe,
// // // // //   Quote,
// // // // // } from "lucide-react";
// // // // // import { motion } from "framer-motion";

// // // // // // Reusable animation helpers
// // // // // const fadeUp = {
// // // // //   hidden: { opacity: 0, y: 24 },
// // // // //   show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
// // // // // };

// // // // // const stagger = {
// // // // //   hidden: {},
// // // // //   show: {
// // // // //     transition: { staggerChildren: 0.12, delayChildren: 0.1 },
// // // // //   },
// // // // // };

// // // // // const float = {
// // // // //   animate: {
// // // // //     y: [0, -10, 0],
// // // // //     transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
// // // // //   },
// // // // // };

// // // // // const Badge = ({ children }) => (
// // // // //   <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-sm text-white/90 backdrop-blur-lg">
// // // // //     {children}
// // // // //   </span>
// // // // // );

// // // // // const SectionTitle = ({ eyebrow, title, subtitle }) => (
// // // // //   <div className="text-center mb-12">
// // // // //     {eyebrow && (
// // // // //       <p className="mb-2 text-xs tracking-[0.2em] uppercase text-primary/80">{eyebrow}</p>
// // // // //     )}
// // // // //     <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{title}</h2>
// // // // //     {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
// // // // //   </div>
// // // // // );

// // // // // const Homepage = () => {
// // // // //   return (
// // // // //     <div className="pt-16">
// // // // //       {/* HERO – animated gradient + floating chips */}
// // // // //       <section className="relative overflow-hidden">
// // // // //         <div className="absolute inset-0 -z-10">
// // // // //           {/* Animated gradient background */}
// // // // //           <motion.div
// // // // //             aria-hidden
// // // // //             className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_0%,#2a3491_0%,#1e2875_45%,#172059_100%)]"
// // // // //             initial={{ scale: 1.1 }}
// // // // //             animate={{ scale: 1 }}
// // // // //             transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
// // // // //           />
// // // // //           {/* Soft glow blobs */}
// // // // //           <motion.div
// // // // //             className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl"
// // // // //             animate={{ y: [0, 20, 0] }}
// // // // //             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
// // // // //           />
// // // // //           <motion.div
// // // // //             className="absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"
// // // // //             animate={{ y: [0, -20, 0] }}
// // // // //             transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
// // // // //           />
// // // // //         </div>

// // // // //         <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 text-center text-white">
// // // // //           <motion.div variants={stagger} initial="hidden" animate="show">
// // // // //             <motion.div variants={fadeUp} className="mb-5 flex items-center justify-center gap-2">
// // // // //               <Badge>Government & Enterprise</Badge>
// // // // //               <Badge>Modernization</Badge>
// // // // //               <Badge>AI Transformation</Badge>
// // // // //             </motion.div>
// // // // //             <motion.h1
// // // // //               variants={fadeUp}
// // // // //               className="mx-auto max-w-4xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl"
// // // // //             >
// // // // //               Transforming Government & Enterprise
// // // // //               <span className="block text-blue-200">Through Innovation</span>
// // // // //             </motion.h1>
// // // // //             <motion.p
// // // // //               variants={fadeUp}
// // // // //               className="mx-auto mt-6 max-w-3xl text-lg md:text-xl text-blue-100"
// // // // //             >
// // // // //               We deliver secure, cloud-first and AI-powered solutions that modernize operations and
// // // // //               elevate citizen & customer experiences.
// // // // //             </motion.p>
// // // // //             <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
// // // // //               <Link
// // // // //                 to="/contact"
// // // // //                 className="inline-flex items-center rounded-xl bg-white px-6 py-3 font-semibold text-[#172059] shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
// // // // //               >
// // // // //                 Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
// // // // //               </Link>
// // // // //               <Link
// // // // //                 to="/case-studies"
// // // // //                 className="inline-flex items-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
// // // // //               >
// // // // //                 View Case Studies
// // // // //               </Link>
// // // // //             </motion.div>
// // // // //           </motion.div>

// // // // //           {/* Floating tech chips */}
// // // // //           <div className="pointer-events-none relative mt-12 grid grid-cols-3 gap-4 sm:grid-cols-6">
// // // // //             {[Cloud, Database, Shield, Users].map((Icon, idx) => (
// // // // //               <motion.div key={idx} variants={float} animate="animate" className="mx-auto">
// // // // //                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
// // // // //                   <Icon className="h-6 w-6 text-white" />
// // // // //                 </div>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //         {/* Curved divider */}
// // // // //         <svg className="-mb-1 block w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
// // // // //           <path fill="currentColor" d="M0,64L48,69.3C96,75,192,85,288,69.3C384,53,480,11,576,10.7C672,11,768,53,864,58.7C960,64,1056,32,1152,26.7C1248,21,1344,43,1392,53.3L1440,64V80H0Z" />
// // // // //         </svg>
// // // // //       </section>

// // // // //       {/* WHAT WE DO */}
// // // // //       <section className="bg-white py-16">
// // // // //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //           <SectionTitle
// // // // //             eyebrow="What we do"
// // // // //             title="Consulting • Modernization • AI Transformation"
// // // // //             subtitle="We specialize in three core areas that drive organizational transformation."
// // // // //           />
// // // // //           <motion.div
// // // // //             variants={stagger}
// // // // //             initial="hidden"
// // // // //             whileInView="show"
// // // // //             viewport={{ once: true, amount: 0.2 }}
// // // // //             className="grid grid-cols-1 gap-6 md:grid-cols-3"
// // // // //           >
// // // // //             {[
// // // // //               {
// // // // //                 icon: Users,
// // // // //                 title: "Consulting Excellence",
// // // // //                 desc:
// // // // //                   "Strategic guidance to navigate complexity, improve delivery, and realize measurable ROI.",
// // // // //               },
// // // // //               {
// // // // //                 icon: Cloud,
// // // // //                 title: "Modernization",
// // // // //                 desc:
// // // // //                   "Legacy transformation, cloud migration, and platform engineering with security built‑in.",
// // // // //               },
// // // // //               {
// // // // //                 icon: Database,
// // // // //                 title: "AI Transformation",
// // // // //                 desc:
// // // // //                   "ML-driven automation and decision intelligence to unlock new possibilities.",
// // // // //               },
// // // // //             ].map(({ icon: Icon, title, desc }, i) => (
// // // // //               <motion.div
// // // // //                 key={i}
// // // // //                 variants={fadeUp}
// // // // //                 className="group rounded-2xl border border-gray-100 bg-gray-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
// // // // //               >
// // // // //                 <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#172059] text-white">
// // // // //                   <Icon className="h-8 w-8" />
// // // // //                 </div>
// // // // //                 <h3 className="mb-2 text-center text-xl font-bold text-gray-900">{title}</h3>
// // // // //                 <p className="text-center text-gray-600">{desc}</p>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* HOW WE DO DIFFERENTLY */}
// // // // //       <section className="bg-gray-50 py-16">
// // // // //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //           <SectionTitle
// // // // //             eyebrow="How we do differently"
// // // // //             title="Outcome‑first, Security‑led, Human‑centered"
// // // // //             subtitle="Our delivery model blends product thinking, DevSecOps, and measurable KPIs."
// // // // //           />
// // // // //           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
// // // // //             {[
// // // // //               {
// // // // //                 title: "Outcome KPIs",
// // // // //                 points: ["OKRs & value tracking", "Time‑to‑value focus", "Transparent reporting"],
// // // // //               },
// // // // //               {
// // // // //                 title: "Secure by Design",
// // // // //                 points: ["Zero‑trust patterns", "Compliance automation", "Continuous security"],
// // // // //               },
// // // // //               {
// // // // //                 title: "Human‑centered",
// // // // //                 points: ["Co‑creation workshops", "Accessibility & UX", "Change management"],
// // // // //               },
// // // // //             ].map((card, i) => (
// // // // //               <motion.div
// // // // //                 key={i}
// // // // //                 variants={fadeUp}
// // // // //                 initial="hidden"
// // // // //                 whileInView="show"
// // // // //                 viewport={{ once: true, amount: 0.2 }}
// // // // //                 className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-100"
// // // // //               >
// // // // //                 <h3 className="mb-4 text-lg font-semibold text-gray-900">{card.title}</h3>
// // // // //                 <ul className="space-y-2 text-gray-600">
// // // // //                   {card.points.map((p, idx) => (
// // // // //                     <li key={idx} className="flex items-start gap-2">
// // // // //                       <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#172059]" /> {p}
// // // // //                     </li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* OUR SOLUTIONS */}
// // // // //       <section className="bg-white py-16">
// // // // //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //           <SectionTitle
// // // // //             eyebrow="Our Solutions"
// // // // //             title="Platforms & Practices"
// // // // //             subtitle="ServiceNow • AWS • Salesforce • DevSecOps"
// // // // //           />
// // // // //           <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
// // // // //             {[
// // // // //               { Icon: Cloud, label: "ServiceNow" },
// // // // //               { Icon: Database, label: "AWS" },
// // // // //               { Icon: Users, label: "Salesforce" },
// // // // //               { Icon: Shield, label: "DevSecOps" },
// // // // //             ].map(({ Icon, label }, i) => (
// // // // //               <motion.div
// // // // //                 key={label}
// // // // //                 variants={fadeUp}
// // // // //                 initial="hidden"
// // // // //                 whileInView="show"
// // // // //                 viewport={{ once: true, amount: 0.2 }}
// // // // //                 className="group rounded-2xl bg-gray-50 p-6 transition hover:bg-[#172059]"
// // // // //               >
// // // // //                 <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#172059] text-white group-hover:bg-white group-hover:text-[#172059]">
// // // // //                   <Icon className="h-6 w-6" />
// // // // //                 </div>
// // // // //                 <h3 className="text-center text-lg font-bold text-gray-900 group-hover:text-white">{label}</h3>
// // // // //               </motion.div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* TESTIMONIALS – simple auto slider */}
// // // // //       <section className="bg-gray-50 py-16">
// // // // //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //           <SectionTitle title="What our clients say" subtitle="Real results from our engagements" />
// // // // //           <div className="relative overflow-hidden">
// // // // //             <motion.div
// // // // //               className="flex gap-6"
// // // // //               animate={{ x: [0, -600, 0] }}
// // // // //               transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
// // // // //             >
// // // // //               {[1, 2, 3, 4].map((i) => (
// // // // //                 <figure key={i} className="min-w-[280px] flex-1 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
// // // // //                   <Quote className="mb-3 h-6 w-6 text-[#172059]" />
// // // // //                   <blockquote className="text-gray-700">
// // // // //                     “They delivered on time with outstanding quality. Modernization efforts reduced costs and improved security posture.”
// // // // //                   </blockquote>
// // // // //                   <figcaption className="mt-4 text-sm text-gray-500">CXO, Enterprise #{i}</figcaption>
// // // // //                 </figure>
// // // // //               ))}
// // // // //             </motion.div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* BLOG PREVIEW */}
// // // // //       <section className="bg-white py-16">
// // // // //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //           <SectionTitle title="Latest Insights" subtitle="Stay informed with our thought leadership" />
// // // // //           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
// // // // //             {["AI in Government", "Cybersecurity Best Practices", "Cloud Migration Strategy"].map(
// // // // //               (title, i) => (
// // // // //                 <article key={i} className="overflow-hidden rounded-2xl bg-gray-50 shadow-sm ring-1 ring-gray-100">
// // // // //                   <div className="h-44 w-full bg-gradient-to-br from-indigo-100 to-blue-100" />
// // // // //                   <div className="p-6">
// // // // //                     <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
// // // // //                     <p className="mb-4 text-gray-600">Short excerpt describing the blog topic and value proposition.</p>
// // // // //                     <Link to="/blog" className="inline-flex items-center font-semibold text-[#172059] hover:opacity-80">
// // // // //                       Read More <ArrowRight className="ml-1 h-4 w-4" />
// // // // //                     </Link>
// // // // //                   </div>
// // // // //                 </article>
// // // // //               )
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* CAREERS + CONTACT */}
// // // // //       <section className="bg-gray-50 py-16">
// // // // //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
// // // // //             {/* Careers */}
// // // // //             <div>
// // // // //               <h2 className="mb-6 text-3xl font-bold text-gray-900">Join Our Team</h2>
// // // // //               <p className="mb-8 text-lg text-gray-600">
// // // // //                 Discover exciting opportunities and grow with our dynamic team of technology professionals.
// // // // //               </p>
// // // // //               <div className="mb-8 space-y-4">
// // // // //                 {["Senior Cloud Architect", "ServiceNow Developer", "Cybersecurity Analyst"].map((role, i) => (
// // // // //                   <div key={i} className="rounded-xl border border-gray-200 p-4 hover:bg-white">
// // // // //                     <h4 className="font-semibold text-gray-900">{role}</h4>
// // // // //                     <p className="text-sm text-gray-600">Remote • Full-time</p>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //               <Link
// // // // //                 to="/careers"
// // // // //                 className="inline-flex items-center rounded-xl bg-[#172059] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg"
// // // // //               >
// // // // //                 View All Positions <ArrowRight className="ml-2 h-4 w-4" />
// // // // //               </Link>
// // // // //             </div>

// // // // //             {/* Contact */}
// // // // //             <div>
// // // // //               <h2 className="mb-6 text-3xl font-bold text-gray-900">Get In Touch</h2>
// // // // //               <p className="mb-8 text-lg text-gray-600">
// // // // //                 Ready to transform your organization? Contact us to discuss your project requirements.
// // // // //               </p>
// // // // //               <form className="space-y-6">
// // // // //                 <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
// // // // //                   <input
// // // // //                     placeholder="First Name *"
// // // // //                     required
// // // // //                     className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[#172059]"
// // // // //                   />
// // // // //                   <input
// // // // //                     placeholder="Last Name *"
// // // // //                     required
// // // // //                     className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[#172059]"
// // // // //                   />
// // // // //                 </div>
// // // // //                 <input
// // // // //                   type="email"
// // // // //                   placeholder="Email *"
// // // // //                   required
// // // // //                   className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[#172059]"
// // // // //                 />
// // // // //                 <input
// // // // //                   placeholder="Company"
// // // // //                   className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[#172059]"
// // // // //                 />
// // // // //                 <textarea
// // // // //                   rows={4}
// // // // //                   placeholder="Tell us about your project requirements... *"
// // // // //                   required
// // // // //                   className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-transparent focus:ring-2 focus:ring-[#172059]"
// // // // //                 />
// // // // //                 <button
// // // // //                   type="submit"
// // // // //                   className="w-full rounded-lg bg-[#172059] px-6 py-3 font-semibold text-white transition hover:bg-[#1a1f4f]"
// // // // //                 >
// // // // //                   Send Message
// // // // //                 </button>
// // // // //               </form>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* INDUSTRIES */}
// // // // //       <section className="bg-white py-16">
// // // // //         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
// // // // //           <SectionTitle title="Industries We Serve" subtitle="Specialized solutions for diverse sectors" />
// // // // //           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
// // // // //             {[
// // // // //               { to: "/industries/federal", icon: Building, title: "Federal Government" },
// // // // //               { to: "/industries/state-local", icon: Globe, title: "State & Local" },
// // // // //               { to: "/industries/education", icon: GraduationCap, title: "Education" },
// // // // //               { to: "/industries/commercial", icon: Briefcase, title: "Commercial" },
// // // // //             ].map(({ to, icon: Icon, title }) => (
// // // // //               <Link
// // // // //                 key={title}
// // // // //                 to={to}
// // // // //                 className="rounded-2xl bg-gray-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
// // // // //               >
// // // // //                 <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#172059] text-white">
// // // // //                   <Icon className="h-8 w-8" />
// // // // //                 </div>
// // // // //                 <h3 className="text-center text-xl font-bold text-gray-900">{title}</h3>
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* FOOTER
// // // // //       <footer className="bg-[#0f1438] py-12 text-white">
// // // // //         <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
// // // // //           <div>
// // // // //             <h4 className="mb-3 text-lg font-semibold">Company</h4>
// // // // //             <ul className="space-y-2 text-white/80">
// // // // //               <li><Link to="/about">About</Link></li>
// // // // //               <li><Link to="/careers">Careers</Link></li>
// // // // //               <li><Link to="/contact">Contact</Link></li>
// // // // //             </ul>
// // // // //           </div>
// // // // //           <div>
// // // // //             <h4 className="mb-3 text-lg font-semibold">Services</h4>
// // // // //             <ul className="space-y-2 text-white/80">
// // // // //               <li>Consulting</li>
// // // // //               <li>Modernization</li>
// // // // //               <li>AI Transformation</li>
// // // // //             </ul>
// // // // //           </div>
// // // // //           <div>
// // // // //             <h4 className="mb-3 text-lg font-semibold">Solutions</h4>
// // // // //             <ul className="space-y-2 text-white/80">
// // // // //               <li>ServiceNow</li>
// // // // //               <li>AWS</li>
// // // // //               <li>Salesforce</li>
// // // // //               <li>DevSecOps</li>
// // // // //             </ul>
// // // // //           </div>
// // // // //           <div>
// // // // //             <h4 className="mb-3 text-lg font-semibold">Follow</h4>
// // // // //             <p className="text-white/80">LinkedIn • X • YouTube</p>
// // // // //           </div>
// // // // //         </div>
// // // // //         <div className="mt-8 border-t border-white/10 py-6 text-center text-sm text-white/60">
// // // // //           © {new Date().getFullYear()} Your Company. All rights reserved.
// // // // //         </div>
// // // // //       </footer> */}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default Homepage;
// // // // Home.jsx
// // // // import { motion } from "framer-motion";
// // // // import { useEffect, useState } from "react";
// // // // import { FaAws, FaCloud, FaRobot, FaServicestack, FaQuoteLeft } from "react-icons/fa";

// // // // export default function Home() {
// // // //   const [bannerIndex, setBannerIndex] = useState(0);

// // // //   const bannerSlides = [
// // // //     {
// // // //       title: "Technology. Innovation. Results.",
// // // //       text: "500+ successful projects powering businesses worldwide with integrity and expertise.",
// // // //       bg: "bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700",
// // // //     },
// // // //     {
// // // //       title: "Transforming Ideas into Digital Reality",
// // // //       text: "Certified experts delivering tailored IT solutions for public and private sectors.",
// // // //       bg: "bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-800",
// // // //     },
// // // //     {
// // // //       title: "Elevating Healthcare Through Innovation",
// // // //       text: "Modern IT solutions that enhance patient care, streamline operations, and ensure compliance.",
// // // //       bg: "bg-gradient-to-r from-green-700 via-emerald-600 to-teal-700",
// // // //     },
// // // //     {
// // // //       title: "From Legacy to Future-Ready",
// // // //       text: "Seamless IT modernization that drives agility, efficiency, and long-term growth.",
// // // //       bg: "bg-gradient-to-r from-pink-700 via-rose-600 to-red-700",
// // // //     },
// // // //     {
// // // //       title: "AI-Powered Transformation for Smarter Business",
// // // //       text: "Harness AI to unlock insights, automate processes, and accelerate innovation.",
// // // //       bg: "bg-gradient-to-r from-indigo-700 via-purple-700 to-fuchsia-700",
// // // //     },
// // // //   ];

// // // //   useEffect(() => {
// // // //     const interval = setInterval(() => {
// // // //       setBannerIndex((prev) => (prev + 1) % bannerSlides.length);
// // // //     }, 4000);
// // // //     return () => clearInterval(interval);
// // // //   }, []);

// // // //   return (
// // // //     <div className="w-full overflow-hidden">
// // // //       {/* Banner */}
// // // //       <section className={`h-screen flex items-center justify-center text-center text-white ${bannerSlides[bannerIndex].bg} transition-all duration-1000`}>
// // // //         <motion.div
// // // //           key={bannerIndex}
// // // //           initial={{ opacity: 0, y: 50 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 1 }}
// // // //           className="px-6 md:px-12"
// // // //         >
// // // //           <h1 className="text-4xl md:text-6xl font-bold">{bannerSlides[bannerIndex].title}</h1>
// // // //           <p className="mt-6 text-lg md:text-2xl max-w-3xl mx-auto">{bannerSlides[bannerIndex].text}</p>
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* What We Do */}
// // // //       <section className="py-20 bg-gray-50 text-center px-6">
// // // //         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
// // // //           <h2 className="text-3xl md:text-4xl font-bold mb-6">What We Do</h2>
// // // //           <p className="max-w-4xl mx-auto text-lg">
// // // //             Technogen is a certified minority women-owned business enterprise providing global IT services since 2003. 
// // // //             From our headquarters in Virginia and offices in India, we’ve powered 500+ end-to-end solutions for public 
// // // //             and private sector clients. <span className="text-blue-600 font-semibold">Know More</span>
// // // //           </p>
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* How We Do Differently */}
// // // //       <section className="relative py-20 bg-fixed bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?technology,ai')" }}>
// // // //         <div className="absolute inset-0 bg-white bg-opacity-70"></div>
// // // //         <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center px-6">
// // // //           <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Do Differently</h2>
// // // //           <p className="max-w-4xl mx-auto text-lg">
// // // //             At Technogen, sustainability is integral to business success. We act ethically, transparently, and responsibly. 
// // // //             As an Accrediting Body for the global SCS-9001 standard, we advance ICT supply chain security—ensuring trusted suppliers, 
// // // //             resilient infrastructure, and long-lasting sustainable impact across the entire value chain.
// // // //           </p>
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* Our Expertise */}
// // // //       <section className="py-20 bg-gray-100 text-center px-6">
// // // //         <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Expertise</h2>
// // // //         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// // // //           {[
// // // //             { title: "Consulting", text: "Guiding strategy and execution for smarter outcomes." },
// // // //             { title: "Modernization", text: "Upgrading legacy systems into agile, digital platforms." },
// // // //             { title: "AI Transformation", text: "Leveraging AI to drive automation, intelligence, and growth." },
// // // //           ].map((item, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               className="bg-white p-8 rounded-2xl shadow-lg"
// // // //             >
// // // //               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
// // // //               <p>{item.text}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* Our Solutions */}
// // // //       <section className="py-20 bg-white text-center px-6">
// // // //         <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Solutions</h2>
// // // //         <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
// // // //           {[
// // // //             { icon: <FaServicestack className="text-4xl mb-4 text-blue-600" />, title: "ServiceNow", text: "Smarter, faster enterprise-wide service delivery." },
// // // //             { icon: <FaAws className="text-4xl mb-4 text-orange-600" />, title: "AWS", text: "Cloud-powered scalability, agility, and growth." },
// // // //             { icon: <FaCloud className="text-4xl mb-4 text-sky-500" />, title: "Salesforce", text: "Connecting customers through data-driven CRM." },
// // // //             { icon: <FaRobot className="text-4xl mb-4 text-purple-600" />, title: "DevSecOps", text: "Embedding security into agile innovation." },
// // // //           ].map((item, i) => (
// // // //             <motion.div
// // // //               key={i}
// // // //               whileHover={{ scale: 1.05 }}
// // // //               className="p-8 rounded-2xl shadow-lg bg-gray-50"
// // // //             >
// // // //               {item.icon}
// // // //               <h3 className="text-xl font-bold mb-4">{item.title}</h3>
// // // //               <p>{item.text}</p>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* Testimonials */}
// // // //       <section className="py-20 bg-gray-50 text-center px-6">
// // // //         <h2 className="text-3xl md:text-4xl font-bold mb-12">Testimonials</h2>
// // // //         <motion.div
// // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // //           whileInView={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 1 }}
// // // //           className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
// // // //         >
// // // //           <FaQuoteLeft className="text-4xl text-blue-500 mx-auto mb-4" />
// // // //           <p className="italic">“Technogen has been an incredible partner in our digital transformation journey. Their expertise, professionalism, and results-driven approach exceeded expectations.”</p>
// // // //           <p className="mt-4 font-semibold">— Client, Healthcare Industry</p>
// // // //         </motion.div>
// // // //       </section>

// // // //       {/* Blogs */}
// // // //       <section className="py-20 bg-white text-center px-6">
// // // //         <h2 className="text-3xl md:text-4xl font-bold mb-12">Blogs</h2>
// // // //         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// // // //           {[1, 2, 3].map((b) => (
// // // //             <motion.div key={b} whileHover={{ scale: 1.05 }} className="p-8 bg-gray-50 rounded-2xl shadow-lg">
// // // //               <h3 className="text-xl font-bold mb-4">Blog Post {b}</h3>
// // // //               <p>Fresh insights and ideas on tech, business, and innovation.</p>
// // // //               <button className="mt-4 text-blue-600 font-semibold">Read More →</button>
// // // //             </motion.div>
// // // //           ))}
// // // //         </div>
// // // //       </section>

// // // //       {/* Careers & Contact */}
// // // //       <section className="py-20 bg-gray-50 text-center px-6">
// // // //         <h2 className="text-3xl md:text-4xl font-bold mb-12">Careers & Contact Us</h2>
// // // //         <div className="max-w-4xl mx-auto space-y-6">
// // // //           <p className="text-lg">Build a career that grows with you. Join a team driven by purpose, innovation, and collaboration.</p>
// // // //           <form className="grid md:grid-cols-2 gap-6 text-left">
// // // //             <input type="text" placeholder="Your Name" className="p-3 border rounded-lg" />
// // // //             <input type="email" placeholder="Your Email" className="p-3 border rounded-lg" />
// // // //             <textarea placeholder="Your Message" className="p-3 border rounded-lg md:col-span-2" rows="4"></textarea>
// // // //             <button type="submit" className="md:col-span-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">Send Message</button>
// // // //           </form>
// // // //         </div>
// // // //       </section>
// // // //     </div>
// // // //   );
// // // // }
// // // // export default home;

// // // import { useState, useEffect } from "react"
// // // import { Button } from "@/components/ui/button"
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // // import { Badge } from "@/components/ui/badge"
// // // import { Input } from "@/components/ui/input"
// // // import { Textarea } from "@/components/ui/textarea"
// // // import {
// // //   ArrowRight,
// // //   CheckCircle,
// // //   Star,
// // //   Zap,
// // //   Shield,
// // //   Cloud,
// // //   Brain,
// // //   Code,
// // //   Mail,
// // //   Phone,
// // //   MapPin,
// // //   Linkedin,
// // //   Twitter,
// // //   Github,
// // //   Target,
// // //   Lightbulb,
// // //   Users,
// // //   Rocket,
// // //   Award,
// // //   TrendingUp,
// // // } from "lucide-react"

// // // export default function Homepage() {
// // //   const [isVisible, setIsVisible] = useState(false)
// // //   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

// // //   useEffect(() => {
// // //     setIsVisible(true)

// // //     const handleMouseMove = (e: MouseEvent) => {
// // //       setMousePosition({ x: e.clientX, y: e.clientY })
// // //     }

// // //     window.addEventListener("mousemove", handleMouseMove)
// // //     return () => window.removeEventListener("mousemove", handleMouseMove)
// // //   }, [])

// // //   const services = [
// // //     {
// // //       icon: <Brain className="h-8 w-8" />,
// // //       title: "AI Transformation",
// // //       description:
// // //         "Harness the power of artificial intelligence to revolutionize your business processes and decision-making.",
// // //       features: ["Machine Learning Integration", "Predictive Analytics", "Intelligent Automation"],
// // //     },
// // //     {
// // //       icon: <Cloud className="h-8 w-8" />,
// // //       title: "Modernization",
// // //       description:
// // //         "Migrate and optimize your infrastructure with cutting-edge cloud solutions for scalability and efficiency.",
// // //       features: ["AWS Migration", "Multi-Cloud Strategy", "DevOps Implementation"],
// // //     },
// // //     {
// // //       icon: <Shield className="h-8 w-8" />,
// // //       title: "Consulting",
// // //       description:
// // //         "Strategic guidance and expert consulting to help organizations navigate complex technology challenges.",
// // //       features: ["Digital Strategy", "Technology Assessment", "Change Management"],
// // //     },
// // //   ]

// // //   const solutions = [
// // //     { name: "ServiceNow", logo: "🔧", description: "Enterprise service management" },
// // //     { name: "AWS", logo: "☁️", description: "Cloud infrastructure solutions" },
// // //     { name: "Salesforce", logo: "⚡", description: "Customer relationship management" },
// // //     { name: "DevSecOps", logo: "🛡️", description: "Secure development practices" },
// // //   ]

// // //   const testimonials = [
// // //     {
// // //       name: "Sarah Johnson",
// // //       role: "CTO, TechCorp",
// // //       content: "MyArg transformed our entire infrastructure. Their AI solutions increased our efficiency by 300%.",
// // //       rating: 5,
// // //     },
// // //     {
// // //       name: "Michael Chen",
// // //       role: "VP Engineering, DataFlow",
// // //       content: "The cloud migration was seamless. Zero downtime and immediate performance improvements.",
// // //       rating: 5,
// // //     },
// // //     {
// // //       name: "Emily Rodriguez",
// // //       role: "CEO, InnovateLab",
// // //       content: "Outstanding consulting services. They delivered beyond our expectations in record time.",
// // //       rating: 5,
// // //     },
// // //   ]

// // //   const blogPosts = [
// // //     {
// // //       title: "The Future of AI in Enterprise",
// // //       excerpt: "Exploring how artificial intelligence is reshaping business operations and creating new opportunities.",
// // //       date: "Dec 15, 2024",
// // //       readTime: "5 min read",
// // //     },
// // //     {
// // //       title: "Cloud Security Best Practices",
// // //       excerpt: "Essential strategies for maintaining robust security in multi-cloud environments.",
// // //       date: "Dec 12, 2024",
// // //       readTime: "7 min read",
// // //     },
// // //     {
// // //       title: "DevOps Transformation Guide",
// // //       excerpt: "A comprehensive approach to implementing DevOps culture and practices in your organization.",
// // //       date: "Dec 10, 2024",
// // //       readTime: "6 min read",
// // //     },
// // //   ]

// // //   const differentiators = [
// // //     {
// // //       icon: <Target className="h-12 w-12" />,
// // //       title: "Precision-Focused Approach",
// // //       description:
// // //         "We deliver targeted solutions that address your specific business challenges with surgical precision.",
// // //     },
// // //     {
// // //       icon: <Lightbulb className="h-12 w-12" />,
// // //       title: "Innovation-First Mindset",
// // //       description: "Our team leverages cutting-edge technologies and methodologies to create breakthrough solutions.",
// // //     },
// // //     {
// // //       icon: <Users className="h-12 w-12" />,
// // //       title: "Collaborative Partnership",
// // //       description: "We work as an extension of your team, ensuring seamless integration and knowledge transfer.",
// // //     },
// // //     {
// // //       icon: <Rocket className="h-12 w-12" />,
// // //       title: "Rapid Implementation",
// // //       description: "Our agile methodology ensures faster time-to-market without compromising on quality.",
// // //     },
// // //     {
// // //       icon: <Award className="h-12 w-12" />,
// // //       title: "Proven Excellence",
// // //       description: "Track record of successful transformations across government and enterprise sectors.",
// // //     },
// // //     {
// // //       icon: <TrendingUp className="h-12 w-12" />,
// // //       title: "Measurable Results",
// // //       description: "We focus on delivering quantifiable business outcomes and continuous improvement.",
// // //     },
// // //   ]

// // //   return (
// // //     <div className="min-h-screen bg-background">
// // //       {/* Animated Background Elements */}
// // //       <div className="fixed inset-0 overflow-hidden pointer-events-none">
// // //         <div
// // //           className="absolute w-96 h-96 bg-[#172059]/10 rounded-full blur-3xl animate-float"
// // //           style={{
// // //             left: mousePosition.x * 0.02 + "px",
// // //             top: mousePosition.y * 0.02 + "px",
// // //           }}
// // //         />
// // //         <div
// // //           className="absolute w-64 h-64 bg-[#2a3491]/10 rounded-full blur-2xl animate-float animation-delay-1000"
// // //           style={{
// // //             right: mousePosition.x * 0.01 + "px",
// // //             bottom: mousePosition.y * 0.01 + "px",
// // //           }}
// // //         />
// // //       </div>

// // //       {/* Navigation */}
// // //       <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="flex justify-between items-center h-16">
// // //             <div className="flex items-center space-x-2">
// // //               <div className="w-8 h-8 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-lg flex items-center justify-center">
// // //                 <Zap className="h-5 w-5 text-white" />
// // //               </div>
// // //               <span className="text-xl font-bold bg-gradient-to-r from-[#172059] to-[#2a3491] bg-clip-text text-transparent">
// // //                 MyArg
// // //               </span>
// // //             </div>
// // //             <div className="hidden md:flex items-center space-x-8">
// // //               <a href="#services" className="text-muted-foreground hover:text-[#172059] transition-colors">
// // //                 Services
// // //               </a>
// // //               <a href="#how-we-differ" className="text-muted-foreground hover:text-[#172059] transition-colors">
// // //                 How We Differ
// // //               </a>
// // //               <a href="#solutions" className="text-muted-foreground hover:text-[#172059] transition-colors">
// // //                 Solutions
// // //               </a>
// // //               <a href="#contact" className="text-muted-foreground hover:text-[#172059] transition-colors">
// // //                 Contact
// // //               </a>
// // //               <Button className="bg-[#172059] hover:bg-[#1a1f4f] animate-pulse-glow">Get Started</Button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </nav>

// // //       {/* Hero Section */}
// // //       <section className="relative pt-32 pb-20 overflow-hidden">
// // //         <div className="absolute inset-0 bg-gradient-to-br from-[#172059] via-[#1e2875] to-[#2a3491]"></div>
// // //         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-12 items-center">
// // //             <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
// // //               <div className="space-y-4">
// // //                 <Badge
// // //                   variant="secondary"
// // //                   className="animate-scale-in animation-delay-300 bg-white/20 text-white border-white/30"
// // //                 >
// // //                   🚀 Leading Digital Transformation
// // //                 </Badge>
// // //                 <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
// // //                   <span className="bg-gradient-to-r from-blue-200 via-white to-blue-200 bg-clip-text text-transparent animate-gradient-shift">
// // //                     Transforming Government
// // //                   </span>
// // //                   <br />
// // //                   <span className="text-blue-200">& Enterprise</span>
// // //                   <br />
// // //                   <span className="text-white">Through Innovation</span>
// // //                 </h1>
// // //                 <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
// // //                   We deliver cutting-edge technology solutions that modernize operations, enhance security, and drive
// // //                   digital transformation across all sectors.
// // //                 </p>
// // //               </div>
// // //               <div className="flex flex-col sm:flex-row gap-4">
// // //                 <Button size="lg" className="group bg-white text-[#172059] hover:bg-gray-100 animate-pulse-glow">
// // //                   Get Started Today
// // //                   <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
// // //                 </Button>
// // //                 <Button
// // //                   variant="outline"
// // //                   size="lg"
// // //                   className="hover:bg-white hover:text-[#172059] transition-all bg-transparent text-white border-white/30"
// // //                 >
// // //                   Watch Demo
// // //                 </Button>
// // //               </div>
// // //               <div className="flex items-center space-x-8 pt-4">
// // //                 <div className="text-center">
// // //                   <div className="text-2xl font-bold text-blue-200">500+</div>
// // //                   <div className="text-sm text-blue-100">Projects Delivered</div>
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="text-2xl font-bold text-blue-200">98%</div>
// // //                   <div className="text-sm text-blue-100">Client Satisfaction</div>
// // //                 </div>
// // //                 <div className="text-center">
// // //                   <div className="text-2xl font-bold text-blue-200">24/7</div>
// // //                   <div className="text-sm text-blue-100">Support</div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <div className={`relative ${isVisible ? "animate-slide-in-right animation-delay-600" : "opacity-0"}`}>
// // //               <div className="relative">
// // //                 <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-blue-200/20 rounded-3xl blur-2xl opacity-20 animate-pulse-glow"></div>
// // //                 <div className="relative bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
// // //                   <div className="grid grid-cols-2 gap-4">
// // //                     <div className="space-y-4">
// // //                       <div className="h-4 bg-white/20 rounded animate-pulse"></div>
// // //                       <div className="h-8 bg-blue-200/20 rounded animate-pulse animation-delay-300"></div>
// // //                       <div className="h-4 bg-white/20 rounded animate-pulse animation-delay-600"></div>
// // //                     </div>
// // //                     <div className="space-y-4">
// // //                       <div className="h-8 bg-blue-200/20 rounded animate-pulse animation-delay-300"></div>
// // //                       <div className="h-4 bg-white/20 rounded animate-pulse animation-delay-600"></div>
// // //                       <div className="h-4 bg-blue-200/20 rounded animate-pulse animation-delay-900"></div>
// // //                     </div>
// // //                   </div>
// // //                   <div className="mt-6 flex items-center justify-between">
// // //                     <div className="flex space-x-2">
// // //                       <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
// // //                       <div className="w-3 h-3 bg-blue-200 rounded-full animate-pulse animation-delay-300"></div>
// // //                       <div className="w-3 h-3 bg-white/50 rounded-full animate-pulse animation-delay-600"></div>
// // //                     </div>
// // //                     <CheckCircle className="h-6 w-6 text-white animate-scale-in animation-delay-1200" />
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Services Section */}
// // //       <section id="services" className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold mb-4 text-gray-900">What We Do</h2>
// // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //               We specialize in three core areas that drive organizational transformation
// // //             </p>
// // //           </div>
// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {services.map((service, index) => (
// // //               <Card
// // //                 key={index}
// // //                 className="group hover:shadow-2xl hover:shadow-[#172059]/10 transition-all duration-500 hover:-translate-y-2 border-0 bg-white animate-fade-in-up"
// // //                 style={{ animationDelay: `${index * 200}ms` }}
// // //               >
// // //                 <CardHeader>
// // //                   <div className="w-16 h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
// // //                     {service.icon}
// // //                   </div>
// // //                   <CardTitle className="text-xl group-hover:text-[#172059] transition-colors">
// // //                     {service.title}
// // //                   </CardTitle>
// // //                   <CardDescription className="text-base leading-relaxed text-gray-600">
// // //                     {service.description}
// // //                   </CardDescription>
// // //                 </CardHeader>
// // //                 <CardContent>
// // //                   <ul className="space-y-2">
// // //                     {service.features.map((feature, idx) => (
// // //                       <li key={idx} className="flex items-center text-sm text-gray-600">
// // //                         <CheckCircle className="h-4 w-4 text-[#172059] mr-2 flex-shrink-0" />
// // //                         {feature}
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* How We Do Differently Section */}
// // //       <section id="how-we-differ" className="py-20 bg-white">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold mb-4 text-gray-900">How We Do Differently</h2>
// // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //               Our unique approach sets us apart in delivering exceptional technology solutions
// // //             </p>
// // //           </div>
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {differentiators.map((item, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="group text-center p-8 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
// // //                 style={{ animationDelay: `${index * 150}ms` }}
// // //               >
// // //                 <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#172059] to-[#2a3491] text-white rounded-2xl mb-6 mx-auto group-hover:scale-110 transition-transform">
// // //                   {item.icon}
// // //                 </div>
// // //                 <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#172059] transition-colors">
// // //                   {item.title}
// // //                 </h3>
// // //                 <p className="text-gray-600 leading-relaxed">{item.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Solutions Section */}
// // //       <section id="solutions" className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Solutions</h2>
// // //             <p className="text-xl text-gray-600 max-w-3xl mx-auto">
// // //               Our expertise spans industry-leading platforms and frameworks
// // //             </p>
// // //           </div>
// // //           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //             {solutions.map((solution, index) => (
// // //               <Card
// // //                 key={index}
// // //                 className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-scale-in bg-white hover:bg-[#172059] hover:text-white"
// // //                 style={{ animationDelay: `${index * 150}ms` }}
// // //               >
// // //                 <CardContent className="p-6 text-center">
// // //                   <div className="text-4xl mb-4 group-hover:scale-125 transition-transform">{solution.logo}</div>
// // //                   <h3 className="font-semibold text-lg mb-2 group-hover:text-white transition-colors">
// // //                     {solution.name}
// // //                   </h3>
// // //                   <p className="text-sm text-gray-600 group-hover:text-gray-200">{solution.description}</p>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Testimonials Section */}
// // //       <section className="py-20 bg-muted/30">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
// // //             <p className="text-xl text-muted-foreground">Trusted by industry leaders worldwide</p>
// // //           </div>
// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {testimonials.map((testimonial, index) => (
// // //               <Card
// // //                 key={index}
// // //                 className="animate-fade-in-up hover:shadow-xl transition-all duration-300"
// // //                 style={{ animationDelay: `${index * 200}ms` }}
// // //               >
// // //                 <CardContent className="p-6">
// // //                   <div className="flex mb-4">
// // //                     {[...Array(testimonial.rating)].map((_, i) => (
// // //                       <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
// // //                     ))}
// // //                   </div>
// // //                   <p className="text-muted-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
// // //                   <div>
// // //                     <div className="font-semibold">{testimonial.name}</div>
// // //                     <div className="text-sm text-muted-foreground">{testimonial.role}</div>
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Blog Section */}
// // //       <section className="py-20">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="text-center mb-16">
// // //             <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
// // //             <p className="text-xl text-muted-foreground">
// // //               Stay updated with the latest trends in technology and digital transformation
// // //             </p>
// // //           </div>
// // //           <div className="grid md:grid-cols-3 gap-8">
// // //             {blogPosts.map((post, index) => (
// // //               <Card
// // //                 key={index}
// // //                 className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-slide-in-left"
// // //                 style={{ animationDelay: `${index * 200}ms` }}
// // //               >
// // //                 <CardContent className="p-6">
// // //                   <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg mb-4 flex items-center justify-center">
// // //                     <Code className="h-12 w-12 text-primary" />
// // //                   </div>
// // //                   <div className="flex items-center text-sm text-muted-foreground mb-2">
// // //                     <span>{post.date}</span>
// // //                     <span className="mx-2">•</span>
// // //                     <span>{post.readTime}</span>
// // //                   </div>
// // //                   <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
// // //                     {post.title}
// // //                   </h3>
// // //                   <p className="text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p>
// // //                 </CardContent>
// // //               </Card>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* Contact Section */}
// // //       <section id="contact" className="py-20 bg-muted/30">
// // //         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// // //           <div className="grid lg:grid-cols-2 gap-12">
// // //             <div className="animate-slide-in-left">
// // //               <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
// // //               <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
// // //                 Ready to transform your business? Let's discuss how we can help you achieve your digital transformation
// // //                 goals.
// // //               </p>
// // //               <div className="space-y-4">
// // //                 <div className="flex items-center">
// // //                   <Mail className="h-5 w-5 text-primary mr-3" />
// // //                   <span>contact@myarg.com</span>
// // //                 </div>
// // //                 <div className="flex items-center">
// // //                   <Phone className="h-5 w-5 text-primary mr-3" />
// // //                   <span>+1 (555) 123-4567</span>
// // //                 </div>
// // //                 <div className="flex items-center">
// // //                   <MapPin className="h-5 w-5 text-primary mr-3" />
// // //                   <span>San Francisco, CA</span>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //             <Card className="animate-slide-in-right animation-delay-300">
// // //               <CardContent className="p-6">
// // //                 <form className="space-y-4">
// // //                   <div className="grid md:grid-cols-2 gap-4">
// // //                     <Input placeholder="First Name" />
// // //                     <Input placeholder="Last Name" />
// // //                   </div>
// // //                   <Input placeholder="Email Address" type="email" />
// // //                   <Input placeholder="Company" />
// // //                   <Textarea placeholder="Tell us about your project..." rows={4} />
// // //                   <Button className="w-full animate-pulse-glow">
// // //                     Send Message
// // //                     <ArrowRight className="ml-2 h-4 w-4" />
// // //                   </Button>
// // //                 </form>
// // //               </CardContent>
// // //             </Card>
// // //           </div>
// // //         </div>
// // //       </section>
// // //     </div>
// // //   )
// // // }
// // // export default Homepage;

// import React from "react";
// import { CheckCircle, Target, Lightbulb, Users, Rocket, Award, TrendingUp, Brain, Cloud, Shield } from "lucide-react";

// // Data (kept same, but design updated)
// const differentiators = [
//   {
//     icon: <Target className="h-12 w-12" />,
//     title: "Precision-Focused Approach",
//     description: "We deliver targeted solutions that address your specific business challenges with surgical precision.",
//   },
//   {
//     icon: <Lightbulb className="h-12 w-12" />,
//     title: "Innovation-First Mindset",
//     description: "Our team leverages cutting-edge technologies and methodologies to create breakthrough solutions.",
//   },
//   {
//     icon: <Users className="h-12 w-12" />,
//     title: "Collaborative Partnership",
//     description: "We work as an extension of your team, ensuring seamless integration and knowledge transfer.",
//   },
//   {
//     icon: <Rocket className="h-12 w-12" />,
//     title: "Rapid Implementation",
//     description: "Our agile methodology ensures faster time-to-market without compromising on quality.",
//   },
//   {
//     icon: <Award className="h-12 w-12" />,
//     title: "Proven Excellence",
//     description: "Track record of successful transformations across government and enterprise sectors.",
//   },
//   {
//     icon: <TrendingUp className="h-12 w-12" />,
//     title: "Measurable Results",
//     description: "We focus on delivering quantifiable business outcomes and continuous improvement.",
//   },
// ];

// const services = [
//   {
//     icon: <Brain className="h-10 w-10" />,
//     title: "AI Transformation",
//     description: "Harness AI to revolutionize business processes and decision-making.",
//     features: ["Machine Learning", "Predictive Analytics", "Automation"],
//   },
//   {
//     icon: <Cloud className="h-10 w-10" />,
//     title: "Modernization",
//     description: "Migrate & optimize with cloud solutions for scalability & efficiency.",
//     features: ["AWS Migration", "Multi-Cloud Strategy", "DevOps"],
//   },
//   {
//     icon: <Shield className="h-10 w-10" />,
//     title: "Consulting",
//     description: "Expert guidance to navigate complex technology challenges.",
//     features: ["Digital Strategy", "Tech Assessment", "Change Management"],
//   },
// ];

// const solutions = [
//   { name: "ServiceNow", logo: "🔧", description: "Enterprise service management" },
//   { name: "AWS", logo: "☁️", description: "Cloud infrastructure solutions" },
//   { name: "Salesforce", logo: "⚡", description: "CRM & sales automation" },
//   { name: "DevSecOps", logo: "🛡️", description: "Secure development practices" },
// ];

// const blogs = [
//   {
//     title: "Cloud Migration",
//     description: "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/Image-ASSET-small-SIZE-Default-STATE-DEFAULT@3x.png",
//   },
//   {
//     title: "AI in Enterprises",
//     description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//     image: "./public/Image-ASSET-small-SIZE-Default-STATE-DEFAULT1@3x.png",
//   },
//   {
//     title: "DevOps Transformation",
//     description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
//     image: "./public/Image-ASSET-small-SIZE-Default-STATE-DEFAULT2@3x.png",
//   },
// ];

// export default function LandingPage() {
//   return (
//     <main className="w-full">
//       {/* ✅ HERO (Keep your old design as-is) */}
//       {/* Keep Hero section from your existing code */}

//       {/* ✅ WHAT WE DO */}
//       <section id="services" className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-5xl font-bold text-center mb-6">What We Do</h2>
//           <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
//             We specialize in three core areas that drive organizational transformation.
//           </p>
//           <div className="grid md:grid-cols-3 gap-10">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-500"
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-indigo-700 to-indigo-500 flex items-center justify-center text-white rounded-xl mb-6 mx-auto">
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
//                 <p className="text-gray-600 mb-4">{service.description}</p>
//                 <ul className="space-y-2">
//                   {service.features.map((f, i) => (
//                     <li key={i} className="flex items-center text-gray-700">
//                       <CheckCircle className="h-5 w-5 text-indigo-600 mr-2" /> {f}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ HOW WE DO DIFFERENTLY */}
//       <section id="how-we-differ" className="py-24 bg-white relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-5xl font-bold text-center mb-6">How We Do Differently</h2>
//           <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
//             Our unique approach sets us apart in delivering exceptional technology solutions.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
//             {differentiators.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="text-center p-10 rounded-2xl bg-gray-50 hover:bg-indigo-50 transition transform hover:-translate-y-2"
//               >
//                 <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-indigo-700 to-indigo-500 text-white rounded-2xl mb-6 mx-auto">
//                   {item.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ OUR SOLUTIONS */}
//       <section id="solutions" className="py-24 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-5xl font-bold text-center mb-6">Our Solutions</h2>
//           <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-16">
//             Our expertise spans industry-leading platforms and frameworks.
//           </p>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {solutions.map((solution, idx) => (
//               <div
//                 key={idx}
//                 className="p-8 rounded-2xl bg-white text-center shadow hover:shadow-xl hover:bg-indigo-700 hover:text-white transition"
//               >
//                 <div className="text-5xl mb-4">{solution.logo}</div>
//                 <h3 className="text-xl font-bold mb-2">{solution.name}</h3>
//                 <p className="text-gray-600 group-hover:text-gray-200">{solution.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ OUR EXPERTISE (Converted from HTML) */}
//       <section id="expertise" className="py-24 bg-white relative">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-5xl font-bold mb-6">Our Expertise</h2>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-16">
//             It is a long established fact that a reader will be distracted by readable content.
//           </p>
//           <div className="grid md:grid-cols-3 gap-10">
//             <div className="p-10 rounded-2xl shadow-lg bg-gray-50 hover:-translate-y-2 transition">
//               <img src="./public/mentee-18812636@2x.png" alt="Consulting" className="mx-auto h-16 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">Consulting</h3>
//               <p className="text-gray-600">Strategic guidance for digital transformation success.</p>
//             </div>
//             <div className="p-10 rounded-2xl shadow-lg bg-gray-50 hover:-translate-y-2 transition">
//               <img src="./public/creative-15237931@2x.png" alt="AI" className="mx-auto h-16 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">AI Transformation</h3>
//               <p className="text-gray-600">Leverage AI to enhance operations and decision-making.</p>
//             </div>
//             <div className="p-10 rounded-2xl shadow-lg bg-gray-50 hover:-translate-y-2 transition">
//               <img src="./public/modernization-13496067@2x.png" alt="Modernization" className="mx-auto h-16 mb-6" />
//               <h3 className="text-2xl font-bold mb-4">Modernization</h3>
//               <p className="text-gray-600">Upgrade your infrastructure with modern cloud-native solutions.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* ✅ BLOGS (Converted from HTML design) */}
//       <section id="blogs" className="py-24 bg-indigo-900 text-white relative">
//         <div className="max-w-7xl mx-auto px-6">
//           <h2 className="text-5xl font-bold mb-6">Blogs</h2>
//           <p className="text-lg text-gray-300 mb-16">
//             Stay updated with the latest trends in cloud, AI, and digital transformation.
//           </p>
//           <div className="grid md:grid-cols-3 gap-10">
//             {blogs.map((blog, idx) => (
//               <div key={idx} className="bg-white text-gray-900 rounded-2xl shadow-lg overflow-hidden hover:-translate-y-2 transition">
//                 <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
//                   <p className="text-gray-600 mb-4">{blog.description}</p>
//                   <button className="inline-flex items-center px-4 py-2 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition">
//                     Read More →
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ✅ Keep TESTIMONIALS, CAREERS, CONTACT from your old code */}
//     </main>
//   );
// }
// ######################################
// import React from "react";
// import { Link } from "react-router-dom";
// import {
//   CheckCircle,
//   Target,
//   Lightbulb,
//   Users,
//   Rocket,
//   Award,
//   TrendingUp,
//   Brain,
//   Cloud,
//   Shield,
//   ArrowRight,
// } from "lucide-react";

// // Data
// const differentiators = [
//   {
//     icon: <Target className="h-12 w-12" />,
//     title: "Precision-Focused Approach",
//     description:
//       "We deliver targeted solutions that address your specific business challenges with surgical precision.",
//   },
//   {
//     icon: <Lightbulb className="h-12 w-12" />,
//     title: "Innovation-First Mindset",
//     description:
//       "Our team leverages cutting-edge technologies and methodologies to create breakthrough solutions.",
//   },
//   {
//     icon: <Users className="h-12 w-12" />,
//     title: "Collaborative Partnership",
//     description:
//       "We work as an extension of your team, ensuring seamless integration and knowledge transfer.",
//   },
//   {
//     icon: <Rocket className="h-12 w-12" />,
//     title: "Rapid Implementation",
//     description:
//       "Our agile methodology ensures faster time-to-market without compromising on quality.",
//   },
//   {
//     icon: <Award className="h-12 w-12" />,
//     title: "Proven Excellence",
//     description:
//       "Track record of successful transformations across government and enterprise sectors.",
//   },
//   {
//     icon: <TrendingUp className="h-12 w-12" />,
//     title: "Measurable Results",
//     description:
//       "We focus on delivering quantifiable business outcomes and continuous improvement.",
//   },
// ];

// const services = [
//   {
//     icon: <Brain className="h-10 w-10" />,
//     title: "AI Transformation",
//     description:
//       "Harness AI to revolutionize business processes and decision-making.",
//     features: ["Machine Learning", "Predictive Analytics", "Automation"],
//   },
//   {
//     icon: <Cloud className="h-10 w-10" />,
//     title: "Modernization",
//     description:
//       "Migrate & optimize with cloud solutions for scalability & efficiency.",
//     features: ["AWS Migration", "Multi-Cloud Strategy", "DevOps"],
//   },
//   {
//     icon: <Shield className="h-10 w-10" />,
//     title: "Consulting",
//     description: "Expert guidance to navigate complex technology challenges.",
//     features: ["Digital Strategy", "Tech Assessment", "Change Management"],
//   },
// ];

// const blogs = [
//   {
//     title: "Big DATA",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/1.png",
//   },
//   {
//     title: "Cloud ",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/2.png",
//   },
//   {
//     title: "DevOps Transformation",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/3.png",
//   },
// ];

// export default function LandingPage() {
//   return (
//     <main className="w-full">
//       {/* ✅ HERO */}
//       {/* ✅ HERO CAROUSEL WITH SLIDES HAVING 2 IMAGES EACH */}
// <section className="relative bg-gray-100 text-white overflow-hidden py-20 lg:py-32">
//   <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
//     <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
//       Transforming Government & Enterprise
//       <span className="block text-blue-600">Through Innovation</span>
//     </h1>
//     <p className="text-lg lg:text-xl mb-12 max-w-3xl mx-auto text-gray-700">
//       We deliver cutting-edge technology solutions that modernize operations, enhance security, and drive digital transformation across all sectors.
//     </p>
//     <Link
//       to="/contact"
//       className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-lg"
//     >
//       Get Started
//       <ArrowRight className="ml-2 h-5 w-5" />
//     </Link>
//   </div>

//   {/* Slides */}
//   <div className="relative w-full mt-16">
//     <div className="flex animate-slide-left gap-6 px-6">
//       {[
//         {
//           title: "Federal",
//           sub: "Driving digital transformation across federal agencies with secure IT solutions.",
//           images: ["/images/federal1.jpg", "/images/federal2.jpg"],
//         },
//         {
//           title: "Healthcare",
//           sub: "Modern IT solutions that enhance patient care and streamline operations.",
//           images: ["/images/healthcare1.jpg", "/images/healthcare2.jpg"],
//         },
//         {
//           title: "Modernization",
//           sub: "Seamless IT modernization that drives agility, efficiency, and long-term growth.",
//           images: ["/images/modernization1.jpg", "/images/modernization2.jpg"],
//         },
//         {
//           title: "AI Transformation",
//           sub: "Harness AI to unlock insights, automate processes, and accelerate innovation.",
//           images: ["./public/12.jpg", "./public/12.jpg"],
//         },
//       ].map((slide, idx) => (
//         <div
//           key={idx}
//           className="min-w-[640px] sm:min-w-[720px] md:min-w-[960px] lg:min-w-[1080px] h-72 lg:h-80 rounded-xl overflow-hidden relative flex-shrink-0 shadow-lg flex gap-4"
//         >
//           {slide.images.map((img, i) => (
//             <div
//               key={i}
//               className="flex-1 bg-cover bg-center rounded-xl relative"
//               style={{ backgroundImage: `url(${img})` }}
//             >
//               <div className="absolute inset-0 bg-black bg-opacity-30 rounded-xl"></div>
//             </div>
//           ))}
//           <div className="absolute inset-0 flex flex-col justify-center px-6">
//             <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
//               {slide.title}
//             </h3>
//             <p className="text-sm sm:text-base text-gray-200">{slide.sub}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Tailwind Keyframe Animation */}
//   <style>{`
//     @keyframes slideLeft {
//       0% { transform: translateX(0%); }
//       100% { transform: translateX(-100%); }
//     }
//     .animate-slide-left {
//       display: flex;
//       animation: slideLeft 30s linear infinite;
//     }
//   `}</style>
// </section>

//       {/* ✅ WHAT WE DO - UNIQUE SPLIT LAYOUT */}
// <section
//   id="services"
//   className="relative py-32 bg-gray-50 overflow-hidden"
// >
//   {/* Optional subtle background shapes */}
//   <div className="absolute inset-0">
//     <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full opacity-40"></div>
//     <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-indigo-50 rounded-full opacity-40"></div>
//   </div>

//   <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">
//     {/* Left Side - Main Paragraph */}
//     <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center">
//       <h2 className="text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
//       <p className="text-lg text-gray-700 mb-6">
//         Technogen is a certified minority women-owned business enterprise that has been providing global IT services and consulting since 2003. From our headquarters in Chantilly, VA, and offices in Hyderabad and Khammam, India, our team of certified experts has powered over 500 successful end-to-end solutions for public and private sector clients.
//       </p>
//       <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Know more</span>
//     </div>

//     {/* Right Side - Service Cards */}
//     <div className="lg:w-1/2 flex flex-col gap-8">
//       {services.map((service, idx) => (
//         <div
//           key={idx}
//           className="group relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex items-start gap-6 transform translate-x-20 opacity-0 animate-slide-in"
//           style={{ animationDelay: `${idx * 0.2}s` }}
//         >
//           {/* Icon */}
//           <div className="w-16 h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
//             {service.icon}
//           </div>
//           <div>
//             <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#172059] mb-2">
//               {service.title}
//             </h3>
//             <p className="text-gray-600 text-sm">{service.description}</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Tailwind Keyframe Animation */}
//   <style>{`
//     @keyframes slideIn {
//       0% { opacity: 0; transform: translateX(50px); }
//       100% { opacity: 1; transform: translateX(0); }
//     }
//     .animate-slide-in {
//       animation: slideIn 0.7s ease forwards;
//     }
//   `}</style>
// </section>
//       {/* ✅ WHAT WE DO */}
//     {/* ✅ WHAT WE DO */}

// {/* ✅ HOW WE DO DIFFERENTLY - PARAGRAPH STYLE */}
// <section
//   id="how-we-differ"
//   className="relative py-24 bg-cover bg-center"
//   style={{ backgroundImage: "url('https://wallpapercave.com/wp/YsmdCUB.jpg')" }}
// >
//   {/* White overlay */}
//   <div className="absolute inset-0 bg-white/80"></div>

//   <div className="relative max-w-4xl mx-auto px-6 text-center">
//     {/* Section Heading */}
//     <h2 className="text-5xl font-bold text-gray-900 mb-6">
//       How We Do Differently
//     </h2>
//     <p className="text-xl text-gray-700 mb-12">
//       Our unique approach sets us apart in delivering exceptional technology solutions.
//     </p>

//     {/* Paragraph with points */}
//     <div className="text-left text-gray-700 space-y-6 bg-white/90 p-10 rounded-3xl shadow-xl">
//       <p>
//         <strong>SUSTAINABILITY COMMITMENT:</strong> At Technogen, sustainability is integral to business success. We act ethically, transparently, and responsibly. Making sustainability a part of all global business relationships.
//       </p>
//       <ul className="list-disc pl-6 space-y-3 text-left">
//   <li>As an Accrediting Body for the global SCS-9001 standard, we advance ICT supply chain security.</li>
//   <li>Ensuring trusted suppliers, resilient infrastructure, and long-lasting sustainable impact across the entire value chain.</li>
//   <li>Integrating sustainability practices into every project and business engagement.</li>
//   <li>Promoting responsible innovation for a better global impact.</li>
// </ul>

//     </div>
//   </div>
// </section>


// {/* OUR SOLUTIONS */}
// <section id="solutions" className="py-24 bg-gray-50 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">

//     {/* Left Side */}
//     <div className="lg:w-1/3 mb-12 lg:mb-0">
//       <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Solutions</h2>
//       <p className="text-lg text-gray-600">
//         End-to-end IT services delivering innovation, efficiency, and business transformation.
//       </p>
//     </div>

//     {/* Right Side - 2x2 Grid */}
//     <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
//       {[
//         {
//           title: "ServiceNow",
//           description: "Streamlining workflows for smarter, faster, enterprise-wide service delivery.",
//           iconUrl: "https://tse4.mm.bing.net/th/id/OIP.F6gEN8Y_-GGyL6r2nPzLYAHaFd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//           borderColor: "border-indigo-900"
//         },
//         {
//           title: "Salesforce",
//           description: "Connecting customers through smarter, data-driven CRM solutions globally.",
//           iconUrl: "https://cdn-icons-png.flaticon.com/512/11132/11132040.png",
//           borderColor: "border-blue-700"
//         },
//         {
//           title: "AWS",
//           description: "Cloud-powered scalability driving agility, security, and business growth.",
//           iconUrl: "https://w7.pngwing.com/pngs/555/220/png-transparent-aws-hd-logo.png",
//           borderColor: "border-orange-500"
//         },
//         {
//           title: "DevSecOps Transformation",
//           description: "Embedding security into agile development for continuous innovation.",
//           iconUrl: "https://media.istockphoto.com/id/2144257673/vector/promote-secure-development-practices-with-the-devsecops-icon-integrating-security-into.jpg?s=170667a&w=0&k=20&c=8PH_JqfQ2BPEtuy--AWOh4U3oY5gUCmBfkQRu2FkVIE=",
//           borderColor: "border-green-600"
//         },
//       ].map((solution, idx) => (
//         <div
//           key={idx}
//           className="group p-8 rounded-xl bg-white shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center animate-fade-up"
//           style={{ animationDelay: `${idx * 0.2}s` }}
//         >
//           {/* Outer Circle with Border */}
//           <div className={`relative w-20 h-20 flex items-center justify-center rounded-full border-4 ${solution.borderColor} mb-4 group-hover:scale-110 transition-transform`}>
//             <img src={solution.iconUrl} alt={solution.title} className="h-10 w-10 object-contain" />
//           </div>

//           <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-800 transition-colors mb-2">
//             {solution.title}
//           </h3>
//           <p className="text-gray-600 text-sm">{solution.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Tailwind Keyframe Animation */}
//   <style>{`
//     @keyframes fadeUp {
//       0% { opacity: 0; transform: translateY(20px); }
//       100% { opacity: 1; transform: translateY(0); }
//     }
//     .animate-fade-up {
//       animation: fadeUp 0.6s ease forwards;
//     }
//   `}</style>
// </section>


//      {/* ✅ OUR EXPERTISE */}
// <section
//   id="expertise"
//   className="relative py-16 bg-cover bg-center"
//   style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-blue-technology-background_23-2149352058.jpg')" }}
// >
//   {/* White overlay */}
//   <div className="absolute inset-0 bg-white bg-opacity-80"></div>

//   <div className="relative max-w-7xl mx-auto px-6 text-center">
//     <h2 className="text-5xl font-bold mb-4">Our Expertise</h2>
//     <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
//       Turning technology and innovation into measurable business impact.
//     </p>

//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
//       {[
//         {
//           title: "CONSULTING",
//           description: "Guiding strategy and execution for smarter business outcomes.",
//           icon: "./public/mentee_18812636.png",
//         },
//         {
//           title: "MODERNIZATION",
//           description: "Upgrading legacy systems into agile, future-ready digital platforms.",
//           icon: "./public/modernization_13496067.png",
//         },
//         {
//           title: "AI TRANSFORMATION",
//           description: "Leveraging AI to drive automation, intelligence, and growth.",
//           icon: "./public/creative_15237931.png",
//         },
//       ].map((item, idx) => (
//         <div
//           key={idx}
//           className="relative p-10 rounded-2xl shadow-md bg-white overflow-hidden group hover:shadow-2xl transition"
//         >
//           {/* Outer Circle with Pink Border */}
//           <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-4 border-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//             {/* Icon perfectly centered */}
//             <img
//               src={item.icon}
//               alt={item.title}
//               className="w-16 h-16 object-contain"
//             />
//           </div>

//           <h3 className="text-2xl font-bold text-indigo-900 mb-4">{item.title}</h3>
//           <p className="text-gray-600">{item.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

// {/* BLOGS */}
// <section id="blogs" className="relative py-8 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6 text-center">

//     {/* Heading */}
//     <h2 className="text-5xl font-extrabold tracking-tight animate-fade-in">
//       Insights
//     </h2>

//     {/* Description */}
//     <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 mb-12 animate-fade-in">
//       Stay updated with the latest insights in technology, innovation, and business strategy. Our blogs inspire ideas and help you stay ahead.
//     </p>

//     {/* Blog Grid */}
//     <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//       {blogs.map((blog, idx) => (
//         <div
//           key={idx}
//           className="relative group bg-gradient-to-tr from-indigo-800 via-indigo-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:scale-105"
//         >
//           {/* Hover Highlight */}
//           <div className="absolute inset-0 bg-gradient-to-t from-pink-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none"></div>

//           <img
//             src={blog.image}
//             alt={blog.title}
//             className="w-full h-64 object-cover rounded-t-3xl"
//           />
//           <div className="p-6 space-y-4">
//             <h3 className="text-2xl font-semibold text-white">{blog.title}</h3>
//             <p className="text-gray-300">{blog.description}</p>
//             <button className="inline-flex items-center px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-300">
//               Read More
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="ml-2 h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* Decorative Blobs */}
//     <div className="absolute -bottom-20 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-blob"></div>
//     <div className="absolute -top-24 right-0 w-72 h-72 bg-indigo-700/20 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
//   </div>

//   <style>{`
//     @keyframes fadeIn {
//       from { opacity: 0; transform: translateY(20px); }
//       to { opacity: 1; transform: translateY(0); }
//     }

//     @keyframes blob {
//       0%, 100% { transform: translate(0, 0) scale(1); }
//       33% { transform: translate(20px, -10px) scale(1.1); }
//       66% { transform: translate(-15px, 15px) scale(0.9); }
//     }

//     .animate-fade-in {
//       animation: fadeIn 1s ease-out forwards;
//     }

//     .animate-blob {
//       animation: blob 8s infinite;
//     }

//     .animation-delay-2000 {
//       animation-delay: 2s;
//     }
//   `}</style>
// </section>

//            {/* TESTIMONIALS */}
//   {/* TESTIMONIALS */}
// <section id="testimonials" className="relative py-24 bg-gray-100">
//   <div className="max-w-7xl mx-auto px-6 text-center">
//     <h2 className="text-5xl font-extrabold mb-6">CUSTOMER SPEAK</h2>
//     <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
//       See what our clients say about working with us. Stories of collaboration, success, and real impact that reflect our commitment to delivering excellence. 
//     </p>

//     {/* Carousel Container */}
//     <div className="relative overflow-hidden">
//       <div className="flex transition-transform duration-500 ease-in-out" style={{ animation: "carouselScroll 20s linear infinite" }}>
//         {[
//           {
//             name: "Example 1 ",
//             role: "CTO, GovTech",
//             quote: "They transformed our legacy systems with precision and speed. Highly recommended!",
//             image: "https://th.bing.com/th/id/OIP.WpnGIPj1DKAGo-CP64znTwHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
//           },
//           {
//             name: "Example 2",
//             role: "Director, Enterprise IT",
//             quote: "The AI solutions they delivered helped us automate critical processes effortlessly.",
//             image: "https://icons.veryicon.com/png/System/Small%20%26%20Flat/user%20female.png",
//           },
//           {
//             name: "Example 3",
//             role: "CEO, StartUpX",
//             quote: "Professional, innovative, and results-driven. A true partner in digital transformation.",
//             image: "https://tse4.mm.bing.net/th/id/OIP.nBLv6J1hejGskyCTsK99KwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//           },
//           {
//             name: "Example 4",
//             role: "Lead Architect, CloudWorks",
//             quote: "Outstanding expertise and dedication in delivering cloud solutions.",
//             image: "https://tse1.mm.bing.net/th/id/OIP.6UHxqW8ieZUeJZAIajhP-AHaHa?r=0&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
//           },
//         ].map((testimonial, idx) => (
//           <div key={idx} className="bg-white p-10 rounded-3xl shadow-lg min-w-[300px] max-w-sm mx-4 inline-block">
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-20 h-20 rounded-full mx-auto border-4 border-indigo-500 shadow-lg"
//             />

//             <p className="text-gray-700 italic mt-6 mb-6">“{testimonial.quote}”</p>
//             <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
//             <p className="text-sm text-gray-500">{testimonial.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Inline CSS for Carousel Animation */}
//   <style>{`
//     @keyframes carouselScroll {
//       0% { transform: translateX(0); }
//       100% { transform: translateX(-50%); }
//     }
//   `}</style>
// </section>


// {/* CAREERS */}
// {/* CAREERS */}
// {/* CAREERS */}
// <section
//   id="careers"
//   className="relative py-24 bg-cover bg-center bg-no-repeat"
//   style={{ backgroundImage: "url('https://tse2.mm.bing.net/th/id/OIP.EvSHnWpcp2OtUtpqyftecAHaEH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')" }}
// >
//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black bg-opacity-80"></div>

//   <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
//     <h2 className="text-5xl font-extrabold mb-6 animate-fade-in">Careers</h2>

//     <p className="text-lg text-indigo-200 mb-10 animate-fade-in">
//       Build a career that grows with you and challenges you to reach your full potential.
//       Join a team driven by purpose, innovation, and collaboration.  
//       Here every day offers the opportunity to make a real impact.
//     </p>

//     <Link
//       to="/careers"
//       className="inline-flex px-8 py-4 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition transform animate-bounce"
//     >
//       View Openings
//     </Link>
//   </div>
// </section>


//      {/* CONTACT US */}
// <section id="contact" className="relative py-24 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

//     {/* Animated Image with Curved Design */}
//     <div className="relative animate-slide-in-left">
//       <div className="overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-lg">
//         <img
//           src="/public/image.png"  // Replace with your actual image
//           alt="Contact Us"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>

//     {/* Animated Contact Form */}
//     <form className="bg-white p-10 rounded-2xl shadow space-y-6 animate-slide-in-right">
//       <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
//       <p className="text-gray-600 mb-6">
//         We’d love to hear from you! Whether it’s a query, idea, or partnership opportunity, we’re here to help.
//         Drop us a message and let’s start the conversation.
//       </p>

//       <input
//         type="text"
//         placeholder="Your Name"
//         className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
//       />
//       <textarea
//         placeholder="Your Message"
//         rows={5}
//         className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
//       ></textarea>

//       <button
//         type="submit"
//         className="w-full py-4 rounded-lg bg-indigo-900 text-white font-semibold hover:bg-indigo-800 transition"
//       >
//         Send Message
//       </button>
//     </form>
//   </div>
// </section>


//     </main>
//   );
// }
  
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Brain,
//   Cloud,
//   Shield,
// } from "lucide-react";

// // Hero Slider Data
// const heroSlides = [
//   {
//     title: "Federal",
//     subtitle: "Driving digital transformation across federal agencies with secure IT solutions.",
//     image: "./public/Fedral.jpg",
//   },
//   {
//     title: "Healthcare",
//     subtitle: "Modern IT solutions that enhance patient care and streamline operations.",
//     image: "./public/Healthcare.png",
//   },
//   {
//     title: "Modernization",
//     subtitle: "Seamless IT modernization that drives agility, efficiency, and long-term growth.",
//     image: "./public/Modernization.jpg",
//   },
//   {
//     title: "AI Transformation",
//     subtitle: "Harness AI to unlock insights, automate processes, and accelerate innovation.",
//     image: "./public/AI.jpg",
//   },
// ];

// // Services Data
// const services = [
//   {
//     icon: <Brain className="h-10 w-10" />,
//     title: "AI Transformation",
//     description:
//       "Harness AI to revolutionize business processes and decision-making.",
//     features: ["Machine Learning", "Predictive Analytics", "Automation"],
//   },
//   {
//     icon: <Cloud className="h-10 w-10" />,
//     title: "Modernization",
//     description:
//       "Migrate & optimize with cloud solutions for scalability & efficiency.",
//     features: ["AWS Migration", "Multi-Cloud Strategy", "DevOps"],
//   },
//   {
//     icon: <Shield className="h-10 w-10" />,
//     title: "Consulting",
//     description: "Expert guidance to navigate complex technology challenges.",
//     features: ["Digital Strategy", "Tech Assessment", "Change Management"],
//   },
// ];

// // Blogs Data
// const blogs = [
//   {
//     title: "Big DATA",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/1.png",
//   },
//   {
//     title: "Cloud",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/2.png",
//   },
//   {
//     title: "DevOps Transformation",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/3.png",
//   },
// ];

// export default function LandingPage() {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroSlides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="w-full">

//       {/* ================== HERO SLIDER ================== */}
//        <section className="relative w-full min-h-screen overflow-hidden">
//   {heroSlides.map((slide, idx) => (
//     <div
//       key={idx}
//       className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//         idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
//       }`}
//       style={{
//         backgroundImage: `url(${slide.image})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content */}
//       <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-20 lg:px-32 text-left">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6">
//           {slide.title}
//         </h1>
//         <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
//           {slide.subtitle}
//         </p>
//         <Link
//   to="/contact"
//   className="mt-6 md:mt-8 inline-flex items-center px-6 md:px-8 py-3 md:py-4 
//              bg-blue/10 backdrop-blur-md text-white font-semibold 
//              rounded-lg border border-blue/30 shadow-lg hover:bg-blue/20 
//              transition duration-300"
// >
//   Get Started
//   <ArrowRight className="ml-2 h-5 w-5" />
// </Link>
//       </div>
//     </div>
//   ))}
// </section>


//       {/* ================== WHAT WE DO ================== */}
//       <section id="services" className="relative py-32 bg-gray-50 overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full opacity-40"></div>
//           <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-indigo-50 rounded-full opacity-40"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">
//           <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">What We Do</h2>
//             <p className="text-lg text-gray-700 mb-6">
//               Technogen is a certified minority women-owned business enterprise that has been providing global IT services and consulting since 2003. From our headquarters in Chantilly, VA, and offices in Hyderabad and Khammam, India, our team of certified experts has powered over 500 successful end-to-end solutions for public and private sector clients
//             </p>
//             <span className="text-blue-600 font-semibold cursor-pointer hover:underline">Know more</span>
//           </div>

//           <div className="lg:w-1/2 flex flex-col gap-8">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="group relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex items-start gap-6 transform translate-x-20 opacity-0 animate-slide-in"
//                 style={{ animationDelay: `${idx * 0.2}s` }}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#172059] mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <style>{`
//           @keyframes slideIn {
//             0% { opacity: 0; transform: translateX(50px); }
//             100% { opacity: 1; transform: translateX(0); }
//           }
//           .animate-slide-in {
//             animation: slideIn 0.7s ease forwards;
//           }
//         `}</style>
//       </section>

// {/* ✅ HOW WE DO DIFFERENTLY - PARAGRAPH STYLE */}
// <section
//   id="how-we-differ"
//   className="relative py-24 bg-cover bg-center"
//   style={{ backgroundImage: "url('https://wallpapercave.com/wp/YsmdCUB.jpg')" }}
// >
//   {/* White overlay */}
//   <div className="absolute inset-0 bg-white/80"></div>

//   <div className="relative max-w-4xl mx-auto px-6 text-center">
//     {/* Section Heading */}
//     <h2 className="text-5xl font-bold text-gray-900 mb-6">
//       How We Do Differently
//     </h2>
//     <p className="text-xl text-gray-700 mb-12">
//       Our unique approach sets us apart in delivering exceptional technology solutions.
//     </p>

//     {/* Paragraph with points */}
//     <div className="text-left text-gray-700 space-y-6 bg-white/90 p-10 rounded-3xl shadow-xl">
//       <p>
//         <strong>SUSTAINABILITY COMMITMENT:</strong> At Technogen, sustainability is integral to business success. We act ethically, transparently, and responsibly. Making sustainability a part of all global business relationships.
//       </p>
//       <ul className="list-disc pl-6 space-y-3 text-left">
//   <li>As an Accrediting Body for the global SCS-9001 standard, we advance ICT supply chain security.</li>
//   <li>Ensuring trusted suppliers, resilient infrastructure, and long-lasting sustainable impact across the entire value chain.</li>
//   <li>Integrating sustainability practices into every project and business engagement.</li>
//   <li>Promoting responsible innovation for a better global impact.</li>
// </ul>

//     </div>
//   </div>
// </section>


// {/* OUR SOLUTIONS */}
// <section id="solutions" className="py-24 bg-gray-50 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">

//     {/* Left Side */}
//     <div className="lg:w-1/3 mb-12 lg:mb-0">
//       <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Solutions</h2>
//       <p className="text-lg text-gray-600">
//         End-to-end IT services delivering innovation, efficiency, and business transformation.
//       </p>
//     </div>

//     {/* Right Side - 2x2 Grid */}
//     <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
//       {[
//         {
//           title: "ServiceNow",
//           description: "Streamlining workflows for smarter, faster, enterprise-wide service delivery.",
//           iconUrl: "https://tse4.mm.bing.net/th/id/OIP.F6gEN8Y_-GGyL6r2nPzLYAHaFd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//           borderColor: "border-indigo-900"
//         },
//         {
//           title: "Salesforce",
//           description: "Connecting customers through smarter, data-driven CRM solutions globally.",
//           iconUrl: "https://cdn-icons-png.flaticon.com/512/11132/11132040.png",
//           borderColor: "border-blue-700"
//         },
//         {
//           title: "AWS",
//           description: "Cloud-powered scalability driving agility, security, and business growth.",
//           iconUrl: "https://w7.pngwing.com/pngs/555/220/png-transparent-aws-hd-logo.png",
//           borderColor: "border-orange-500"
//         },
//         {
//           title: "DevSecOps Transformation",
//           description: "Embedding security into agile development for continuous innovation.",
//           iconUrl: "https://media.istockphoto.com/id/2144257673/vector/promote-secure-development-practices-with-the-devsecops-icon-integrating-security-into.jpg?s=170667a&w=0&k=20&c=8PH_JqfQ2BPEtuy--AWOh4U3oY5gUCmBfkQRu2FkVIE=",
//           borderColor: "border-green-600"
//         },
//       ].map((solution, idx) => (
//         <div
//           key={idx}
//           className="group p-8 rounded-xl bg-white shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center animate-fade-up"
//           style={{ animationDelay: `${idx * 0.2}s` }}
//         >
//           {/* Outer Circle with Border */}
//           <div className={`relative w-20 h-20 flex items-center justify-center rounded-full border-4 ${solution.borderColor} mb-4 group-hover:scale-110 transition-transform`}>
//             <img src={solution.iconUrl} alt={solution.title} className="h-10 w-10 object-contain" />
//           </div>

//           <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-800 transition-colors mb-2">
//             {solution.title}
//           </h3>
//           <p className="text-gray-600 text-sm">{solution.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>

//   {/* Tailwind Keyframe Animation */}
//   <style>{`
//     @keyframes fadeUp {
//       0% { opacity: 0; transform: translateY(20px); }
//       100% { opacity: 1; transform: translateY(0); }
//     }
//     .animate-fade-up {
//       animation: fadeUp 0.6s ease forwards;
//     }
//   `}</style>
// </section>


//      {/* ✅ OUR EXPERTISE */}
// <section
//   id="expertise"
//   className="relative py-16 bg-cover bg-center"
//   style={{ backgroundImage: "url('https://img.freepik.com/free-vector/abstract-blue-technology-background_23-2149352058.jpg')" }}
// >
//   {/* White overlay */}
//   <div className="absolute inset-0 bg-white bg-opacity-80"></div>

//   <div className="relative max-w-7xl mx-auto px-6 text-center">
//     <h2 className="text-5xl font-bold mb-4">Our Expertise</h2>
//     <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-12">
//       Turning technology and innovation into measurable business impact.
//     </p>

//     <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
//       {[
//         {
//           title: "CONSULTING",
//           description: "Guiding strategy and execution for smarter business outcomes.",
//           icon: "./public/mentee_18812636.png",
//         },
//         {
//           title: "MODERNIZATION",
//           description: "Upgrading legacy systems into agile, future-ready digital platforms.",
//           icon: "./public/modernization_13496067.png",
//         },
//         {
//           title: "AI TRANSFORMATION",
//           description: "Leveraging AI to drive automation, intelligence, and growth.",
//           icon: "./public/creative_15237931.png",
//         },
//       ].map((item, idx) => (
//         <div
//           key={idx}
//           className="relative p-10 rounded-2xl shadow-md bg-white overflow-hidden group hover:shadow-2xl transition"
//         >
//           {/* Outer Circle with Pink Border */}
//           <div className="relative w-32 h-32 mx-auto mb-6 rounded-full border-4 border-pink-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
//             {/* Icon perfectly centered */}
//             <img
//               src={item.icon}
//               alt={item.title}
//               className="w-16 h-16 object-contain"
//             />
//           </div>

//           <h3 className="text-2xl font-bold text-indigo-900 mb-4">{item.title}</h3>
//           <p className="text-gray-600">{item.description}</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>
//       {/* ================== BLOGS ================== */}
//       <section id="blogs" className="relative py-8 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-5xl font-extrabold tracking-tight animate-fade-in">Insights</h2>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 mb-12 animate-fade-in">
//             Stay updated with the latest insights in technology, innovation, and business strategy.
//           </p>
//           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {blogs.map((blog, idx) => (
//               <div key={idx} className="relative group bg-gradient-to-tr from-indigo-800 via-indigo-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:scale-105">
//                 <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover rounded-t-3xl" />
//                 <div className="p-6 space-y-4">
//                   <h3 className="text-2xl font-semibold text-white">{blog.title}</h3>
//                   <p className="text-gray-300">{blog.description}</p>
//                   <button className="inline-flex items-center px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition duration-300">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//            {/* TESTIMONIALS */}
//   {/* TESTIMONIALS */}
// <section id="testimonials" className="relative py-24 bg-gray-100">
//   <div className="max-w-7xl mx-auto px-6 text-center">
//     <h2 className="text-5xl font-extrabold mb-6">CUSTOMER SPEAK</h2>
//     <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
//       See what our clients say about working with us. Stories of collaboration, success, and real impact that reflect our commitment to delivering excellence. 
//     </p>

//     {/* Carousel Container */}
//     <div className="relative overflow-hidden">
//       <div className="flex transition-transform duration-500 ease-in-out" style={{ animation: "carouselScroll 20s linear infinite" }}>
//         {[
//           {
//             name: "Example 1 ",
//             role: "CTO, GovTech",
//             quote: "They transformed our legacy systems with precision and speed. Highly recommended!",
//             image: "https://th.bing.com/th/id/OIP.WpnGIPj1DKAGo-CP64znTwHaHa?w=166&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
//           },
//           {
//             name: "Example 2",
//             role: "Director, Enterprise IT",
//             quote: "The AI solutions they delivered helped us automate critical processes effortlessly.",
//             image: "https://icons.veryicon.com/png/System/Small%20%26%20Flat/user%20female.png",
//           },
//           {
//             name: "Example 3",
//             role: "CEO, StartUpX",
//             quote: "Professional, innovative, and results-driven. A true partner in digital transformation.",
//             image: "https://tse4.mm.bing.net/th/id/OIP.nBLv6J1hejGskyCTsK99KwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
//           },
//           {
//             name: "Example 4",
//             role: "Lead Architect, CloudWorks",
//             quote: "Outstanding expertise and dedication in delivering cloud solutions.",
//             image: "https://tse1.mm.bing.net/th/id/OIP.6UHxqW8ieZUeJZAIajhP-AHaHa?r=0&w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3",
//           },
//         ].map((testimonial, idx) => (
//           <div key={idx} className="bg-white p-10 rounded-3xl shadow-lg min-w-[300px] max-w-sm mx-4 inline-block">
//             <img
//               src={testimonial.image}
//               alt={testimonial.name}
//               className="w-20 h-20 rounded-full mx-auto border-4 border-indigo-500 shadow-lg"
//             />

//             <p className="text-gray-700 italic mt-6 mb-6">“{testimonial.quote}”</p>
//             <h4 className="text-xl font-semibold text-gray-900">{testimonial.name}</h4>
//             <p className="text-sm text-gray-500">{testimonial.role}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>

//   {/* Inline CSS for Carousel Animation */}
//   <style>{`
//     @keyframes carouselScroll {
//       0% { transform: translateX(0); }
//       100% { transform: translateX(-50%); }
//     }
//   `}</style>
// </section>


// {/* CAREERS */}
// {/* CAREERS */}
// {/* CAREERS */}
// <section
//   id="careers"
//   className="relative py-24 bg-cover bg-center bg-no-repeat"
//   style={{ backgroundImage: "url('https://tse2.mm.bing.net/th/id/OIP.EvSHnWpcp2OtUtpqyftecAHaEH?r=0&rs=1&pid=ImgDetMain&o=7&rm=3')" }}
// >
//   {/* Dark overlay */}
//   <div className="absolute inset-0 bg-black bg-opacity-80"></div>

//   <div className="relative max-w-4xl mx-auto px-6 text-center text-white">
//     <h2 className="text-5xl font-extrabold mb-6 animate-fade-in">Careers</h2>

//     <p className="text-lg text-indigo-200 mb-10 animate-fade-in">
//       Build a career that grows with you and challenges you to reach your full potential.
//       Join a team driven by purpose, innovation, and collaboration.  
//       Here every day offers the opportunity to make a real impact.
//     </p>

//     <Link
//       to="/careers"
//       className="inline-flex px-8 py-4 rounded-lg bg-pink-500 text-white font-semibold hover:bg-pink-600 transition transform animate-bounce"
//     >
//       View Openings
//     </Link>
//   </div>
// </section>


//      {/* CONTACT US */}
// <section id="contact" className="relative py-24 bg-gray-50">
//   <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">

//     {/* Animated Image with Curved Design */}
//     <div className="relative animate-slide-in-left">
//       <div className="overflow-hidden rounded-tl-[100px] rounded-br-[100px] shadow-lg">
//         <img
//           src="/public/image.png"  // Replace with your actual image
//           alt="Contact Us"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>

//     {/* Animated Contact Form */}
//     <form className="bg-white p-10 rounded-2xl shadow space-y-6 animate-slide-in-right">
//       <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h2>
//       <p className="text-gray-600 mb-6">
//         We’d love to hear from you! Whether it’s a query, idea, or partnership opportunity, we’re here to help.
//         Drop us a message and let’s start the conversation.
//       </p>

//       <input
//         type="text"
//         placeholder="Your Name"
//         className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
//       />
//       <input
//         type="email"
//         placeholder="Your Email"
//         className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
//       />
//       <textarea
//         placeholder="Your Message"
//         rows={5}
//         className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-indigo-600 outline-none"
//       ></textarea>

//       <button
//         type="submit"
//         className="w-full py-4 rounded-lg bg-indigo-900 text-white font-semibold hover:bg-indigo-800 transition"
//       >
//         Send Message
//       </button>
//     </form>
//   </div>
// </section>


//     </main>
//   );
// }


// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Brain, Cloud, Shield } from "lucide-react";

// // Hero Slider Data
// const heroSlides = [
//   {
//     title: "Federal",
//     subtitle:
//       "Driving digital transformation across federal agencies with secure IT solutions.",
//     image: "./public/Fedral.jpg",
//   },
//   {
//     title: "Healthcare",
//     subtitle:
//       "Modern IT solutions that enhance patient care and streamline operations.",
//     image: "./public/Healthcare.png",
//   },
//   {
//     title: "Modernization",
//     subtitle:
//       "Seamless IT modernization that drives agility, efficiency, and long-term growth.",
//     image: "./public/Modernization.jpg",
//   },
//   {
//     title: "AI Transformation",
//     subtitle:
//       "Harness AI to unlock insights, automate processes, and accelerate innovation.",
//     image: "./public/AI.jpg",
//   },
// ];

// // Services Data
// const services = [
//   {
//     icon: <Brain className="h-10 w-10" />,
//     title: "AI Transformation",
//     description:
//       "Harness AI to revolutionize business processes and decision-making.",
//     features: ["Machine Learning", "Predictive Analytics", "Automation"],
//   },
//   {
//     icon: <Cloud className="h-10 w-10" />,
//     title: "Modernization",
//     description:
//       "Migrate & optimize with cloud solutions for scalability & efficiency.",
//     features: ["AWS Migration", "Multi-Cloud Strategy", "DevOps"],
//   },
//   {
//     icon: <Shield className="h-10 w-10" />,
//     title: "Consulting",
//     description: "Expert guidance to navigate complex technology challenges.",
//     features: ["Digital Strategy", "Tech Assessment", "Change Management"],
//   },
// ];

// // Blogs Data
// const blogs = [
//   {
//     title: "Big DATA",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/1.png",
//   },
//   {
//     title: "Cloud",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/2.png",
//   },
//   {
//     title: "DevOps Transformation",
//     description:
//       "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     image: "./public/3.png",
//   },
// ];

// export default function LandingPage() {
//   const [current, setCurrent] = useState(0);

//   // Auto-slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % heroSlides.length);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <main className="w-full">
//       {/* ================== HERO SLIDER ================== */}
//       <section className="relative w-full min-h-screen overflow-hidden">
//         {heroSlides.map((slide, idx) => (
//           <div
//             key={idx}
//             className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
//               idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
//             }`}
//             style={{
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               backgroundRepeat: "no-repeat",
//             }}
//           >
//             {/* Dark overlay */}
//             <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//             {/* Content */}
//             <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-20 lg:px-32 text-left">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6">
//                 {slide.title}
//               </h1>
//               <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
//                 {slide.subtitle}
//               </p>
//               <Link
//                 to="/contact"
//                 className="mt-6 md:mt-8 inline-flex items-center px-6 md:px-8 py-3 md:py-4 
//                   bg-blue/10 backdrop-blur-md text-white font-semibold 
//                   rounded-lg border border-blue/30 shadow-lg hover:bg-blue/20 
//                   transition duration-300"
//               >
//                 Get Started
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//         ))}
//       </section>

//       {/* ================== WHAT WE DO ================== */}
//       <section
//         id="services"
//         className="relative py-32 bg-gray-50 overflow-hidden"
//       >
//         {/* Background Decorations */}
//         <div className="absolute inset-0">
//           <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-blue-50 rounded-full opacity-40"></div>
//           <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-indigo-200 to-indigo-50 rounded-full opacity-40"></div>
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">
//           <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">
//               What We Do
//             </h2>
//             <p className="text-lg text-gray-700 mb-6">
//               Technogen is a certified minority women-owned business enterprise
//               that has been providing global IT services and consulting since
//               2003...
//             </p>
//             <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
//               Know more
//             </span>
//           </div>

//           <div className="lg:w-1/2 flex flex-col gap-8">
//             {services.map((service, idx) => (
//               <div
//                 key={idx}
//                 className="group relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex items-start gap-6 transform translate-x-20 opacity-0 animate-slide-in"
//                 style={{ animationDelay: `${idx * 0.2}s` }}
//               >
//                 <div className="w-16 h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
//                   {service.icon}
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#172059] mb-2">
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm">{service.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <style>{`
//           @keyframes slideIn {
//             0% { opacity: 0; transform: translateX(50px); }
//             100% { opacity: 1; transform: translateX(0); }
//           }
//           .animate-slide-in {
//             animation: slideIn 0.7s ease forwards;
//           }
//         `}</style>
//       </section>

//       {/* ✅ HOW WE DO DIFFERENTLY (Edge-to-Edge Box) */}
//       <section
//         id="how-we-differ"
//         className="relative py-24 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://wallpapercave.com/wp/YsmdCUB.jpg')",
//         }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-white/80"></div>

//         <div className="relative max-w-7xl mx-auto px-0 sm:px-6 text-center">
//           {/* Full-width box */}
//           <div className="bg-white/90 w-full p-10 sm:p-16 rounded-none shadow-xl">
//             <h2 className="text-5xl font-bold text-gray-900 mb-6">
//               How We Do Differently
//             </h2>
//             <p className="text-xl text-gray-700 mb-12">
//               Our unique approach sets us apart in delivering exceptional
//               technology solutions.
//             </p>
//             <ul className="list-disc pl-6 space-y-3 text-left text-gray-700">
//               <li>
//                 As an Accrediting Body for the global SCS-9001 standard, we
//                 advance ICT supply chain security.
//               </li>
//               <li>
//                 Ensuring trusted suppliers, resilient infrastructure, and
//                 long-lasting sustainable impact.
//               </li>
//               <li>
//                 Integrating sustainability practices into every project.
//               </li>
//               <li>Promoting responsible innovation for a better future.</li>
//             </ul>
//           </div>
//         </div>
//       </section>

//       {/* ================== BLOGS (Updated) ================== */}
//       <section
//         id="blogs"
//         className="relative py-16 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden"
//       >
//         <div className="max-w-7xl mx-auto px-6 text-center">
//           <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight animate-fade-in">
//             Blogs
//           </h2>
//           <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 mb-10 animate-fade-in">
//             Stay updated with the latest insights in technology, innovation, and
//             business strategy.
//           </p>

//           {/* Smaller Blog Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {blogs.map((blog, idx) => (
//               <div
//                 key={idx}
//                 className="group bg-gradient-to-tr from-indigo-800 via-indigo-700 to-indigo-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:scale-105"
//               >
//                 <img
//                   src={blog.image}
//                   alt={blog.title}
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-5 space-y-3">
//                   <h3 className="text-xl font-semibold text-white">
//                     {blog.title}
//                   </h3>
//                   <p className="text-sm text-gray-300">
//                     {blog.description}
//                   </p>
//                   <button className="inline-flex items-center px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition duration-300">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Cloud, Shield, Server, Lock } from "lucide-react";

// Hero Slider Data
const heroSlides = [
  {
    title: "Technology. Innovation. Results",
    subtitle:
      " 500+ successful projects powering businesses worldwide with integrity and expertise.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424542/1_dyitme.png",
  },
  {
    title: " Transforming Ideas into Digital Reality ",
    subtitle:
      " Certified experts delivering tailored IT solutions for public and private sectors.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757425395/19_jfjzn7.jpg",
  },
  {
    title: "Elevating Healthcare Through Innovation",
    subtitle:
      "Modern IT solutions that enhance patient care, streamline operations, and ensure compliance.IT modernization that drives agility, efficiency, and long-term growth. ",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424547/4_qfdxp3.png",
  },
  {
    title: "From Legacy to Future-Ready",
    subtitle:
      "Seamless IT modernization that drives agility, efficiency, and long-term growth.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424544/8_dimqti.png",
  },
  {
    title: "AI-Powered Transformation for Smarter Business",
    subtitle:
      "Harness artificial intelligence to unlock insights, automate processes, and accelerate innovation.",
    image: "https://res.cloudinary.com/dqkdopyej/image/upload/v1757424543/12_o5sl5x.png",
  },
];

// Services Data
const services = [
  {
    icon: <Brain className="h-10 w-10" />,
    title: "AI Transformation",
    description:
      "Harness AI to revolutionize business processes and decision-making.",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "Modernization",
    description:
      "Migrate & optimize with cloud solutions for scalability & efficiency.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Consulting",
    description: "Expert guidance to navigate complex technology challenges.",
  },
];

// ✅ Solutions Data
const solutions = [
  {
    icon: <Server className="h-10 w-10" />,
    title: "ServiceNow",
    description: "Streamline workflows and boost productivity with ServiceNow.",
  },
  {
    icon: <Cloud className="h-10 w-10" />,
    title: "AWS",
    description: "Scalable and secure cloud services powered by AWS.",
  },
  {
    icon: <Brain className="h-10 w-10" />,
    title: "Salesforce",
    description: "Enhance customer engagement with Salesforce solutions.",
  },
  {
    icon: <Lock className="h-10 w-10" />,
    title: "DevSecOps",
    description:
      "Embed security at every stage with DevSecOps transformation.",
  },
];

// Blogs Data
const blogs = [
  {
    title: "Big DATA",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: "./public/1.png",
  },
  {
    title: "Cloud",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: "./public/2.png",
  },
  {
    title: "DevOps Transformation",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page.",
    image: "./public/3.png",
  },
];

export default function LandingPage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="w-full">
      {/* ================== HERO SLIDER ================== */}
      <section className="relative w-full min-h-screen overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-20 flex flex-col justify-center items-start h-full px-6 sm:px-10 md:px-20 lg:px-32 text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 md:mb-6">
                {slide.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl">
                {slide.subtitle}
              </p>
              <Link
                to="/contact"
                className="mt-6 md:mt-8 inline-flex items-center px-6 md:px-8 py-3 md:py-4 
                  bg-blue/10 backdrop-blur-md text-white font-semibold 
                  rounded-lg border border-blue/30 shadow-lg hover:bg-blue/20 
                  transition duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* ================== WHAT WE DO ================== */}
      <section
        id="services"
        className="relative py-32 bg-gray-50 overflow-hidden"
      >
        <div className="relative max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col justify-center">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h2>
            <p className="text-lg text-gray-700 mb-6">
             Technogen is a certified minority women-owned business enterprise that has been providing global IT services and consulting since 2003. From our headquarters in Chantilly, VA, and offices in Hyderabad and Khammam, India, our team of certified experts has powered over 500 successful end-to-end solutions for public and private sector clients. We specialize in delivering innovative, scalable, and value-driven technology solutions. 
            </p>
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Know more
            </span>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 flex items-start gap-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#172059] to-[#2a3491] rounded-2xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#172059] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       {/* ================== HOW WE DO DIFFERENTLY ================== */}
     <section
  id="how-we-differ"
  className="relative py-24 bg-cover bg-center"
  style={{
    backgroundImage: "url('https://wallpapercave.com/wp/YsmdCUB.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-white/80"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-0 sm:px-6 text-center">
    <div className="bg-white/90 w-full p-10 sm:p-16 shadow-xl">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        How We Do Differently
      </h2>
      <p className="text-xl text-gray-700 mb-12">
        At Technogen, sustainability is integral to business success.
      </p>
      <ul className="list-disc pl-6 space-y-3 text-left text-gray-700">
        <li>We act ethically, transparently, and responsibly.</li>
        <li>Making sustainability a part of all global business relationships.</li>
        <li>
          As an Accrediting Body for the global SCS-9001 standard, we advance ICT
          supply chain security.
        </li>
        <li>
          Ensuring trusted suppliers, resilient infrastructure, and long-lasting
          sustainable impact across the entire value chain.
        </li>
      </ul>
    </div>
  </div>
</section>

      {/* OUR SOLUTIONS */}
<section id="solutions" className="py-24 bg-gray-50 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 lg:flex lg:items-start lg:gap-12">

    {/* Left Side */}
    <div className="lg:w-1/3 mb-12 lg:mb-0">
      <h2 className="text-5xl font-bold mb-4 text-gray-900">Our Solutions</h2>
      <p className="text-lg text-gray-600">
        End-to-end IT services delivering innovation, efficiency, and business transformation.
      </p>
    </div>

    {/* Right Side - 2x2 Grid */}
    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
      {[
        {
          title: "ServiceNow",
          description: "Streamlining workflows for smarter, faster, enterprise-wide service delivery.",
          iconUrl: "https://tse4.mm.bing.net/th/id/OIP.F6gEN8Y_-GGyL6r2nPzLYAHaFd?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
          borderColor: "border-indigo-900"
        },
        {
          title: "Salesforce",
          description: "Connecting customers through smarter, data-driven CRM solutions globally.",
          iconUrl: "https://cdn-icons-png.flaticon.com/512/11132/11132040.png",
          borderColor: "border-blue-700"
        },
        {
          title: "AWS",
          description: "Cloud-powered scalability driving agility, security, and business growth.",
          iconUrl: "https://w7.pngwing.com/pngs/555/220/png-transparent-aws-hd-logo.png",
          borderColor: "border-orange-500"
        },
        {
          title: "DevSecOps Transformation",
          description: "Embedding security into agile development for continuous innovation.",
          iconUrl: "https://media.istockphoto.com/id/2144257673/vector/promote-secure-development-practices-with-the-devsecops-icon-integrating-security-into.jpg?s=170667a&w=0&k=20&c=8PH_JqfQ2BPEtuy--AWOh4U3oY5gUCmBfkQRu2FkVIE=",
          borderColor: "border-green-600"
        },
      ].map((solution, idx) => (
        <div
          key={idx}
          className="group p-8 rounded-xl bg-white shadow hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center animate-fade-up"
          style={{ animationDelay: `${idx * 0.2}s` }}
        >
          {/* Outer Circle with Border */}
          <div className={`relative w-20 h-20 flex items-center justify-center rounded-full border-4 ${solution.borderColor} mb-4 group-hover:scale-110 transition-transform`}>
            <img src={solution.iconUrl} alt={solution.title} className="h-10 w-10 object-contain" />
          </div>

          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-800 transition-colors mb-2">
            {solution.title}
          </h3>
          <p className="text-gray-600 text-sm">{solution.description}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Tailwind Keyframe Animation */}
  <style>{`
    @keyframes fadeUp {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-up {
      animation: fadeUp 0.6s ease forwards;
    }
  `}</style>
</section>

      {/* ================== BLOGS ================== */}
      <section
        id="blogs"
        className="relative py-16 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Blogs
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mt-4 mb-10">
            Stay updated with the latest insights in technology, innovation, and
            business strategy.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <div
                key={idx}
                className="group bg-gradient-to-tr from-indigo-800 via-indigo-700 to-indigo-800 rounded-2xl shadow-lg overflow-hidden transform transition duration-500 hover:-translate-y-2 hover:scale-105"
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5 space-y-3">
                  <h3 className="text-xl font-semibold text-white">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-300">{blog.description}</p>
                  <button className="inline-flex items-center px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold hover:bg-pink-600 transition duration-300">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

